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
  // Adicione seus projetos aqui. Exemplo:
  // {
  //   id: "1",
  //   slug: "redesign-app-mobile",
  //   title: "Redesign do App Mobile",
  //   description: "Redesign completo da experiência de onboarding que reduziu o abandono em 40%.",
  //   role: "UX/UI Designer · Pesquisadora",
  //   tools: ["Figma", "FigJam", "Maze"],
  //   problem: "Taxa de abandono no onboarding acima de 60%.",
  //   solution: "Fluxo simplificado com progressive disclosure e microcopy revisado.",
  //   impact: "Redução de 40% no abandono e NPS +18 pontos.",
  //   images: ["/screenshots/projeto-1.png"],
  //   featured: true,
  //   caseStudy: {
  //     context: "...",
  //     research: "...",
  //     insights: "...",
  //     wireframes: [],
  //     results: "...",
  //   },
  // },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
