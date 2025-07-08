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

import {
  useDefaultForm,
  useInputVariantForm,
  useBasicHeaderForm,
  useOrdinaryForm,
} from '@datas/pages/formLayout/hooks';

import { HeaderInfo, isHeader } from './items/HeaderInfo';
import { renderInput } from './items';
import {
  FormLayoutVariant,
  ID_BASIC_HEADER_FORM,
} from '@datas/pages/formLayout/types';
import { FormLayoutProvider } from '@datas/pages/formLayout/FormContextLayout';

const formHooksMap: Record<string, any> = {
  [ID_ORDINARY_FORM]: useOrdinaryForm,
  [ID_INPUT_VARIANT_FORM]: useInputVariantForm,
  [ID_DEFAULT_FORM]: useDefaultForm,
  [ID_BASIC_HEADER_FORM]: useBasicHeaderForm,
};

const PreviewFormLayout = ({
  id,
  variant,
}: {
  id: string;
  variant: FormLayoutVariant;
}) => {
  const { form, onSubmit, onCancel } = formHooksMap[variant]();

  return (
    <FormLayoutProvider value={{ form, control: form.control, variant }}>
      <Box id={id}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mb-3 space-y-4"
          >
            {formLayoutConfig[variant].map((item, index) => {
              if (!item.id) return [];

              if (isHeader(item)) {
                return <HeaderInfo key={index} item={item} index={index} />;
              }

              if ('child' in item) {
                return (
                  <Box col={item.col} key={index} className="gap-x-10">
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

            <Box className="mt-4 flex items-center justify-start space-x-2">
              {buttonFormConfig[variant].map((btn: any, index: number) =>
                btn?.id ? (
                  <Button
                    key={index}
                    type={btn.type}
                    color={btn.color}
                    {...(btn.label === 'Cancel' ? { onClick: onCancel } : {})}
                  >
                    {btn.label}
                  </Button>
                ) : null
              )}
            </Box>
          </form>
        </Form>
      </Box>
    </FormLayoutProvider>
  );
};

PreviewFormLayout.displayName = 'PreviewFormLayout';
export { PreviewFormLayout };
