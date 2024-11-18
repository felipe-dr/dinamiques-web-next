import {
  ApiResponseModel,
  ArticleModel,
  AuthModel,
  CategoryModel,
} from '@/models';

const API_URL = process.env.NEXT_PUBLIC_DINAMIQUES_API;

export async function signin(values: {
  email: string;
  password: string;
}): Promise<AuthModel> {
  const response = await fetch('/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const { statusCode, error, message }: ApiResponseModel<AuthModel> =
      await response.json();

    throw {
      statusCode,
      error,
      message,
    };
  }

  return response.json();
}

export async function getCategories(): Promise<CategoryModel[] | undefined> {
  const response = await fetch(`${API_URL}/categories`);

  // TODO: change to friendly error
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }

  const { data }: ApiResponseModel<CategoryModel[]> = await response.json();

  return data;
}

export async function getArticles(): Promise<ArticleModel[] | undefined> {
  const response = await fetch(`${API_URL}/articles`);

  // TODO: change to friendly error
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
