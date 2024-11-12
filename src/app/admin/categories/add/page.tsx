import {
  AdminContentWrapperHeaderComponent,
  AdminContentWrapperSectionComponent,
  CategoryFormComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

export default function CategoryAddAdminPage(): JSX.Element {
  const breadcrumbItems = [
    {
      label: 'categorias',
      path: '/admin/categories',
    },
    {
      label: 'adicionar',
      path: '',
    },
  ];

  return (
    <>
      <AdminContentWrapperHeaderComponent title="categorias">
        <NavigationBreadcrumbComponent
          className="m-0 md:m-0 lg:m-0"
          breadcrumbItems={breadcrumbItems}
        />
      </AdminContentWrapperHeaderComponent>
      <AdminContentWrapperSectionComponent>
        <CategoryFormComponent />
      </AdminContentWrapperSectionComponent>
    </>
  );
}
