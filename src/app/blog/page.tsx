import CategoryProvider from '@/contexts/category/category.context';

import {
  CategoryMenuComponent,
  HeroComponent,
  SectionBoxComponent,
  TitleComponent,
} from '@/components';

export default function BlogPage(): JSX.Element {
  return (
    <>
      <HeroComponent>
        <TitleComponent className="text-base-white md:ms-8 lg:ms-11" tag="h1">
          Conhecimento ao alcance de todos
        </TitleComponent>
      </HeroComponent>
      <main>
        <CategoryProvider>
          <SectionBoxComponent tag="section">
            <CategoryMenuComponent />
          </SectionBoxComponent>
        </CategoryProvider>
      </main>
    </>
  );
}
