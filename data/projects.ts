export type Project = {
  id: string
  slug: string
  title: string
  description: string
  role: string
  tools: string[]
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
      "Redesign completo da experiência do aplicativo do Banco Itaú, com foco em usabilidade, hierarquia visual e fluidez na jornada do usuário.",
    role: "UX/UI · Case Study · EBAC",
    tools: ["Figma", "UX Research", "Prototipagem"],
    problem: "Jornadas complexas e hierarquia visual pouco clara dificultavam tarefas cotidianas dos usuários.",
    solution: "Redesign centrado no usuário com fluxos simplificados e sistema visual coerente.",
    impact: "Maior clareza na hierarquia e fluidez na navegação entre as principais funcionalidades.",
    images: [],
    placeholderGradient: "linear-gradient(135deg, #F97316 0%, #FB923C 50%, #FDBA74 100%)",
    accentColor: "#A8D8EA",
    externalUrl: "https://www.behance.net/gallery/245625317/Redesign-do-App-Itau-Projeto-UXUI-EBAC",
    featured: true,
  },
  {
    id: "2",
    slug: "glaucia-beatriz-patisserie",
    title: "Glaucia Beatriz Pâtisserie",
    description:
      "Criação de identidade visual completa para uma pâtisserie artesanal — do naming ao sistema de marca, com elegância e sofisticação.",
    role: "Branding · Identidade Visual · Logotipo",
    tools: ["Illustrator", "Figma", "Branding"],
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
      "Case study de um aplicativo mobile de alimentação saudável — desde a pesquisa com usuários até a entrega dos protótipos navegáveis.",
    role: "UI/UX · Mobile App · Case Study",
    tools: ["Figma", "Maze", "FigJam"],
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
