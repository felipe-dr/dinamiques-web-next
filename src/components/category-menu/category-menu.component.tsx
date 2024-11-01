'use client';

import { categoriesMock } from '@/mocks';

import { useCategoryContext } from '@/contexts';

import {
  TabsComponent,
  TabsListComponent,
  TabsTriggerComponent,
} from '../ui/tabs';

export function CategoryMenuComponent(): JSX.Element {
  const {
    allCategories,
    handleCategoryFilter,
    handleCategoriesAlphabeticalOrder,
  } = useCategoryContext();

  const categoriesAlphabeticalOrder =
    handleCategoriesAlphabeticalOrder(categoriesMock);

  return (
    <TabsComponent
      className="mx-auto overflow-x-auto bg-base-15"
      defaultValue={allCategories.name}
    >
      <TabsListComponent>
        <TabsTriggerComponent
          key={allCategories.id}
          value={allCategories.name}
          style={{ borderColor: allCategories.color }}
          onClick={() => handleCategoryFilter(allCategories)}
        >
          {allCategories.name}
        </TabsTriggerComponent>
        {categoriesAlphabeticalOrder.map((category) => (
          <TabsTriggerComponent
            key={category.id}
            value={category.name}
            style={{ borderColor: category.color }}
            onClick={() => handleCategoryFilter(category)}
          >
            {category.name}
          </TabsTriggerComponent>
        ))}
      </TabsListComponent>
    </TabsComponent>
  );
}
