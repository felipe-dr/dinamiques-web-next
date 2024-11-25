'use client';

import { toast } from '@/hooks';

import { AlertDialogActionComponent } from '@/components';

import { deleteArticleAction } from './delete-article-button.action';

interface DeleteArticleButtonComponentProps {
  id: string;
}

export function DeleteArticleButtonComponent({
  id,
}: DeleteArticleButtonComponentProps): JSX.Element {
  const handleDeleteArticle = async (): Promise<void> => {
    const formData = new FormData();

    formData.append('id', id);

    try {
      const response = await deleteArticleAction(formData);

      if (response.success) {
        toast({
          title: 'Artigos',
          description: response.message,
          variant: 'success',
        });
      } else {
        throw new Error(response.message || 'Erro inesperado.');
      }
    } catch (error) {
      toast({
        title: 'Artigos',
        description: String(error) ?? 'Não foi possível remover o artigo.',
        variant: 'destructive',
      });
    }
  };

  return (
    <form action={handleDeleteArticle}>
      <input type="hidden" name="id" value={id} />
      <AlertDialogActionComponent type="submit">
        Continuar
      </AlertDialogActionComponent>
    </form>
  );
}
