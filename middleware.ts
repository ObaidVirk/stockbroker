import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionFromRequest } from './lib/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect dashboard route
  if (pathname.startsWith('/dashboard')) {
    const session = await getSessionFromRequest(request);

    // Redirect to login if not authenticated
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Redirect to home if not admin
    if (!session.isAdmin) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
