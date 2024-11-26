'use server';

import { cookies } from 'next/headers';
import Link from 'next/link';

import { cn } from '@/libs';

import { SigninDialogComponent } from '../signin-dialog/signin-dialog.component';
import { buttonVariants } from '../ui/button';

export async function ButtonSigninOrEnterAdminComponent(): Promise<JSX.Element> {
  const accesToken = cookies().get('accessToken')?.value;

  return accesToken ? (
    <Link
      className={cn(buttonVariants({ color: 'primary' }), 'w-full')}
      href="/admin"
    >
      Entrar
    </Link>
  ) : (
    <SigninDialogComponent />
  );
}
