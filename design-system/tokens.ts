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
    // Figma: 90px. Reduzido junto com a altura do card, senão o raio come
    // o conteúdo num card mais baixo.
    card: "clamp(24px, 3vw, 48px)",
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
    /*
     * A escala do Figma foi medida num canvas de 1920 e ficou grande demais
     * no container de 1280. Os tetos abaixo são reduções pedidas na revisão:
     * hero 96→80, seção 64→48, título de card 40→28, corpo de card 24→17,
     * lead 24→20. Os mínimos respeitam o piso de 16px para texto corrido.
     */
    hero: "clamp(2.25rem, 5.2vw, 5rem)",
    section: "clamp(1.75rem, 3.2vw, 3rem)",
    cardTitle: "clamp(1.25rem, 2vw, 1.75rem)",
    cardBody: "clamp(1rem, 1.1vw, 1.0625rem)",
    lead: "clamp(1.0625rem, 1.2vw, 1.25rem)",
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
