import { DocumentTextIcon, TagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import {
  AdminContentWrapperHeaderComponent,
  AdminContentWrapperSectionComponent,
} from '@/components';

export default function AdminPage(): JSX.Element {
  return (
    <>
      <AdminContentWrapperHeaderComponent title="Olá, seja bem vindo!"></AdminContentWrapperHeaderComponent>
      <AdminContentWrapperSectionComponent>
        <ul className="grid items-center gap-3">
          <li>
            <Link
              className="flex items-center gap-2 rounded-lg border border-base-14 bg-base-15 p-7 font-semibold text-base-white transition-colors hover:border-primary-3"
              href="/admin/categories"
            >
              <TagIcon className="size-6 text-primary-6" />
              Categorias
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 rounded-lg border border-base-14 bg-base-15 p-7 font-semibold text-base-white transition-colors hover:border-primary-3"
              href="/admin/articles"
            >
              <DocumentTextIcon className="size-6 text-primary-6" />
              Artigos
            </Link>
          </li>
        </ul>
      </AdminContentWrapperSectionComponent>
    </>
  );
}
