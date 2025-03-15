import { headers } from 'next/dist/client/components/headers';
import { NextResponse } from 'next/server'
 
let locales = ['en-us', 'pt-br', 'nl']
 
// Get the preferred locale, similar to above or using a library
function getLocale(request:any) { return "en-us" }
 
export function middleware(request:any) {
  
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set('x-url', request.nextUrl.pathname.split("/")[1]);

  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
 
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
 
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    )
  }
  else {
    return (
      NextResponse.next({
        request: {
          // Apply new request headers
          headers: requestHeaders,
        }
      })
    )
  }
  
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/',
  ],
};