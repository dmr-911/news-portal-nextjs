import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("request");
  return NextResponse.next(); // return request to actual destination
}

export const config = {
  matcher: "/news", // to filter request
};
