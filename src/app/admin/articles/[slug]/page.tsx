import { getArticleBySlugHttp, getCategoriesHttp } from '@/http';

import {
  AdminContentWrapperHeaderComponent,
  AdminContentWrapperSectionComponent,
  ArticleFormComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

interface ArticleEditAdminPageProps {
  params: { slug: string };
}

export default async function ArticleEditAdminPage({
  params: { slug },
}: ArticleEditAdminPageProps): Promise<JSX.Element> {
  const categories = await getCategoriesHttp();
  const article = await getArticleBySlugHttp({ slug });

  const breadcrumbItems = [
    {
      label: 'artigos',
      path: '/admin/articles',
    },
    {
      label: 'editar',
      path: '',
    },
  ];

  return (
    <>
      <AdminContentWrapperHeaderComponent title="artigos">
        <NavigationBreadcrumbComponent
          className="m-0 md:m-0 lg:m-0"
          breadcrumbItems={breadcrumbItems}
        />
      </AdminContentWrapperHeaderComponent>
      <AdminContentWrapperSectionComponent>
        <ArticleFormComponent categories={categories} articleModel={article} />
      </AdminContentWrapperSectionComponent>
    </>
  );
}
