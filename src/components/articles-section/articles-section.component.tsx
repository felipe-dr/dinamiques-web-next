'use client';

import { articlesMock } from '@/mocks';
import { JSX } from 'react';

import { useCategoryContext } from '@/contexts';

import { ArticleCardComponent } from '../article-card/article-card.component';
import { SectionBoxComponent } from '../section-box/section-box.component';

export function ArticlesSectionComponent(): JSX.Element {
  const { allCategories, filteredCategory } = useCategoryContext();
  const filteredArticles =
    filteredCategory.name === allCategories.name
      ? articlesMock
      : articlesMock.filter(
          (article) => article.category.name === filteredCategory.name,
        );

  return (
    <SectionBoxComponent
      className="grid items-stretch justify-items-center gap-9 sm:grid-cols-articles-section"
      tag="section"
    >
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article, index) => (
          <ArticleCardComponent
            className={`${index % 2 === 0 && filteredArticles.length !== 1 ? 'md:justify-self-end' : 'md:justify-self-start'}`}
            key={article.id}
            article={article}
          />
        ))
      ) : (
        <p>Não há artigos disponíveis no momento.</p>
      )}
    </SectionBoxComponent>
  );
}
