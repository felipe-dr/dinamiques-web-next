import { ApiResponseModel, ArticleModel, CategoryModel } from '@/models';

const API_URL = process.env.DINAMIQUES_API;

export async function getCategories(): Promise<CategoryModel[] | undefined> {
  const response = await fetch(`${API_URL}/categories`);

  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }

  const { data }: ApiResponseModel<CategoryModel[]> = await response.json();

  return data;
}

export async function getArticles(): Promise<ArticleModel[] | undefined> {
  const response = await fetch(`${API_URL}/articles`);

  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }

  const { data }: ApiResponseModel<ArticleModel[]> = await response.json();

  return data;
}

export async function getArticleBySlug(slug: string) {
  const articles = await getArticles();

  return articles?.find(({ article }) => article.slug === slug);
}

export async function getRecommendedArticlesByCategory(
  categoryName: string,
  excludeId: string,
): Promise<ArticleModel[] | undefined> {
  const articles = await getArticles();

  return articles?.filter(
    (article) =>
      article.category.name === categoryName && article.id !== excludeId,
  );
}
