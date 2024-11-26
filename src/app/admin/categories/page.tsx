import Link from 'next/link';

import { cn } from '@/shared/libs';

import {
  ContentWrapperHeaderComponent,
  ContentWrapperSectionComponent,
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
      <ContentWrapperHeaderComponent title="categorias">
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
      </ContentWrapperHeaderComponent>
      <ContentWrapperSectionComponent>
        <CategoriesTableComponent />
      </ContentWrapperSectionComponent>
    </>
  );
}
