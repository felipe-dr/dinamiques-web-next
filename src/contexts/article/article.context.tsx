'use client';

import { articlesMock } from '@/mocks';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { ArticleModel, CategoryModel } from '@/models';

import {
  allCategories,
  useCategoryContext,
} from '../category/category.context';

interface ArticleContextData {
  filteredArticles: ArticleModel[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface ArticleContextReturn {
  filteredArticles: ArticleModel[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleArticleFilter: (query: string) => void;
}

interface ArticleProviderProps {
  children: React.ReactNode;
}

// TODO: change mock to api
const ArticleContext = createContext<ArticleContextData | undefined>(undefined);

export function ArticleProvider({
  children,
}: ArticleProviderProps): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [allArticles, setAllArticles] = useState<ArticleModel[]>([]);
  const { filteredCategory } = useCategoryContext();

  const filterArticles = (
    articles: ArticleModel[],
    query: string,
    category: CategoryModel,
  ): ArticleModel[] => {
    let filtered = articles;

    if (category.id !== allCategories.id) {
      filtered = filtered.filter(
        (article) => article.category.name === category.name,
      );
    }

    if (query) {
      filtered = filtered.filter(
        (article) =>
          article.article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.article.content.toLowerCase().includes(query.toLowerCase()),
      );
    }

    return filtered;
  };

  useEffect(() => {
    const loadArticles = async () => {
      const fetchedArticles: ArticleModel[] = articlesMock as ArticleModel[];

      setAllArticles(fetchedArticles);
    };

    loadArticles();
  }, []);

  const filteredArticles = useMemo(() => {
    if (filteredCategory.id === allCategories.id) {
      return filterArticles(allArticles, searchQuery, allCategories);
    }

    return filterArticles(allArticles, searchQuery, filteredCategory);
  }, [allArticles, searchQuery, filteredCategory]);

  const value = useMemo(
    () => ({
      filteredArticles,
      searchQuery,
      setSearchQuery,
    }),
    [filteredArticles, searchQuery],
  );

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
}

export function useArticleContext(): ArticleContextReturn {
  const context = useContext(ArticleContext);

  if (!context) {
    throw new Error('useArticleContext must be used within an ArticleProvider');
  }

  const { filteredArticles, searchQuery, setSearchQuery } = context;

  const handleArticleFilter = (query: string) => {
    setSearchQuery(query);
  };

  return {
    filteredArticles,
    searchQuery,
    setSearchQuery,
    handleArticleFilter,
  };
}
