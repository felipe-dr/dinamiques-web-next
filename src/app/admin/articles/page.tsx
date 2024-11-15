'use client';

import { useRouter } from 'next/navigation';

import { cn } from '@/libs';

import {
  AdminContentWrapperHeaderComponent,
  AdminContentWrapperSectionComponent,
  ArticlesTableComponent,
  ButtonComponent,
  buttonVariants,
  NavigationBreadcrumbComponent,
} from '@/components';

export default function ArticlesAdminPage(): JSX.Element {
  const router = useRouter();

  const breadcrumbItems = [
    {
      label: 'artigos',
      path: '',
    },
  ];

  return (
    <>
      <AdminContentWrapperHeaderComponent title="artigos">
        <NavigationBreadcrumbComponent
          className="m-0 mb-3 md:m-0 lg:m-0"
          breadcrumbItems={breadcrumbItems}
        />
        <ButtonComponent
          className={cn(
            buttonVariants({ variant: 'admin', color: 'primary' }),
            'justify-self-end',
          )}
          onClick={() => router.push('/admin/articles/add')}
        >
          Adicionar
        </ButtonComponent>
      </AdminContentWrapperHeaderComponent>
      <AdminContentWrapperSectionComponent>
        <ArticlesTableComponent />
      </AdminContentWrapperSectionComponent>
    </>
  );
}
