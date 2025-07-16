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
  useLeftIconForm,
  useRightIconForm,
  useDisabledForm,
} from '@datas/pages/formLayout/hooks';

import { HeaderInfo, isHeader } from './items/HeaderInfo';
import { RenderInput } from './items';
import {
  ButtonFormType,
  FormField as FormFieldProps,
  FormFieldGroup as FormFieldGroupProps,
  FormLayoutVariant,
  ID_BASIC_HEADER_FORM,
  ID_DISABLED_FORM,
  ID_FORM_LEFT_ICON,
  ID_FORM_RIGHT_ICON,
} from '@datas/pages/formLayout/types';
import { FormLayoutProvider } from '@datas/pages/formLayout/FormContextLayout';
import { UseFormReturn } from 'react-hook-form';

const formHooksMap: Record<string, any> = {
  [ID_ORDINARY_FORM]: useOrdinaryForm,
  [ID_INPUT_VARIANT_FORM]: useInputVariantForm,
  [ID_DEFAULT_FORM]: useDefaultForm,
  [ID_BASIC_HEADER_FORM]: useBasicHeaderForm,
  [ID_DISABLED_FORM]: useDisabledForm,
  [ID_FORM_LEFT_ICON]: useLeftIconForm,
  [ID_FORM_RIGHT_ICON]: useRightIconForm,
};

const FieldGroup = ({
  group,
  control,
}: {
  group: FormFieldGroupProps;
  control: UseFormReturn['control'];
}) => (
  <Box col={group.col} className="gap-x-10">
    {group.child.map((child: any, childIndex: number) => (
      <FormField
        key={childIndex}
        control={control}
        name={child.id}
        render={({ field }) => (
          <FormItem>
            {RenderInput({ item: child, field })}
            {child.description && (
              <FormDescription>{child.description}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    ))}
  </Box>
);

const SingleField = ({
  item,
  control,
}: {
  item: FormFieldProps;
  control: UseFormReturn['control'];
}) => (
  <FormField
    control={control}
    name={item.id}
    render={({ field }) => (
      <FormItem>
        {RenderInput({ item, field })}
        {item.description && (
          <FormDescription>{item.description}</FormDescription>
        )}
        <FormMessage />
      </FormItem>
    )}
  />
);

const FormButtons = ({
  buttons,
  onCancel,
}: {
  buttons: ButtonFormType[];
  onCancel: ButtonFormType['onClick'];
}) => (
  <Box className="mt-4 flex items-center justify-start space-x-2">
    {buttons.map((btn, index) =>
      btn?.id ? (
        <Button
          key={index}
          type={btn.type}
          color={btn.color}
          disabled={btn.disabled}
          {...(btn.label === 'Cancel' ? { onClick: onCancel } : {})}
        >
          {btn.label}
        </Button>
      ) : null
    )}
  </Box>
);

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
                  <FieldGroup key={index} group={item} control={form.control} />
                );
              }

              if ('type' in item) {
                return (
                  <SingleField key={index} item={item} control={form.control} />
                );
              }
            })}

            <FormButtons
              buttons={buttonFormConfig[variant]}
              onCancel={onCancel}
            />
          </form>
        </Form>
      </Box>
    </FormLayoutProvider>
  );
};

PreviewFormLayout.displayName = 'PreviewFormLayout';
export { PreviewFormLayout };
