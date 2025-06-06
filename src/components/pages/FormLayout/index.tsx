import { CheckboxItem, InputItem } from '@components/pages/FormLayout/Item';
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
  FormLayoutVariant,
  ID_INPUT_VARIANT_FORM,
  ID_ORDINARY_FORM,
} from '@datas/pages/formLayout/config';
import { useInputVariantForm } from '@datas/pages/formLayout/hooks/useInputVariantForm';
import { useOrdinaryForm } from '@datas/pages/formLayout/hooks/useOrdinaryForm';

const formHooksMap: any = {
  [ID_ORDINARY_FORM]: useOrdinaryForm,
  [ID_INPUT_VARIANT_FORM]: useInputVariantForm,
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
            return (
              <FormField
                key={index}
                control={form.control}
                name={item.id}
                render={({ field }) => (
                  <FormItem>
                    {item.type === 'checkbox' ? (
                      <CheckboxItem
                        item={item}
                        field={field}
                        variant={variant}
                      />
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
          {buttonFormConfig[variant].map((item: any, index: number) => (
            <Button key={index} type={item.type}>
              {item.label}
            </Button>
          ))}
        </form>
      </Form>
    </Box>
  );
};

PreviewFormLayout.DisplayName = 'PreviewFormLayout';
export { PreviewFormLayout };
