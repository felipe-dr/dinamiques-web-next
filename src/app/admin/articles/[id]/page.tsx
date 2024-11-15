import { articlesMock } from '@/mocks';

import { ArticleModel } from '@/models';

import {
  AdminContentWrapperHeaderComponent,
  AdminContentWrapperSectionComponent,
  ArticleFormComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

async function getArticle(id: string): Promise<ArticleModel | undefined> {
  const article = articlesMock.find((articleMock) => articleMock.id === id);

  return article;
}

interface ArticleEditAdminPageProps {
  params: { id: string };
}

export default async function ArticleEditAdminPage({
  params: { id },
}: ArticleEditAdminPageProps): Promise<JSX.Element> {
  const article = (await getArticle(id)) as ArticleModel;

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
        <ArticleFormComponent articleModel={article} />
      </AdminContentWrapperSectionComponent>
    </>
  );
}
