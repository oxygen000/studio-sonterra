import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected paths and roles
const protectedPaths = ["/admin/:path*"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip middleware for login page
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Extract token from cookies
  const token = req.cookies.get("token");

  if (!token) {
    // Redirect to login if no token is found
    const loginUrl = new URL("/admin/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Allow access
  return NextResponse.next();
}

// Define paths where middleware should be applied
export const config = {
  matcher: ["/admin/:path*"],
};
