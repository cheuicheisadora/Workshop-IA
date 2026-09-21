/** Dados de contato e navegação, separados da apresentação. */

export const site = {
  name: "Isadora Cheuiche",
  role: "Estrategista de conteúdo com raiz em design, focada em narrativa de marca e geração de demanda para produtos B2B e SaaS.",
  roleEn:
    "Content strategist rooted in design, focused on brand narrative and demand generation for B2B and SaaS products.",
  email: "cheuicheisadora@gmail.com",
  linkedin: "https://www.linkedin.com/in/isadora-cheuiche",
  behance: "https://www.behance.net/isadoracheuiche",
  /** PLACEHOLDER — trocar quando o PDF definitivo for entregue. */
  resume: "/CV_Isadora_Cheuiche_PT.pdf",
  resumeEn: "/CV_Isadora_Cheuiche_EN.pdf",
} as const

/**
 * O href é sempre a âncora em português — só o rótulo muda de idioma.
 *
 * Caminho absoluto porque o header também aparece nas páginas de case: "#projetos"
 * sozinho não sai do lugar fora da home. Na home o navegador trata "/#projetos"
 * como âncora do próprio documento e rola sem recarregar.
 */
export const navLinks = [
  { href: "/#projetos", label: "Projetos", labelEn: "Projects" },
  {
    href: "/#como-eu-trabalho",
    label: "Como eu trabalho",
    labelEn: "How I work",
  },
] as const
