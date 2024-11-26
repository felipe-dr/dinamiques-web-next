import { ArticleModel } from '@/models';

import { getArticlesHttp } from '../get-articles/get-articles.http';

interface GetRecommendedArticlesByCategoryHttpRequest {
  categoryName: string;
  excludeId: string;
}

type GetRecommendedArticlesByCategoryHttpResponse = ArticleModel[] | undefined;

export async function getRecommendedArticlesByCategoryHttp({
  categoryName,
  excludeId,
}: GetRecommendedArticlesByCategoryHttpRequest): Promise<GetRecommendedArticlesByCategoryHttpResponse> {
  const articles = await getArticlesHttp();

  return articles?.filter(
    (article) =>
      article.category.name === categoryName && article.id !== excludeId,
  );
}
