'use client';

import { articlesMock } from '@/mocks';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { cn, formattedDateAuditFields } from '@/libs';

import {
  AlertDialogBoxComponent,
  AlertDialogComponent,
  AlertDialogTriggerComponent,
  buttonVariants,
  PaginationComponent,
  PaginationContentComponent,
  PaginationItemComponent,
  PaginationLinkComponent,
  PaginationNextComponent,
  PaginationPreviousComponent,
  TableBodyComponent,
  TableCellComponent,
  TableComponent,
  TableFooterComponent,
  TableHeadComponent,
  TableHeaderComponent,
  TableRowComponent,
} from '@/components';

// TODO: add filter by terms
export function ArticlesTableComponent(): JSX.Element {
  const router = useRouter();

  const handleEditArticle = (articleId: string): void => {
    router.push(`/admin/articles/${articleId}`);
  };

  // TODO: change to send to api
  const handleRemoveArticle = (articleId: string): void => {
    console.log(articleId);
  };

  return (
    <TableComponent className="capitalize">
      <TableHeaderComponent>
        <TableRowComponent className="border-primary-4 hover:bg-transparent">
          <TableHeadComponent className="w-[6.25rem]">ID</TableHeadComponent>
          <TableHeadComponent>Categoria</TableHeadComponent>
          <TableHeadComponent>Docente</TableHeadComponent>
          <TableHeadComponent>Título</TableHeadComponent>
          <TableHeadComponent>Data da última publicação</TableHeadComponent>
          <TableHeadComponent>Publicado</TableHeadComponent>
          <TableHeadComponent>Criado em</TableHeadComponent>
          <TableHeadComponent>Atualizado em</TableHeadComponent>
          <TableHeadComponent>Criado por</TableHeadComponent>
          <TableHeadComponent>Atualizado por</TableHeadComponent>
        </TableRowComponent>
      </TableHeaderComponent>
      <TableBodyComponent>
        {articlesMock.map(({ id, category, teacher, article }) => (
          <TableRowComponent key={id}>
            <TableCellComponent className="font-semibold">
              {id}
            </TableCellComponent>
            <TableCellComponent>{category.name}</TableCellComponent>
            <TableCellComponent>{teacher.name}</TableCellComponent>
            <TableCellComponent>
              <Link
                className={cn(
                  `${buttonVariants({ variant: 'link' })} font-normal text-base-white text-sm lg:text-sm p-0 lg:p-0`,
                )}
                href={`/admin/articles/${id}`}
              >
                {article.title}
              </Link>
            </TableCellComponent>
            <TableCellComponent>
              {formattedDateAuditFields(article.publishedLastDate)}
            </TableCellComponent>
            <TableCellComponent
              className={
                article.isPublished ? 'text-success-4' : 'text-error-4'
              }
            >
              {article.isPublished ? 'sim' : 'não'}
            </TableCellComponent>
            <TableCellComponent>
              {formattedDateAuditFields(article.createdAt)}
            </TableCellComponent>
            <TableCellComponent>
              {formattedDateAuditFields(article.updatedAt)}
            </TableCellComponent>
            <TableCellComponent>{article.createdBy}</TableCellComponent>
            <TableCellComponent>{article.updatedBy}</TableCellComponent>
            <TableCellComponent className="text-right">
              <button
                className="p-2"
                onClick={() => handleEditArticle(id.toString())}
              >
                <PencilIcon className="size-4 text-primary-5" />
              </button>
              <button className="p-2">
                <AlertDialogComponent>
                  <AlertDialogTriggerComponent asChild>
                    <TrashIcon className="size-4 text-error-3" />
                  </AlertDialogTriggerComponent>
                  <AlertDialogBoxComponent
                    title="Tem certeza que deseja excluir?"
                    description={`O artigo ${article.title} será permanentemente excluído.`}
                    handleToContinue={() => handleRemoveArticle(id.toString())}
                  />
                </AlertDialogComponent>
              </button>
            </TableCellComponent>
          </TableRowComponent>
        ))}
      </TableBodyComponent>
      <TableFooterComponent>
        <TableRowComponent className="hover:bg-transparent">
          <TableCellComponent colSpan={11}>
            <PaginationComponent>
              <PaginationContentComponent>
                <PaginationItemComponent>
                  <PaginationPreviousComponent href="#" />
                </PaginationItemComponent>
                <PaginationItemComponent>
                  <PaginationLinkComponent href="#">1</PaginationLinkComponent>
                </PaginationItemComponent>
                <PaginationItemComponent>
                  <PaginationNextComponent href="#" />
                </PaginationItemComponent>
              </PaginationContentComponent>
            </PaginationComponent>
          </TableCellComponent>
        </TableRowComponent>
      </TableFooterComponent>
    </TableComponent>
  );
}
