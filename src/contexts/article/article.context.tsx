'use client';

import { articlesMock } from '@/mocks';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { allActiveCategories, useCategoryContext } from '@/contexts';

import { ArticleModel, CategoryModel } from '@/models';

interface ArticleContextData {
  filteredArticles: ArticleModel[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface ArticleContextReturn {
  filteredArticles: ArticleModel[];
  searchQuery: string;
  handleArticlesFilter: (query: string) => void;
}

interface ArticleProviderProps {
  children: React.ReactNode;
}

const ArticleContext = createContext<ArticleContextData>(
  {} as ArticleContextData,
);

export function ArticleProvider({
  children,
}: ArticleProviderProps): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [articles, setArticles] = useState<ArticleModel[]>([]);
  const { activeCategory } = useCategoryContext();

  const handleSortArticlesByPublishedLastDate = (
    inputArticles: ArticleModel[],
  ) => {
    return inputArticles.sort(
      (a, b) =>
        Number(b.article.publishedLastDate) -
        Number(a.article.publishedLastDate),
    );
  };

  const handleArticlesFilter = useCallback(
    (
      inputArticles: ArticleModel[],
      category: CategoryModel,
      query: string,
    ): ArticleModel[] => {
      let filteredArticles = inputArticles;
      const isSpecificCategory = category.id !== allActiveCategories.id;

      if (isSpecificCategory) {
        filteredArticles = filteredArticles.filter(
          (article) => article.category.name === category.name,
        );
      }

      if (query) {
        filteredArticles = filteredArticles.filter(
          ({ article }) =>
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.content.toLowerCase().includes(query.toLowerCase()),
        );
      }

      return handleSortArticlesByPublishedLastDate(filteredArticles);
    },
    [],
  );

  const filteredArticles = useMemo(() => {
    const categoryToFilter =
      activeCategory.id === allActiveCategories.id
        ? allActiveCategories
        : activeCategory;

    return handleArticlesFilter(articles, categoryToFilter, searchQuery);
  }, [articles, handleArticlesFilter, activeCategory, searchQuery]);

  const value = useMemo(
    () => ({
      filteredArticles,
      searchQuery,
      setSearchQuery,
    }),
    [filteredArticles, searchQuery],
  );

  // TODO: change mock to api
  useEffect(() => {
    const handleGetAllArticles = async () => {
      const allArticles: ArticleModel[] = articlesMock as ArticleModel[];

      setArticles(allArticles);
    };

    handleGetAllArticles();
  }, []);

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
}

export function useArticleContext(): ArticleContextReturn {
  if (useContext(ArticleContext) === undefined) {
    throw new Error('useArticleContext must be used within an ArticleProvider');
  }

  const { filteredArticles, searchQuery, setSearchQuery } =
    useContext(ArticleContext);

  const handleArticlesFilter = (query: string) => {
    setSearchQuery(query);
  };

  return {
    filteredArticles,
    searchQuery,
    handleArticlesFilter,
  };
}
