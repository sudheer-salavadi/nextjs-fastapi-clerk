// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher([
//   '/code(.*)',
//   '/conversation(.*)',
//   '/dashboard(.*)',
//   '/image(.*)',
//   '/music(.*)',
//   '/settings(.*)',
//   '/api/code(.*)',
//   '/api/conversation(.*)',
//   '/api/image(.*)',
//   '/api/music(.*)',
//   '/api/stripe(.*)',
//   '/api/video(.*)'
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();
// });

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
}


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};