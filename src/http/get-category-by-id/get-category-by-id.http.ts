import { ApiResponseWithDataModel, CategoryModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

interface GetCategoryByIdHttpRequest {
  id: string;
}

type GetCategoryByIdHttpResponse = CategoryModel | undefined;

export async function getCategoryByIdHttp({
  id,
}: GetCategoryByIdHttpRequest): Promise<GetCategoryByIdHttpResponse> {
  const response = await fetch(`${API_URL}/categories/${id}`);

  // TODO: change to friendly error
  if (!response.ok) {
    throw new Error('Failed to fetch category');
  }

  const { data }: ApiResponseWithDataModel<CategoryModel> =
    await response.json();

  return data;
}
