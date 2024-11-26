import Link from 'next/link';

import { cn } from '@/shared/libs';

import {
  ContentWrapperHeaderComponent,
  ContentWrapperSectionComponent,
  ArticlesTableComponent,
  buttonVariants,
  NavigationBreadcrumbComponent,
} from '@/components';

export default function ArticlesAdminPage(): JSX.Element {
  const breadcrumbItems = [
    {
      label: 'artigos',
      path: '',
    },
  ];

  return (
    <>
      <ContentWrapperHeaderComponent title="artigos">
        <NavigationBreadcrumbComponent
          className="m-0 mb-3 md:m-0 lg:m-0"
          breadcrumbItems={breadcrumbItems}
        />
        <Link
          className={cn(
            buttonVariants({ variant: 'admin', color: 'primary' }),
            'justify-self-end',
          )}
          href="/admin/articles/add"
        >
          Adicionar
        </Link>
      </ContentWrapperHeaderComponent>
      <ContentWrapperSectionComponent>
        <ArticlesTableComponent />
      </ContentWrapperSectionComponent>
    </>
  );
}
