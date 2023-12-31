import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
  const isLogin = false;
  if (isLogin) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", req.url));
};

export const config = {
  matcher: ["/dashboard", "/product"],
};
