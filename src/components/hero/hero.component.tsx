import Image from 'next/image';
import { ComponentProps, JSX } from 'react';

import { cn } from '@/libs/tailwind/tailwind.lib';

import { SectionDecoratorComponent } from '../section-decorator/section-decorator.component';

interface HeroComponentProps extends ComponentProps<'section'> {
  backgroundImage?: {
    path: string;
    alt: string;
    width: number;
    height: number;
    isPriority?: boolean;
  };
  children: React.ReactNode;
}

export function HeroComponent({
  backgroundImage,
  children,
  ...props
}: HeroComponentProps): JSX.Element {
  return (
    <section
      {...props}
      className={cn(
        'relative bg-base-15 py-15 lg:py-[13.75rem]',
        props.className,
      )}
    >
      {backgroundImage && (
        <Image
          className="absolute top-0 -z-0 size-full object-cover"
          src={backgroundImage.path}
          alt={backgroundImage.alt}
          width={backgroundImage.width}
          height={backgroundImage.height}
          priority={backgroundImage.isPriority}
        />
      )}
      <header className="container relative z-[2] flex max-w-screen-xl items-center justify-between">
        {children}
      </header>
      <SectionDecoratorComponent className="absolute bottom-0 z-[2] fill-base-16" />
    </section>
  );
}
