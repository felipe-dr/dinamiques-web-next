import { ApiResponseWithDataModel, ArticleModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

type GetArticlesHttpResponse = ArticleModel[] | undefined;

export async function getArticlesHttp(): Promise<GetArticlesHttpResponse> {
  const response = await fetch(`${API_URL}/articles`);

  // TODO: change to friendly error
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }

  const { data }: ApiResponseWithDataModel<ArticleModel[]> =
    await response.json();

  return data;
}
