import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const pathname = request.nextUrl.pathname;

  if (!accessToken && pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/blog', request.url));
  }

  if (accessToken && pathname === '/admin') {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
