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
    // Pílula PT/EN do header (Figma 0:198).
    surfaceSoft: "rgba(217, 217, 217, 0.1)",
    headerBg: "rgba(5, 5, 5, 0.01)",
    footerBg: "#000000",

    /*
     * Fundo decorativo. Estes valores estão embutidos nos SVGs exportados do
     * Figma (public/figma/glow-*.svg) e ficam aqui como fonte de verdade da
     * paleta — qualquer brilho novo em CSS deve sair daqui, não de um roxo
     * inventado.
     *
     * glowMagenta*: vetores "Element" 0:54, 0:55, 0:63 e 0:64.
     * glowPurple*:  vetores "Element" 0:62 e 0:182.
     */
    glowMagentaFrom: "#C680E2",
    glowMagentaTo: "#AA13B2",
    glowPurpleFrom: "#976FCC",
    glowPurpleTo: "#0B0C28",

    // Partículas (Ellipse 2–47) e anéis ("bola testzinho").
    particle: "rgba(217, 217, 217, 0.5)",
    ring: "rgba(255, 255, 255, 0.5)",

    /*
     * Vidro. O arquivo só define o preenchimento translúcido dos botões; sem
     * desfoque do que está atrás, borda de luz e sombra, translucidez sozinha
     * lê como cor chapada. Estes três valores compõem o vidro:
     * glassEdge é o traço, glassSheen o brilho da aresta de cima e
     * glassShade a sombra que descola o botão do fundo.
     */
    glassEdge: "rgba(255, 255, 255, 0.22)",
    glassSheen: "rgba(255, 255, 255, 0.3)",
    glassShade: "rgba(4, 4, 16, 0.35)",

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
     * Escala fluida ancorada nas duas pontas: o primeiro valor é o tamanho a
     * 360px e o teto é o tamanho a 1280px, com a interpolação passando por
     * todas as larguras entre as duas. A versão anterior era um teto de
     * desktop com um piso qualquer, e no telefone tudo caía no piso ao mesmo
     * tempo — hero 36, seção 28, título de card 20, corpo 16. Tudo grande e
     * junto, sem hierarquia.
     *
     * Tetos (1280) preservados; o que muda é o começo da escala:
     * hero 36→30, seção 28→24, título de card 20→18, item 20→17,
     * lead 17→16, corpo de card 16→15.
     *
     * Texto corrido (body, navegação) fica em 16px em qualquer largura. O
     * corpo do card cai para 15px por ser texto de apoio dentro de uma
     * moldura estreita, não leitura principal.
     */
    hero: "clamp(1.875rem, 0.65rem + 5.43vw, 5rem)",
    section: "clamp(1.5rem, 0.91rem + 2.61vw, 3rem)",
    cardTitle: "clamp(1.125rem, 0.88rem + 1.09vw, 1.75rem)",
    cardBody: "clamp(0.9375rem, 0.89rem + 0.22vw, 1.0625rem)",
    lead: "clamp(1rem, 0.9rem + 0.43vw, 1.25rem)",
    itemTitle: "clamp(1.0625rem, 0.99rem + 0.33vw, 1.25rem)",
    /** Nome no logo: 22px no arquivo, pesado demais ao lado do menu no celular. */
    brand: "clamp(1.125rem, 0.98rem + 0.65vw, 1.375rem)",
    /** Rótulo dos botões grandes. */
    btnLg: "clamp(1rem, 0.95rem + 0.22vw, 1.125rem)",
    body: "1rem",
    meta: "clamp(0.8125rem, 0.79rem + 0.11vw, 0.875rem)",
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
