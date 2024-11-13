'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { CategoryModel } from '@/models';

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

interface CategoryFormComponentProps {
  category?: CategoryModel;
}

export function CategoryFormComponent({
  category,
}: CategoryFormComponentProps): JSX.Element {
  const categoriesForm = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: category?.name || '',
      color: category?.color || '',
      isActive: category?.isActive === false ? false : true,
    },
  });

  // TODO: change to send to api
  function handleSubmit(values: z.infer<typeof categorySchema>): void {
    if (category) {
      console.log('Editar', values);
    } else {
      console.log('Adicionar', values);
    }
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
                  disabled={!category}
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
          {category ? 'Salvar' : 'Adicionar'}
        </ButtonComponent>
      </form>
    </FormComponent>
  );
}
