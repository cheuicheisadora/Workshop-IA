/**
 * O idioma vive na URL: /pt e /en.
 *
 * Este arquivo é o único lugar que sabe disso, e não importa nada de React —
 * por isso serve tanto ao layout, que roda no servidor, quanto aos componentes
 * de cliente que montam links.
 */

export const idiomas = ["pt", "en"] as const

export type Lang = (typeof idiomas)[number]

/** Idioma servido quando a pessoa chega sem prefixo. */
export const idiomaPadrao: Lang = "pt"

export function ehIdioma(valor: string): valor is Lang {
  return (idiomas as readonly string[]).includes(valor)
}

/**
 * Prefixa um caminho interno com o idioma corrente.
 *
 * Os dados do site guardam os caminhos sem idioma ("/", "/#projetos",
 * "/projetos/chale-atelier") porque o caminho é o mesmo nos dois — só o prefixo
 * muda. Quem navega em inglês continua em inglês ao clicar.
 *
 * Âncora pura ("#contato") passa direto: é posição dentro da página aberta, não
 * outra rota.
 */
export function comIdioma(lang: Lang, href: string): string {
  if (!href.startsWith("/")) return href
  if (href === "/") return `/${lang}`
  // "/#projetos" vira "/pt#projetos", e não "/pt/#projetos".
  if (href.startsWith("/#")) return `/${lang}${href.slice(1)}`
  return `/${lang}${href}`
}

/**
 * Troca o idioma de um caminho já prefixado, preservando o resto.
 *
 * É o que o botão PT/EN usa: quem está em /en/projetos/chale-atelier e clica em
 * PT vai para /pt/projetos/chale-atelier, e não para a home.
 */
export function trocaIdioma(pathname: string, destino: Lang): string {
  const resto = pathname.replace(/^\/(pt|en)(?=\/|$)/, "")
  return `/${destino}${resto}`
}
