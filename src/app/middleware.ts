import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"; // To get the token

export async function middleware(req: Request) {
  // Get the session token (JWT) from the request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log("✌️token --->", token);

  // If the user is logged in and tries to access /auth/login or /auth/register, redirect them to the dashboard
  if (
    token &&
    (req.url.includes("/auth/login") || req.url.includes("/auth/register"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url)); // Redirect to dashboard
  }

  return NextResponse.next(); // Otherwise, continue to the requested page
}

export const config = {
  matcher: ["/auth/login", "/auth/register"], // Match only login and register pages
};
