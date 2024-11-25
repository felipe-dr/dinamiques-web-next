'use client';

import { toast } from '@/hooks';

import { AlertDialogActionComponent } from '@/components';

import { deleteCategoryAction } from './delete-category-button.action';

interface DeleteCategoryButtonComponentProps {
  id: string;
}

export function DeleteCategoryButtonComponent({
  id,
}: DeleteCategoryButtonComponentProps): JSX.Element {
  const handleDeleteCategory = async (): Promise<void> => {
    const formData = new FormData();

    formData.append('id', id);

    try {
      const response = await deleteCategoryAction(formData);

      if (response.success) {
        toast({
          title: 'Categorias',
          description: response.message || 'Categoria removida com sucesso.',
          variant: 'success',
        });
      } else {
        toast({
          title: 'Categorias',
          description:
            response.message ?? 'Não foi possível remover a categoria.',
          variant: 'destructive',
        });
      }
    } catch (error: unknown) {
      toast({
        title: 'Categorias',
        description: String(error) ?? 'Um erro inesperado ocorreu!',
        variant: 'destructive',
      });
    }
  };

  return (
    <form action={handleDeleteCategory}>
      <input type="hidden" name="id" value={id} />
      <AlertDialogActionComponent type="submit">
        Continuar
      </AlertDialogActionComponent>
    </form>
  );
}
