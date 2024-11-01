'use client';

import { createContext, useContext, useMemo, useState } from 'react';

import { CategoryModel } from '@/models';

interface CategoryContextData {
  filteredCategory: CategoryModel;
  setFilteredCategory: React.Dispatch<React.SetStateAction<CategoryModel>>;
}

interface CategoryContextReturn {
  filteredCategory: CategoryModel;
  allCategories: CategoryModel;
  handleCategoryFilter: (activeCategory: CategoryModel) => void;
  handleCategoriesAlphabeticalOrder: (
    categories: CategoryModel[],
  ) => CategoryModel[];
}

interface CategoryProviderProps {
  children: React.ReactNode;
}

const CategoryContext = createContext<CategoryContextData>(
  {} as CategoryContextData,
);

const allCategories = {
  id: '1',
  name: 'todos',
  color: '#fff',
};

export default function CategoryProvider({
  children,
}: CategoryProviderProps): JSX.Element {
  const [filteredCategory, setFilteredCategory] =
    useState<CategoryModel>(allCategories);

  const value = useMemo(
    () => ({
      filteredCategory,
      setFilteredCategory,
    }),
    [filteredCategory],
  );

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext(): CategoryContextReturn {
  if (useContext(CategoryContext) === undefined) {
    throw new Error(
      'useCategoryContext must be used within a CategoryProvider',
    );
  }

  const { filteredCategory, setFilteredCategory } = useContext(CategoryContext);

  const handleCategoryFilter = (activeCategory: CategoryModel) => {
    setFilteredCategory(activeCategory);
  };

  const handleCategoriesAlphabeticalOrder = (
    categories: CategoryModel[],
  ): CategoryModel[] => {
    return categories.sort((a, b) => a.name.localeCompare(b.name));
  };

  return {
    filteredCategory,
    allCategories,
    handleCategoryFilter,
    handleCategoriesAlphabeticalOrder,
  };
}
