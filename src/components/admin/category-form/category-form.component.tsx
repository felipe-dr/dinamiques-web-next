'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { createCategoryAction, updateCategoryAction } from '@/actions';

import { toast } from '@/data/hooks';

import { CategoryModel } from '@/shared/models';

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
  const router = useRouter();
  const categoriesForm = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      id: category?.id || '',
      name: category?.name || '',
      color: category?.color || '',
      isActive: category?.isActive ?? true,
    },
  });

  const handleSubmit = async (
    values: z.infer<typeof categorySchema>,
  ): Promise<void> => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    try {
      const response = category
        ? await updateCategoryAction(formData)
        : await createCategoryAction(formData);

      if (response.success) {
        toast({
          title: 'Categorias',
          description: response.message,
          variant: 'success',
        });

        router.push('/admin/categories');
      } else {
        throw new Error(response.message || 'Erro inesperado.');
      }
    } catch (error: unknown) {
      toast({
        title: 'Categorias',
        description: String(error) ?? 'Não foi possível criar a categoria.',
        variant: 'destructive',
      });
    }
  };

  return (
    <FormComponent {...categoriesForm}>
      <form
        className="grid space-y-8"
        onSubmit={categoriesForm.handleSubmit(handleSubmit)}
        action={handleSubmit}
      >
        {categoriesForm.getValues('id') && (
          <FormFieldComponent
            control={categoriesForm.control}
            name="id"
            render={({ field }) => (
              <FormItemComponent hidden>
                <FormLabelComponent>Id</FormLabelComponent>
                <FormControlComponent>
                  <InputComponent placeholder="Id" {...field} />
                </FormControlComponent>
                <FormMessageComponent />
              </FormItemComponent>
            )}
          />
        )}
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
