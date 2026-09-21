import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
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
  /*
   * Título em português: esta exportação é estática e resolvida no servidor,
   * antes do React montar. O alternador PT/EN é estado de cliente, então a aba
   * do navegador e os crawlers leem sempre esta string, qualquer que seja o
   * idioma escolhido na tela. O equivalente em inglês é
   * "Isadora Cheuiche | Content Strategist", e só passa a ser servível quando
   * houver rota por idioma (/en) com generateMetadata.
   */
  title: "Isadora Cheuiche | Estrategista de Conteúdo",
  description:
    "Portfólio de Isadora Cheuiche — UX/UI Designer com foco em produtos B2B e SaaS. Cases reais com processo, desafios e resultados.",
  openGraph: {
    title: "Isadora Cheuiche | Estrategista de Conteúdo",
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
    /*
     * data-scroll-behavior: exigido a partir do Next 16.
     *
     * O globals.css põe scroll-behavior: smooth no html, para as âncoras da
     * home rolarem suave. Até o Next 15 o framework neutralizava isso durante
     * a troca de rota; no 16 ele deixou de fazer isso por padrão, e a ida da
     * home para uma página interna passou a animar a subida até o topo em vez
     * de saltar — medido: scrollY caindo de 1411 ao longo de ~500ms. Este
     * atributo devolve o comportamento antigo sem tirar a rolagem suave das
     * âncoras. Ver node_modules/next/dist/docs/01-app/02-guides/upgrading/
     * version-16.md, seção "Scroll Behavior Override".
     */
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <ScrollAnimateProvider />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
