import Box from '@components/UI/Box';
import Button from '@components/UI/Button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/UI/Form';
import { Checkbox } from '@components/UI/Form/Checkbox';
import { Input } from '@components/UI/Form/Input';
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
            console.log(item, 'item');
            return (
              <FormField
                key={index}
                control={form.control}
                name={item.id}
                render={({ field }) => (
                  <FormItem>
                    {item.type === 'checkbox' ? (
                      <div className="flex flex-row-reverse items-center justify-end space-x-2 space-x-reverse">
                        <FormLabel>{item.label}</FormLabel>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            defaultChecked
                            id={`${item.id}-${variant}`}
                          />
                        </FormControl>
                      </div>
                    ) : (
                      <>
                        <FormLabel>{item.label}</FormLabel>
                        <FormControl>
                          <Input
                            id={`${item.id}-${variant}`}
                            type={item.type}
                            placeholder={item.placeholder}
                            {...field}
                          />
                        </FormControl>
                      </>
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
