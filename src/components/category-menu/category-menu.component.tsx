'use client';

import { categoriesMock } from '@/mocks';

import { useCategoryContext } from '@/contexts';

import {
  TabsComponent,
  TabsListComponent,
  TabsTriggerComponent,
} from '@/components';

export function CategoryMenuComponent(): JSX.Element {
  const {
    allActiveCategories,
    handleCategoriesFilter: handleCategoryFilter,
    handleCategoriesAlphabetically,
  } = useCategoryContext();

  const categoriesAlphabeticalOrder =
    handleCategoriesAlphabetically(categoriesMock);

  return (
    <TabsComponent
      className="mx-auto w-full overflow-x-auto rounded-lg border border-base-14 bg-base-15 text-center"
      defaultValue={allActiveCategories.name}
    >
      <TabsListComponent>
        <TabsTriggerComponent
          key={allActiveCategories.id}
          value={allActiveCategories.name}
          style={{ borderColor: allActiveCategories.color }}
          onClick={() => handleCategoryFilter(allActiveCategories)}
        >
          {allActiveCategories.name}
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
