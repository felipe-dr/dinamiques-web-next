import { ComponentProps, ElementType, JSX } from 'react';

import { cn } from '@/libs/utils';

interface SectionBoxComponentProps extends ComponentProps<'section'> {
  tag: 'section' | 'article' | 'aside' | 'div';
  children: React.ReactNode;
}

export function SectionBoxComponent({
  tag,
  children,
  ...props
}: SectionBoxComponentProps): JSX.Element {
  const Element = tag as ElementType;

  return (
    <Element
      {...props}
      className={cn(
        'py-13 lg:py-14 container flex max-w-screen-xl items-center',
        props.className,
      )}
    >
      {children}
    </Element>
  );
}
