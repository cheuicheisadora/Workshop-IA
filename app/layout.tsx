import type { Metadata } from "next"
import "./globals.css"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { ScrollAnimateProvider } from "@/components/ui/scroll-animate"
import { LanguageProvider } from "@/context/language"

export const metadata: Metadata = {
  title: "Portfólio | Isadora Cheuiche",
  description:
    "Portfólio de Isadora Cheuiche — UX/UI Designer especializada em produto digital, pesquisa com usuários e design de interfaces.",
  openGraph: {
    title: "Portfólio | Isadora Cheuiche",
    description:
      "UX/UI Designer focada em produto digital. Veja os projetos de Isadora Cheuiche.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <CustomCursor />
          <ScrollAnimateProvider />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
