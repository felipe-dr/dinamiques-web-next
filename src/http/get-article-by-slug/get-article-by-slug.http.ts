import { ArticleModel } from '@/shared/models';

import { getArticlesHttp } from '../get-articles/get-articles.http';

interface GetArticleBySlugHttpRequest {
  slug: string;
}

type GetArticleBySlugHttpResponse = ArticleModel | undefined;

export async function getArticleBySlugHttp({
  slug,
}: GetArticleBySlugHttpRequest): Promise<GetArticleBySlugHttpResponse> {
  const articles = await getArticlesHttp();

  return articles?.find(({ article }) => article.slug === slug);
}
