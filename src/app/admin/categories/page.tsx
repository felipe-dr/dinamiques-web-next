import Link from 'next/link';

import { cn } from '@/libs';

import {
  AdminContentWrapperHeaderComponent,
  AdminContentWrapperSectionComponent,
  buttonVariants,
  CategoriesTableComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

export default function CategoriesAdminPage(): JSX.Element {
  const breadcrumbItems = [
    {
      label: 'categorias',
      path: '',
    },
  ];

  return (
    <>
      <AdminContentWrapperHeaderComponent title="categorias">
        <NavigationBreadcrumbComponent
          className="m-0 mb-3 md:m-0 lg:m-0"
          breadcrumbItems={breadcrumbItems}
        />
        <Link
          className={cn(
            buttonVariants({ variant: 'admin', color: 'primary' }),
            'justify-self-end',
          )}
          href="/admin/categories/add"
        >
          Adicionar
        </Link>
      </AdminContentWrapperHeaderComponent>
      <AdminContentWrapperSectionComponent>
        <CategoriesTableComponent />
      </AdminContentWrapperSectionComponent>
    </>
  );
}
