'use client';

import { categoriesMock } from '@/mocks';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

import { formattedDateAuditFields } from '@/libs';

import {
  AlertDialogBoxComponent,
  AlertDialogComponent,
  AlertDialogTriggerComponent,
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

export function CategoriesTableComponent(): JSX.Element {
  const router = useRouter();

  const handleEditCategory = (categoryId: string): void => {
    router.push(`/admin/categories/${categoryId}`);
  };

  // TODO: change to send to api
  const handleRemoveCategory = (categoryId: string): void => {
    console.log(categoryId);
  };

  return (
    <TableComponent className="capitalize">
      <TableHeaderComponent>
        <TableRowComponent className="border-primary-4 hover:bg-transparent">
          <TableHeadComponent className="w-[6.25rem]">ID</TableHeadComponent>
          <TableHeadComponent>Nome</TableHeadComponent>
          <TableHeadComponent>Cor</TableHeadComponent>
          <TableHeadComponent>Ativo</TableHeadComponent>
          <TableHeadComponent>Criado em</TableHeadComponent>
          <TableHeadComponent>Atualizado em</TableHeadComponent>
          <TableHeadComponent>Criado por</TableHeadComponent>
          <TableHeadComponent>Atualizado por</TableHeadComponent>
        </TableRowComponent>
      </TableHeaderComponent>
      <TableBodyComponent>
        {categoriesMock.map((category) => (
          <TableRowComponent key={category.id}>
            <TableCellComponent className="font-semibold">
              {category.id}
            </TableCellComponent>
            <TableCellComponent>{category.name}</TableCellComponent>
            <TableCellComponent>{category.color}</TableCellComponent>
            <TableCellComponent
              className={category.isActive ? 'text-success-4' : 'text-error-4'}
            >
              {category.isActive ? 'sim' : 'não'}
            </TableCellComponent>
            <TableCellComponent>
              {formattedDateAuditFields(category.createdAt)}
            </TableCellComponent>
            <TableCellComponent>
              {formattedDateAuditFields(category.updatedAt)}
            </TableCellComponent>
            <TableCellComponent>{category.createdBy}</TableCellComponent>
            <TableCellComponent>{category.updatedBy}</TableCellComponent>
            <TableCellComponent className="text-right">
              <button
                className="p-2"
                onClick={() => handleEditCategory(category.id)}
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
                    description={`A categoria ${category.name} será permanentemente excluída.`}
                    handleToContinue={() => handleRemoveCategory(category.id)}
                  />
                </AlertDialogComponent>
              </button>
            </TableCellComponent>
          </TableRowComponent>
        ))}
      </TableBodyComponent>
      <TableFooterComponent>
        <TableRowComponent className="hover:bg-transparent">
          <TableCellComponent colSpan={5}>
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
