import {
  AdminContentWrapperHeaderComponent,
  AdminContentWrapperSectionComponent,
  ArticleFormComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

export default function ArticleAddAdminPage(): JSX.Element {
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
        <ArticleFormComponent />
      </AdminContentWrapperSectionComponent>
    </>
  );
}
