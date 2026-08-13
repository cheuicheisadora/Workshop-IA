/**
 * Fonte única de verdade dos tokens de design.
 * Editar aqui e rodar `npm run tokens` para regenerar o bloco
 * TOKENS:START/END em app/globals.css. `npm run tokens:check` valida no CI.
 *
 * Valores extraídos do Figma (frame 0:53). Onde um valor foi ajustado em
 * relação ao arquivo, o motivo está anotado na própria linha.
 */

export type DesignTokens = {
  colors: Record<string, string>
  radius: Record<string, string>
  spacing: Record<string, string>
  typography: { fontSans: string } & Record<string, string>
  layout: Record<string, string>
}

export const tokens: DesignTokens = {
  colors: {
    // Base
    bg: "#090A24",
    fg: "#FFFFFF",
    // Figma usa rgba(255,255,255,.6) para texto secundário e .4 no footer.
    // .4 mede 3.66:1 sobre preto e reprova no AA — subimos os dois patamares.
    fgMuted: "rgba(255, 255, 255, 0.72)",
    fgSubtle: "rgba(255, 255, 255, 0.6)",

    // Acento
    purple: "#976FCC",
    purpleFill: "rgba(151, 111, 204, 0.55)",
    purpleHover: "rgba(151, 111, 204, 0.78)",

    // Traços
    border: "rgba(255, 255, 255, 0.2)",
    borderStrong: "rgba(255, 255, 255, 0.25)",
    hairline: "rgba(255, 255, 255, 0.15)",

    // Superfícies
    surface: "rgba(217, 217, 217, 0.5)",
    headerBg: "rgba(5, 5, 5, 0.01)",
    footerBg: "#000000",

    // Foco de teclado — não existe no Figma, exigido por acessibilidade
    focus: "#C9AEEE",
  },

  radius: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    // Figma: 90px em cards de 1514px. Reduzido proporcionalmente ao
    // container de 1280 (90 × 1280/1514 ≈ 76) e arredondado na malha de 8.
    card: "clamp(28px, 4.5vw, 72px)",
    pill: "999px",
  },

  spacing: {
    "1": "8px",
    "2": "16px",
    "3": "24px",
    "4": "32px",
    "5": "40px",
    "6": "48px",
    "8": "64px",
    "10": "80px",
    "12": "96px",
    "16": "128px",
    "20": "160px",
  },

  typography: {
    fontSans: "var(--font-manrope), system-ui, -apple-system, sans-serif",
    hero: "clamp(2.5rem, 6vw, 6rem)",
    section: "clamp(2rem, 4vw, 4rem)",
    cardTitle: "clamp(1.5rem, 2.2vw, 2.5rem)",
    cardBody: "clamp(1rem, 1.3vw, 1.5rem)",
    lead: "clamp(1.125rem, 1.4vw, 1.5rem)",
    itemTitle: "1.25rem",
    body: "1rem",
    meta: "0.875rem",
  },

  layout: {
    container: "1280px",
    gutter: "24px",
    gutterLg: "80px",
    sectionPy: "160px",
    headerH: "73px",
  },
}

export default tokens
