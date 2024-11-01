'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/libs/utils';

import { buttonVariants } from '../ui/button';

interface NavigationMenuLinkComponentProps {
  menuItem: {
    label: string;
    path: string;
  };
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function NavigationMenuLinkComponent({
  menuItem: { label, path },
  onClick,
}: NavigationMenuLinkComponentProps): JSX.Element {
  const currentPathname = usePathname();

  return (
    <li>
      <Link
        className={cn(
          `${buttonVariants({ variant: 'ghost' })} ${currentPathname === path ? 'bg-base-14 font-semibold text-base-white md:border md:border-base-13 md:text-base-white' : 'text-base-6'} block px-5 py-4 capitalize md:rounded-lg md:bg-transparent md:px-4 md:py-3 md:text-sm lg:px-6 lg:text-lg `,
        )}
        href={path}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
}
