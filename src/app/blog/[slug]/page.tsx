import { UserIcon } from '@heroicons/react/24/outline';

import {
  getArticleBySlug,
  getArticles,
  getRecommendedArticlesByCategory,
} from '@/http';

import { ArticleModel } from '@/models';

import {
  ArticleAuthorNameComponent,
  ArticlePublishedLastDateComponent,
  ArticleReadingTimeComponent,
  ArticlesRecommendationSectionComponent,
  AvatarComponent,
  AvatarImageComponent,
  ContentRendererComponent,
  HeroComponent,
  HeroContentComponent,
  HeroFooterComponent,
  HeroHeaderComponent,
  NavigationBreadcrumbComponent,
  SectionBoxComponent,
  TitleComponent,
} from '@/components';

export async function generateStaticParams() {
  const articles = await getArticles();

  return articles?.map(({ article }) => ({
    slug: article.slug,
  }));
}

interface ArticlePageProps {
  params: { slug: string };
}

export default async function ArticlePage({
  params: { slug },
}: ArticlePageProps): Promise<JSX.Element> {
  const { id, teacher, category, article } = (await getArticleBySlug({
    slug,
  })) as ArticleModel;

  const recommendedArticles = await getRecommendedArticlesByCategory({
    categoryName: category.name,
    excludeId: id,
  });

  const backgroundImage = {
    path: article.highlightImageUrl,
    alt: article.title,
    width: 1600,
    height: 640,
    isPriority: true,
  };

  const breadcrumbItems = [
    {
      label: category.name,
      path: '/blog',
    },
    {
      label: article.title,
      path: '',
    },
  ];

  return (
    <>
      <HeroComponent backgroundImage={backgroundImage}>
        <HeroHeaderComponent>
          <NavigationBreadcrumbComponent breadcrumbItems={breadcrumbItems} />
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
        {recommendedArticles && recommendedArticles.length > 0 && (
          <ArticlesRecommendationSectionComponent
            articles={recommendedArticles}
          />
        )}
      </main>
    </>
  );
}
