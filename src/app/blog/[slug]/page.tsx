import { articlesMock } from '@/mocks';
import { UserIcon } from '@heroicons/react/24/outline';

import { ArticleModel } from '@/models';

import {
  ArticleAuthorNameComponent,
  ArticleCardComponent,
  ArticlePublishedLastDateComponent,
  ArticleReadingTimeComponent,
  AvatarComponent,
  AvatarImageComponent,
  ContentRendererComponent,
  HeroComponent,
  HeroContentComponent,
  HeroFooterComponent,
  HeroHeaderComponent,
  SectionBoxComponent,
  TitleComponent,
} from '@/components';

async function getArticle(slug: string) {
  const article = articlesMock.find(
    (articleMock) => articleMock.article.slug === slug,
  );

  return article;
}

interface ArticlePageProps {
  params: { slug: string };
}

export default async function ArticlePage({
  params: { slug },
}: ArticlePageProps): Promise<JSX.Element> {
  const { category, teacher, article } = (await getArticle(
    slug,
  )) as ArticleModel;

  // TODO: filter last published article, current article category, only 3 and removes mock
  const filteredArticles = articlesMock.filter(
    (articleMock) => articleMock.category.name === category.name,
  );
  const backgroundImage = {
    path: article.highlighImageUrl,
    alt: article.title,
    width: 1600,
    height: 640,
    isPriority: true,
  };

  return (
    <>
      <HeroComponent backgroundImage={backgroundImage}>
        <HeroHeaderComponent>
          <TitleComponent className="text-base-white md:ms-8 lg:ms-11" tag="h1">
            {article.title}
          </TitleComponent>
        </HeroHeaderComponent>
        <HeroContentComponent className="mb-11 mt-6">
          <p className="max-w-[36.25rem] ps-4 text-md md:ms-8 lg:ms-11">
            {article?.summary}
          </p>
        </HeroContentComponent>
        <HeroFooterComponent className="flex-wrap gap-3">
          <div className="ms-4 flex flex-wrap gap-3 md:ms-[3.25rem] lg:ms-[4.75rem]">
            <AvatarComponent className="flex items-center justify-center bg-base-16">
              {teacher.avatarImageUrl ? (
                <AvatarImageComponent
                  src={teacher.avatarImageUrl}
                  alt={teacher.name}
                />
              ) : (
                <UserIcon className="size-[1.75rem] text-primary-5" />
              )}
            </AvatarComponent>
            <div className="mr-10 grid gap-y-1">
              <ArticleAuthorNameComponent
                className="text-base-white"
                tag="h3"
                authorName={teacher.name}
              />
              <ArticlePublishedLastDateComponent
                className="text-base-5"
                publishedLastDate={article.publishedLastDate}
              />
            </div>
            <ArticleReadingTimeComponent readingTime={article.readingTime} />
          </div>
        </HeroFooterComponent>
      </HeroComponent>
      <main>
        <SectionBoxComponent
          className="max-w-[61.25rem] items-start lg:text-xl"
          tag="section"
        >
          <ContentRendererComponent content={article.content} />
        </SectionBoxComponent>
        {filteredArticles.length > 0 && (
          <SectionBoxComponent
            className="border-y border-base-14 bg-base-16"
            tag="section"
            hasContainer={false}
          >
            <div className="container grid max-w-screen-xl flex-col items-center">
              <TitleComponent
                className="mb-10"
                tag="h2"
                hasDotDecorator={false}
              >
                Recomendados
              </TitleComponent>
              <div className="grid items-stretch justify-items-center gap-9 sm:grid-cols-articles-section">
                {filteredArticles.map((filteredArticle, index) => (
                  <ArticleCardComponent
                    className={`${index % 2 === 0 && filteredArticles.length !== 1 ? 'md:justify-self-end' : 'md:justify-self-start'}`}
                    key={filteredArticle.id}
                    article={filteredArticle}
                  />
                ))}
              </div>
            </div>
          </SectionBoxComponent>
        )}
      </main>
    </>
  );
}
