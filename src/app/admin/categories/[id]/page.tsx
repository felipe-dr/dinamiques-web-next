import { categoriesMock } from '@/mocks';

import { CategoryModel } from '@/models';

import {
  AdminContentWrapperHeaderComponent,
  AdminContentWrapperSectionComponent,
  CategoryFormComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

async function getCategory(id: string) {
  const category = categoriesMock.find(
    (categoryMock) => categoryMock.id === id,
  );

  return category;
}

interface ArticlePageProps {
  params: { id: string };
}

export default async function CategoryEditAdminPage({
  params: { id },
}: ArticlePageProps): Promise<JSX.Element> {
  const category = (await getCategory(id)) as CategoryModel;

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
