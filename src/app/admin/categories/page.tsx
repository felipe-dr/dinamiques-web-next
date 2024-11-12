'use client';

import { useRouter } from 'next/navigation';

import { cn } from '@/libs';

import {
  AdminContentWrapperHeaderComponent,
  AdminContentWrapperSectionComponent,
  ButtonComponent,
  buttonVariants,
  CategoriesTableComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

export default function CategoriesAdminPage(): JSX.Element {
  const router = useRouter();

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
        <ButtonComponent
          className={cn(
            buttonVariants({ variant: 'admin', color: 'primary' }),
            'justify-self-end',
          )}
          onClick={() => router.push('/admin/categories/add')}
        >
          Adicionar
        </ButtonComponent>
      </AdminContentWrapperHeaderComponent>
      <AdminContentWrapperSectionComponent>
        <CategoriesTableComponent />
      </AdminContentWrapperSectionComponent>
    </>
  );
}
