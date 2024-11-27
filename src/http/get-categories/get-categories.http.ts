import { ApiResponseWithDataModel, CategoryModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

type GetCategoriesHttpResponse = CategoryModel[] | undefined;

export async function getCategoriesHttp(): Promise<GetCategoriesHttpResponse> {
  const response = await fetch(`${API_URL}/categories`);

  // TODO: change to friendly error
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }

  const { data }: ApiResponseWithDataModel<CategoryModel[]> =
    await response.json();

  return data;
}
