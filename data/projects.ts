export type Project = {
  id: string
  slug: string
  title: string
  description: string
  role: string
  tools: string[]
  // English variants
  description_en?: string
  role_en?: string
  tools_en?: string[]
  problem: string
  solution: string
  impact: string
  images: string[]
  featured: boolean
  externalUrl?: string
  accentColor?: string
  placeholderGradient?: string
  caseStudy?: {
    context: string
    research: string
    insights: string
    wireframes: string[]
    prototype?: string
    results: string
  }
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "redesign-app-itau",
    title: "Redesign App Itaú",
    description:
      "Redesign da experiência do aplicativo do Banco Itaú, conduzido do discovery à entrega. O projeto envolveu pesquisa com usuários, mapeamento de jornada e prototipagem de alta fidelidade com foco em usabilidade e hierarquia visual.",
    description_en:
      "Redesign of the Itaú Bank app experience, led from discovery to delivery. The project involved user research, journey mapping, and high-fidelity prototyping with a focus on usability and visual hierarchy.",
    role: "UX/UI · Case Study · EBAC",
    role_en: "UX/UI · Case Study · EBAC",
    tools: ["Figma", "UX Research", "Prototipagem"],
    tools_en: ["Figma", "UX Research", "Prototyping"],
    problem: "Jornadas complexas e hierarquia visual pouco clara dificultavam tarefas cotidianas dos usuários.",
    solution: "Redesign centrado no usuário com fluxos simplificados e sistema visual coerente.",
    impact: "Maior clareza na hierarquia e fluidez na navegação entre as principais funcionalidades.",
    images: [],
    placeholderGradient: "linear-gradient(135deg, #F97316 0%, #FB923C 50%, #FDBA74 100%)",
    accentColor: "#F97316",
    externalUrl: "https://www.behance.net/gallery/245625317/Redesign-do-App-Itau-Projeto-UXUI-EBAC",
    featured: true,
  },
  {
    id: "2",
    slug: "glaucia-beatriz-patisserie",
    title: "Glaucia Beatriz Pâtisserie",
    description:
      "Criação de identidade visual completa para uma pâtisserie artesanal. O projeto partiu do naming e conceito de marca até a entrega do sistema visual, com logotipo, paleta, tipografia e aplicações.",
    description_en:
      "Complete visual identity for an artisan pâtisserie. The project went from naming and brand concept to the full visual system, including logo, color palette, typography, and applications.",
    role: "Branding · Identidade Visual · Logotipo",
    role_en: "Branding · Visual Identity · Logo Design",
    tools: ["Illustrator", "Figma", "Branding"],
    tools_en: ["Illustrator", "Figma", "Branding"],
    problem: "Marca sem identidade visual definida, dificultando o posicionamento premium no mercado.",
    solution: "Sistema de identidade visual completo com paleta, tipografia e manual de marca.",
    impact: "Posicionamento visual sofisticado alinhado ao público-alvo da pâtisserie.",
    images: [],
    placeholderGradient: "linear-gradient(135deg, #F9E8E8 0%, #F4B6C2 50%, #E8A0B0 100%)",
    accentColor: "#F4B6C2",
    externalUrl: "https://www.behance.net/gallery/242194073/Glaucia-Beatriz-Patisserie-Branding",
    featured: true,
  },
  {
    id: "3",
    slug: "feed-me-app",
    title: "Feed Me App",
    description:
      "Case study de um aplicativo mobile de alimentação saudável. O processo passou por pesquisa com usuários, síntese de insights, ideação e entrega de protótipos navegáveis de alta fidelidade.",
    description_en:
      "Case study of a healthy eating mobile app. The process included user research, insight synthesis, ideation, and delivery of high-fidelity navigable prototypes.",
    role: "UI/UX · Mobile App · Case Study",
    role_en: "UI/UX · Mobile App · Case Study",
    tools: ["Figma", "Prototipagem", "FigJam"],
    tools_en: ["Figma", "Prototyping", "FigJam"],
    problem: "Usuários encontravam dificuldade em manter uma alimentação saudável por falta de guia prático.",
    solution: "App mobile com jornada gamificada, receitas personalizadas e rastreamento nutricional.",
    impact: "Protótipo validado com usuários reais, com alta taxa de satisfação nos testes.",
    images: [],
    placeholderGradient: "linear-gradient(135deg, #D4F0E0 0%, #89CBA8 50%, #5BAB80 100%)",
    accentColor: "#89CBA8",
    externalUrl: "https://www.behance.net/gallery/228083139/Feed-Me-App-UIUX-Case-Study",
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
