import { NextResponse } from 'next/server'
import { languagesArray, defaultLocale } from '../i18n.config'

export function middleware(request: any) {

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set('x-url', request.nextUrl.pathname.split("/")[1]);

  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = languagesArray.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = defaultLocale

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    )
  }
  else {
    return (
      NextResponse.next({
        request: {
          headers: requestHeaders,
        }
      })
    )
  }

}
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/',
  ],
};