import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ComponentProps, JSX } from 'react';

import { cn } from '@/libs/tailwind/tailwind.lib';

import { InputComponent } from '../ui/input';

export function SearchInputComponent({
  ...props
}: ComponentProps<'input'>): JSX.Element {
  return (
    <>
      <InputComponent
        {...props}
        className={cn(props.className)}
        type="search"
        placeholder="Buscar por título ou conteúdo"
      />
      <MagnifyingGlassIcon className="absolute right-4 top-1/2 size-[1.042rem] -translate-y-1/2 text-primary-3 lg:right-5 lg:size-[1.34rem]" />
    </>
  );
}
