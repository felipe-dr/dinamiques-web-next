'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

import { deleteArticle } from '@/http';

export const deleteArticleAction = async (formData: FormData) => {
  try {
    const accessToken = cookies().get('accessToken')?.value;
    const id = formData.get('id')!.toString();

    if (!accessToken) {
      return {
        message: 'Um erro inesperado ocorreu.',
      };
    }

    const response = await deleteArticle({ id, accessToken });

    if (response?.error) {
      return { success: false, message: response?.message };
    }

    revalidatePath('/admin/articles');

    return { success: true, message: response?.message };
  } catch (error) {
    return { success: false, message: null, error };
  }
};
