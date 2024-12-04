import { getCategoriesHttp } from '@/http';

import { CategoryModel } from '@/shared/models';
import { handleSortingDescendingByDate } from '@/shared/utils';

import { DataTableComponent } from '@/components';

import { categoriesTableColumns } from './categories-table-columns.component';

export async function CategoriesTableComponent(): Promise<JSX.Element> {
  const categories = await getCategoriesHttp();
  const categoriesData = categories?.data;
  let categoriesSortingDescendingByCreatedDate: CategoryModel[] = [];

  if (categoriesData?.length) {
    categoriesSortingDescendingByCreatedDate = handleSortingDescendingByDate(
      categoriesData,
      (category: CategoryModel) => category.createdAt,
    );
  }

  return categoriesData?.length ? (
    <DataTableComponent
      columns={categoriesTableColumns}
      data={categoriesSortingDescendingByCreatedDate}
      filter={{ placeholdder: 'nome', term: 'name' }}
    />
  ) : (
    <p>Não há categorias disponíveis no momento.</p>
  );
}
