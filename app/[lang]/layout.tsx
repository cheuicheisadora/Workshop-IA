import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { notFound } from "next/navigation"
import "../globals.css"
import { ScrollAnimateProvider } from "@/components/ui/scroll-animate"
import { LanguageProvider } from "@/context/language"
import { idiomas, ehIdioma, type Lang } from "@/lib/idioma"

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

/**
 * As duas únicas rotas de idioma. Com isso o Next gera /pt e /en estáticos no
 * build, e qualquer outro valor em [lang] cai no notFound abaixo em vez de
 * renderizar a home com um idioma inventado.
 */
export function generateStaticParams() {
  return idiomas.map((lang) => ({ lang }))
}

const SITE = "https://portfolio-isadora-cheuiche-fazr.vercel.app"

/**
 * Título e descrição agora são por idioma.
 *
 * Antes isto era uma exportação estática única: o alternador PT/EN é estado de
 * cliente e não alcança o <head>, então a aba do navegador e os crawlers liam
 * sempre o português, qualquer que fosse o idioma na tela. Com o idioma no
 * caminho da URL o metadata volta a ser resolvido no servidor, um por rota.
 *
 * `alternates` declara o par para os buscadores: cada página aponta para a
 * irmã no outro idioma, e é o que faz o Google servir /en para quem pesquisa
 * em inglês em vez de tratar as duas como conteúdo duplicado.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const en = lang === "en"

  return {
    metadataBase: new URL(SITE),
    title: en
      ? "Isadora Cheuiche | Content Strategist"
      : "Isadora Cheuiche | Estrategista de Conteúdo",
    description: en
      ? "Isadora Cheuiche's portfolio — content strategist with a background in B2B and SaaS product design. Brand narrative, strategic cases, and content as a demand engine."
      : "Portfólio de Isadora Cheuiche — UX/UI Designer com foco em produtos B2B e SaaS. Cases reais com processo, desafios e resultados.",
    alternates: {
      canonical: `/${en ? "en" : "pt"}`,
      languages: { "pt-BR": "/pt", en: "/en" },
    },
    openGraph: {
      title: en
        ? "Isadora Cheuiche | Content Strategist"
        : "Isadora Cheuiche | Estrategista de Conteúdo",
      description: en
        ? "Content strategist with a background in B2B and SaaS product design. Brand narrative, strategic cases, and content as a demand engine."
        : "UX/UI Designer com foco em produtos B2B e SaaS. Cases reais com processo, desafios e resultados.",
      type: "website",
      locale: en ? "en_US" : "pt_BR",
      url: `/${en ? "en" : "pt"}`,
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  if (!ehIdioma(lang)) notFound()

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
      lang={lang === "en" ? "en" : "pt-BR"}
      data-scroll-behavior="smooth"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* O idioma vem da rota, não de estado solto: o primeiro render já sai
            no idioma certo, sem piscar em português antes de trocar. */}
        <LanguageProvider inicial={lang as Lang}>
          <ScrollAnimateProvider />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
