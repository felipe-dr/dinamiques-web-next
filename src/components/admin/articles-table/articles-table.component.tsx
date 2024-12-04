import { getArticlesHttp } from '@/http';

import { DataTableComponent } from '@/components';

import {
  articlesTableColumns,
  ArticlesTableColumns,
} from './articles-table-columns.component';

export async function ArticlesTableComponent(): Promise<JSX.Element> {
  const articles = await getArticlesHttp();
  const articlesData = articles?.data;
  const articlesTableData: ArticlesTableColumns[] = [];

  articlesData?.map(({ id, teacher, category, article }) => {
    return articlesTableData.push({
      id,
      category: category.name,
      teacher: teacher.name,
      title: article.title,
      slug: article.slug,
      publishedLastDate: article.publishedLastDate,
      isPublished: article.isPublished,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      createdBy: article.createdBy,
      updatedBy: article.updatedBy,
    });
  });

  return articlesData?.length ? (
    <DataTableComponent
      columns={articlesTableColumns}
      data={articlesTableData}
      filter={{ placeholdder: 'título', term: 'title' }}
    />
  ) : (
    <p>Não há artigos disponíveis no momento.</p>
  );
}
