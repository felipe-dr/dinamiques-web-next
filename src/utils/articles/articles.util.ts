import { ArticleModel } from '@/models';

export function handleRandomSelection(
  articles: ArticleModel[],
): ArticleModel[] {
  return articles.sort(() => Math.random() - 0.5);
}

export function handleSortingDescendingByPublishedLastDate(
  articles: ArticleModel[],
): ArticleModel[] {
  return [...articles].sort((a, b) => {
    const dateA =
      a.article.publishedLastDate instanceof Date
        ? a.article.publishedLastDate.getTime()
        : Date.parse(a.article.publishedLastDate);

    const dateB =
      b.article.publishedLastDate instanceof Date
        ? b.article.publishedLastDate.getTime()
        : Date.parse(b.article.publishedLastDate);

    if (isNaN(dateA) || isNaN(dateB)) {
      console.warn('Data inválida detectada');
      return 0;
    }

    return dateB - dateA;
  });
}
