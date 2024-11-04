'use client';

import { articlesMock } from '@/mocks';

import { useCategoryContext } from '@/contexts';

import { ArticleCardComponent } from '../article-card/article-card.component';
import { SectionBoxComponent } from '../section-box/section-box.component';
import {
  PaginationComponent,
  PaginationContentComponent,
  PaginationItemComponent,
  PaginationLinkComponent,
  PaginationNextComponent,
  PaginationPreviousComponent,
} from '../ui/pagination';

// TODO: Add dinamic pagination and filter by title or content
export function ArticlesSectionComponent(): JSX.Element {
  const { allCategories, filteredCategory } = useCategoryContext();
  const filteredArticles =
    filteredCategory.name === allCategories.name
      ? articlesMock
      : articlesMock.filter(
          (article) => article.category.name === filteredCategory.name,
        );

  return (
    <SectionBoxComponent className="grid" tag="section">
      <div className="grid items-stretch justify-items-center gap-9 sm:grid-cols-articles-section">
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
      </div>
      <footer>
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
      </footer>
    </SectionBoxComponent>
  );
}
