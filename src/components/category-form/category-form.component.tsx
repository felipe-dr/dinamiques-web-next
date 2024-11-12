'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  ButtonComponent,
  FormComponent,
  FormControlComponent,
  FormDescriptionComponent,
  FormFieldComponent,
  FormItemComponent,
  FormLabelComponent,
  FormMessageComponent,
  InputComponent,
  SwitchComponent,
} from '@/components';

import { categorySchema } from './category.schema';

export function CategoryFormComponent(): JSX.Element {
  const categoriesForm = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: '',
      color: '',
      isActive: true,
    },
  });

  // TODO: change to send to api
  function handleSubmit(values: z.infer<typeof categorySchema>): void {
    console.log(values);
  }

  return (
    <FormComponent {...categoriesForm}>
      <form
        className="grid space-y-8"
        onSubmit={categoriesForm.handleSubmit(handleSubmit)}
      >
        <FormFieldComponent
          control={categoriesForm.control}
          name="name"
          render={({ field }) => (
            <FormItemComponent>
              <FormLabelComponent>Nome</FormLabelComponent>
              <FormControlComponent>
                <InputComponent
                  placeholder="Digite o nome"
                  maxLength={50}
                  {...field}
                />
              </FormControlComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
        <FormFieldComponent
          control={categoriesForm.control}
          name="color"
          render={({ field }) => (
            <FormItemComponent>
              <FormLabelComponent>Cor</FormLabelComponent>
              <FormControlComponent>
                <InputComponent
                  placeholder="Digite a cor"
                  maxLength={7}
                  {...field}
                />
              </FormControlComponent>
              <FormDescriptionComponent>
                Obrigatório a ser um hexadecimal #123456.
              </FormDescriptionComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
        <FormFieldComponent
          control={categoriesForm.control}
          name="isActive"
          render={({ field }) => (
            <FormItemComponent className="flex items-center gap-2">
              <FormLabelComponent>Ativo</FormLabelComponent>
              <FormControlComponent>
                <SwitchComponent
                  className="!my-0"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControlComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
        <ButtonComponent
          className="w-full sm:w-max sm:justify-self-end"
          color="primary"
          type="submit"
        >
          Adicionar
        </ButtonComponent>
      </form>
    </FormComponent>
  );
}
