import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { ScrollAnimateProvider } from "@/components/ui/scroll-animate"
import { LanguageProvider } from "@/context/language"

/**
 * Manrope variável, auto-hospedada pelo next/font.
 * Já aplica font-display: swap e dispensa preconnect ao Google Fonts,
 * porque os arquivos passam a ser servidos pelo próprio domínio.
 */
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Isadora Cheuiche | UX/UI Designer",
  description:
    "Portfólio de Isadora Cheuiche — UX/UI Designer com foco em produtos B2B e SaaS. Cases reais com processo, desafios e resultados.",
  openGraph: {
    title: "Isadora Cheuiche | UX/UI Designer",
    description:
      "UX/UI Designer com foco em produtos B2B e SaaS. Cases reais com processo, desafios e resultados.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
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
