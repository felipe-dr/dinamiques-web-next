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
      {children}
      <SectionDecoratorComponent className="absolute bottom-0 z-[2] fill-base-16" />
    </section>
  );
}

interface HeroHeaderComponentProps extends ComponentProps<'header'> {
  children: React.ReactNode;
}

export function HeroHeaderComponent({
  children,
  ...props
}: HeroHeaderComponentProps): JSX.Element {
  return (
    <header
      {...props}
      className={cn(
        'container relative z-[1] flex max-w-screen-xl items-center justify-between',
        props.className,
      )}
    >
      {children}
    </header>
  );
}

interface HeroContentComponentProps extends ComponentProps<'div'> {
  children: React.ReactNode;
}

export function HeroContentComponent({
  children,
  ...props
}: HeroContentComponentProps): JSX.Element {
  return (
    <div
      {...props}
      className={cn(
        'container relative z-[1] flex max-w-screen-xl items-center',
        props.className,
      )}
    >
      {children}
    </div>
  );
}

interface HeroFooterComponentProps extends ComponentProps<'footer'> {
  children: React.ReactNode;
}

export function HeroFooterComponent({
  children,
  ...props
}: HeroFooterComponentProps): JSX.Element {
  return (
    <footer
      {...props}
      className={cn(
        'container relative z-[1] flex max-w-screen-xl items-center',
        props.className,
      )}
    >
      {children}
    </footer>
  );
}
