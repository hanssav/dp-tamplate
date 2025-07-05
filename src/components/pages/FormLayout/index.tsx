import { createContext, useContext } from 'react';

import Box from '@components/UI/Box';
import Button from '@components/UI/Button';
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@components/UI/Form';

import {
  buttonFormConfig,
  formLayoutConfig,
  ID_DEFAULT_FORM,
  ID_INPUT_VARIANT_FORM,
  ID_ORDINARY_FORM,
} from '@datas/pages/formLayout/config';

import { useDefaultForm } from '@datas/pages/formLayout/hooks/useDefaultForm';
import { useInputVariantForm } from '@datas/pages/formLayout/hooks/useInputVariantForm';
import { useOrdinaryForm } from '@datas/pages/formLayout/hooks/useOrdinaryForm';
import { renderInput } from '@components/pages/FormLayout/Item';
import {
  FormLayoutVariant,
  HeaderForm,
  ID_BASIC_HEADER_FORM,
} from '@datas/pages/formLayout/types';
import { useBasicHeaderForm } from '@datas/pages/formLayout/hooks/useBacisHeaderForm';

// type FormLayoutContextType = {
//     item: BaseFormField;
//     variant: FormLayoutVariant;
//     field: ControllerRenderProps;
//   };

type FormLayoutContextType = {
  control: any;
  form: any;
  variant: FormLayoutVariant;
};

const FormLayoutContext = createContext<FormLayoutContextType | undefined>(
  undefined
);

export const useFormLayout = () => {
  const context = useContext(FormLayoutContext);
  if (!context) {
    throw new Error(
      'useFormLayout must be used inside FormLayoutContext.Provider'
    );
  }
  return context;
};

const formHooksMap: Record<string, any> = {
  [ID_ORDINARY_FORM]: useOrdinaryForm,
  [ID_INPUT_VARIANT_FORM]: useInputVariantForm,
  [ID_DEFAULT_FORM]: useDefaultForm,
  [ID_BASIC_HEADER_FORM]: useBasicHeaderForm,
};

function isHeader(item: any): item is HeaderForm {
  return (
    typeof item.label === 'string' &&
    typeof item.id === 'string' &&
    item.id.includes('header')
  );
}

const PreviewFormLayout = ({
  id,
  variant,
}: {
  id: string;
  variant: FormLayoutVariant;
}) => {
  const { form, onSubmit } = formHooksMap[variant]();

  return (
    <FormLayoutContext.Provider
      value={{ form, control: form.control, variant }}
    >
      <Box id={id}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mb-3 space-y-4"
          >
            {formLayoutConfig[variant].map((item, index) => {
              if (!item.id) return [];

              if (isHeader(item)) {
                const HeaderIcon = item.icon;
                return (
                  <Box
                    key={index}
                    className="mb-4 flex items-center gap-2 rounded-lg bg-soft-blue p-4"
                  >
                    {HeaderIcon && (
                      <HeaderIcon className="size-5 text-primary" />
                    )}
                    <h2 className="text-sm font-semibold text-primary">
                      {item.label}
                    </h2>
                  </Box>
                );
              }

              if ('child' in item) {
                return (
                  <Box col={item.col} key={index}>
                    {item.child.map((child: any, childIndex: number) => {
                      return (
                        <FormField
                          key={childIndex}
                          control={form.control}
                          name={child.id}
                          render={({ field }) => (
                            <FormItem>
                              {renderInput({ item: child, field })}
                              {child.description && (
                                <FormDescription>
                                  {child.description}
                                </FormDescription>
                              )}
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      );
                    })}
                  </Box>
                );
              }

              if ('type' in item) {
                return (
                  <FormField
                    key={index}
                    control={form.control}
                    name={item.id}
                    render={({ field }) => (
                      <FormItem>
                        {renderInput({ item, field })}
                        {item.description && (
                          <FormDescription>{item.description}</FormDescription>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                );
              }
            })}

            {buttonFormConfig[variant].map((btn: any, index: number) =>
              btn?.id ? (
                <Button key={index} type={btn.type}>
                  {btn.label}
                </Button>
              ) : null
            )}
          </form>
        </Form>
      </Box>
    </FormLayoutContext.Provider>
  );
};

PreviewFormLayout.DisplayName = 'PreviewFormLayout';
export { PreviewFormLayout };
