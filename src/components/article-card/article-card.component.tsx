import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps, JSX } from 'react';

import { cn, formattedPublishedLastDate } from '@/libs';

import { ArticleModel } from '@/models';

import { ArticleReadingTimeComponent } from '../article-reading-time/article-reading-time.component';
import { SectionDecoratorComponent } from '../section-decorator/section-decorator.component';
import { TitleComponent } from '../title/title.component';
import { AvatarComponent, AvatarImageComponent } from '../ui/avatar';
import {
  CardComponent,
  CardContentComponent,
  CardFooterComponent,
  CardHeaderComponent,
} from '../ui/card';

interface ArticleCardComponentProps extends ComponentProps<'article'> {
  article: ArticleModel;
}

export function ArticleCardComponent({
  article: { category, teacher, article },
  ...props
}: ArticleCardComponentProps): JSX.Element {
  return (
    <Link
      className={cn('grid max-w-[27.5rem] w-full group', props.className)}
      href={`/#`}
    >
      <CardComponent
        className="grid overflow-hidden duration-500 ease-in-out group-hover:border-base-11"
        as="article"
      >
        <div className="relative flex h-[13.75rem] overflow-hidden">
          <Image
            className="rounded-t-md object-cover duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70"
            src={article.highlighImageUrl}
            width={440}
            height={220}
            alt={article.title}
          />
          <SectionDecoratorComponent className="absolute bottom-0 z-[2] h-[2.5rem] fill-base-15" />
        </div>
        <CardHeaderComponent className="pb-6 pt-8">
          <h2
            className="mb-3 border-s-2 ps-1 text-xs font-semibold uppercase tracking-[0.038em] text-base-white"
            style={{ borderColor: category.color }}
          >
            {category.name}
          </h2>
          <TitleComponent
            className="font-normal text-primary-3 xs:text-h3-md md:text-h3-md lg:text-h3-md"
            tag="h1"
            hasDecorator={false}
          >
            {article.title}
          </TitleComponent>
        </CardHeaderComponent>
        <CardContentComponent>
          <p className="text-md">{article.summary}</p>
        </CardContentComponent>
        <CardFooterComponent className="flex flex-wrap items-center justify-between gap-5 self-end pt-11">
          <div className="flex items-center gap-x-3">
            <AvatarComponent>
              <AvatarImageComponent
                src={teacher.avatarImageUrl}
                alt={teacher.name}
              />
            </AvatarComponent>
            <div className="grid gap-y-1">
              <h3 className="text-sm font-semibold text-base-4">
                {teacher.name}
              </h3>
              <time
                className="text-xs text-base-6"
                dateTime={article.publishedLastDate.toISOString()}
              >
                {formattedPublishedLastDate(article.publishedLastDate)}
              </time>
            </div>
          </div>
          <ArticleReadingTimeComponent readingTime={article.readingTime} />
        </CardFooterComponent>
      </CardComponent>
    </Link>
  );
}
