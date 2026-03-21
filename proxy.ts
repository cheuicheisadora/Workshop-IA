import { NextRequest, NextResponse } from "next/server"

// Middleware leve (Edge Function < 1MB)
// Não importa Auth.js diretamente para evitar estourar o limite de 1MB do Vercel
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rotas protegidas
  const protectedPaths = ["/admin"]
  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  )

  if (isProtected) {
    const sessionToken =
      request.cookies.get("authjs.session-token")?.value ||
      request.cookies.get("__Secure-authjs.session-token")?.value

    if (!sessionToken) {
      const loginUrl = new URL("/login", request.url)
      loginUrl.searchParams.set("callbackUrl", pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
