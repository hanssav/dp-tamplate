import { CheckboxItem, InputItem } from '@components/pages/FormLayout/Item';
import Box from '@components/UI/Box';
import Button from '@components/UI/Button';
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/UI/Form';
import { Textarea } from '@components/UI/Form/TextArea';
import {
  buttonFormConfig,
  formLayoutConfig,
  FormLayoutVariant,
  ID_DEFAULT_FORM,
  ID_INPUT_VARIANT_FORM,
  ID_ORDINARY_FORM,
} from '@datas/pages/formLayout/config';
import { useDefaultForm } from '@datas/pages/formLayout/hooks/useDefaultForm';
import { useInputVariantForm } from '@datas/pages/formLayout/hooks/useInputVariantForm';
import { useOrdinaryForm } from '@datas/pages/formLayout/hooks/useOrdinaryForm';

const formHooksMap: any = {
  [ID_ORDINARY_FORM]: useOrdinaryForm,
  [ID_INPUT_VARIANT_FORM]: useInputVariantForm,
  [ID_DEFAULT_FORM]: useDefaultForm,
};

const PreviewFormLayout = ({
  id,
  variant,
}: {
  id: string;
  variant: FormLayoutVariant;
}) => {
  const { form, onSubmit } = formHooksMap[variant]();

  return (
    <Box id={id}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mb-3 space-y-4">
          {formLayoutConfig[variant].map((item, index) => {
            if (!item.id) return;
            return (
              <FormField
                key={index}
                control={form?.control}
                name={item?.id}
                render={({ field }) => (
                  <FormItem>
                    {item.type === 'checkbox' ? (
                      <CheckboxItem
                        item={item}
                        field={field}
                        variant={variant}
                      />
                    ) : item.type === 'textarea' ? (
                      <>
                        <FormLabel>{item.label}</FormLabel>
                        <Textarea {...field} />
                      </>
                    ) : (
                      <InputItem item={item} field={field} variant={variant} />
                    )}
                    <FormDescription>{item.description}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}
          {buttonFormConfig[variant].map((item: any, index: number) => {
            if (!item) return;
            return (
              <Button key={index} type={item?.type}>
                {item?.label}
              </Button>
            );
          })}
        </form>
      </Form>
    </Box>
  );
};

PreviewFormLayout.DisplayName = 'PreviewFormLayout';
export { PreviewFormLayout };
