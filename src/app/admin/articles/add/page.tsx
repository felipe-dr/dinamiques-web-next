import { getCategoriesHttp } from '@/http';

import {
  AdminContentWrapperHeaderComponent,
  AdminContentWrapperSectionComponent,
  ArticleFormComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

export default async function ArticleAddAdminPage(): Promise<JSX.Element> {
  const categories = await getCategoriesHttp();

  const breadcrumbItems = [
    {
      label: 'artigos',
      path: '/admin/articles',
    },
    {
      label: 'adicionar',
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
        <ArticleFormComponent categories={categories} />
      </AdminContentWrapperSectionComponent>
    </>
  );
}
