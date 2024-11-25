import { getCategoryByIdHttp } from '@/http';

import {
  AdminContentWrapperHeaderComponent,
  AdminContentWrapperSectionComponent,
  CategoryFormComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

interface CategoryEditAdminPageProps {
  params: { id: string };
}

export default async function CategoryEditAdminPage({
  params: { id },
}: CategoryEditAdminPageProps): Promise<JSX.Element> {
  const category = await getCategoryByIdHttp({ id });

  const breadcrumbItems = [
    {
      label: 'categorias',
      path: '/admin/categories',
    },
    {
      label: 'editar',
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
        <CategoryFormComponent category={category} />
      </AdminContentWrapperSectionComponent>
    </>
  );
}
