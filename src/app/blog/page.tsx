import { ArticleProvider, CategoryProvider } from '@/contexts/';

import {
  ArticlesSectionComponent,
  CategoryMenuComponent,
  HeroComponent,
  HeroHeaderComponent,
  SearchInputComponent,
  SectionBoxComponent,
  TitleComponent,
} from '@/components';

export default function BlogPage(): JSX.Element {
  return (
    <>
      <HeroComponent>
        <HeroHeaderComponent>
          <TitleComponent className="text-base-white md:ms-8 lg:ms-11" tag="h1">
            Conhecimento ao alcance de todos
          </TitleComponent>
        </HeroHeaderComponent>
      </HeroComponent>
      <main>
        <CategoryProvider>
          <ArticleProvider>
            <SectionBoxComponent className="pb-0 lg:pb-0" tag="section">
              <CategoryMenuComponent />
              <form className="relative mt-10 w-full max-w-[27.5rem] md:self-start lg:mt-11">
                <SearchInputComponent />
              </form>
            </SectionBoxComponent>
            <ArticlesSectionComponent />
          </ArticleProvider>
        </CategoryProvider>
      </main>
    </>
  );
}
