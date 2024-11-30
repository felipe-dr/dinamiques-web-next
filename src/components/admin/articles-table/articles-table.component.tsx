import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { getArticlesHttp } from '@/http';

import { cn, formattedDateAuditFields } from '@/shared/libs';

import {
  AlertDialogBoxComponent,
  AlertDialogComponent,
  AlertDialogTriggerComponent,
  buttonVariants,
  DeleteArticleButtonComponent,
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
export async function ArticlesTableComponent(): Promise<JSX.Element> {
  const articles = await getArticlesHttp();
  const articlesData = articles?.data;

  return articlesData?.length ? (
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
        {articlesData?.map(({ id, category, teacher, article }) => (
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
                href={`/admin/articles/${article.slug}`}
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
              <Link
                className="inline-flex p-2"
                href={`/admin/articles/${article.slug}`}
              >
                <PencilIcon className="size-4 text-primary-5" />
              </Link>
              <button className="p-2">
                <AlertDialogComponent>
                  <AlertDialogTriggerComponent asChild>
                    <TrashIcon className="size-4 text-error-3" />
                  </AlertDialogTriggerComponent>
                  <AlertDialogBoxComponent
                    title="Tem certeza que deseja excluir?"
                    description={`O artigo "${article.title}" será permanentemente excluído.`}
                  >
                    <DeleteArticleButtonComponent id={id} />
                  </AlertDialogBoxComponent>
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
  ) : (
    <p>Não há artigos disponíveis no momento.</p>
  );
}
