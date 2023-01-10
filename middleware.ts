import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (!request.nextUrl.searchParams.has('page')) {
    return NextResponse.redirect(new URL('/?page=1', request.url));
  }
}

export const config = {
  matcher: '/',
};
