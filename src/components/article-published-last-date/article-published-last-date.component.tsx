import { ComponentProps } from 'react';

import { cn, formattedPublishedLastDate } from '@/libs';

interface ArticlePublishedLastDateComponentProps
  extends ComponentProps<'time'> {
  publishedLastDate: Date;
}

export function ArticlePublishedLastDateComponent({
  publishedLastDate,
  ...props
}: ArticlePublishedLastDateComponentProps): JSX.Element {
  return (
    <time
      className={cn('text-xs text-base-6', props.className)}
      dateTime={publishedLastDate.toISOString()}
    >
      {formattedPublishedLastDate(publishedLastDate)}
    </time>
  );
}
