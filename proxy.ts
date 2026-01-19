import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const host = request.headers.get('host') || '';
    const currentEnv = process.env.NODE_ENV;

    // Skip proxy in development/test environments or if host is localhost
    if (currentEnv === 'development' || host.includes('localhost') || host.includes('127.0.0.1')) {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    const { pathname, search } = url;

    // Enforce www.mksiteverona.com
    // If host is exactly 'mksiteverona.com' (non-www)
    if (host === 'mksiteverona.com') {
        url.host = 'www.mksiteverona.com';
        url.protocol = 'https:';
        return NextResponse.redirect(url, 301);
    }

    // Ensure HTTPS (optional if Vercel handles it, but good for strictness)
    if (request.headers.get('x-forwarded-proto') === 'http') {
        url.protocol = 'https:';
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
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
    ],
};
