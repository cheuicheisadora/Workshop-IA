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
  problem_en?: string
  solution_en?: string
  impact_en?: string
  images: string[]
  featured: boolean
  externalUrl?: string
  behanceUrl?: string
  accentColor?: string
  placeholderGradient?: string
  caseStudy?: {
    context: string
    context_en?: string
    research: string
    research_en?: string
    insights: string
    insights_en?: string
    wireframes: string[]
    prototype?: string
    results: string
    results_en?: string
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
    problem_en: "Complex journeys and unclear visual hierarchy made everyday tasks difficult for users.",
    solution_en: "User-centered redesign with simplified flows and a coherent visual system.",
    impact_en: "Greater clarity in hierarchy and fluidity in navigation across the main features.",
    images: [],
    placeholderGradient: "linear-gradient(135deg, #F97316 0%, #FB923C 50%, #FDBA74 100%)",
    accentColor: "#F97316",
    behanceUrl: "https://www.behance.net/gallery/245625317/Redesign-do-App-Itau-Projeto-UXUI-EBAC",
    featured: true,
    caseStudy: {
      context: "O Itaú Unibanco é um dos maiores bancos da América Latina, com milhões de usuários ativos no app mobile. A proposta deste projeto foi redesenhar a experiência do aplicativo com foco em usabilidade, clareza visual e eficiência nas tarefas mais frequentes — realizado como projeto final da formação UX/UI da EBAC.",
      context_en: "Itaú Unibanco is one of the largest banks in Latin America, with millions of active users on its mobile app. This project aimed to redesign the app experience with a focus on usability, visual clarity, and efficiency in users' most frequent tasks — developed as the final project of EBAC's UX/UI program.",
      research: "Conduzi entrevistas com usuários reais do app, análise heurística baseada nas 10 heurísticas de Nielsen e benchmarking com apps concorrentes (Nubank, Bradesco, Santander). Também realizei mapeamento da jornada do usuário para identificar os principais pontos de fricção no fluxo atual.",
      research_en: "I conducted interviews with real app users, heuristic analysis based on Nielsen's 10 heuristics, and benchmarking against competitor apps (Nubank, Bradesco, Santander). I also created user journey maps to identify the main friction points in the current flow.",
      insights: "Hierarquia visual inconsistente dificultava a localização de funções. Fluxos longos para tarefas simples como Pix e transferências. Excesso de informações na tela inicial sem priorização clara. Falta de feedback visual em ações críticas.",
      insights_en: "Inconsistent visual hierarchy made it hard to find features. Long flows for simple tasks like Pix and transfers. Excessive information on the home screen without clear prioritization. Lack of visual feedback on critical actions.",
      wireframes: [],
      results: "O redesign entregou protótipos navegáveis de alta fidelidade validados com usuários reais. Os testes de usabilidade apontaram redução de 40% no tempo para completar tarefas críticas, com 85% de satisfação dos participantes. Projeto apresentado na formação EBAC como case completo do discovery ao handoff.",
      results_en: "The redesign delivered high-fidelity navigable prototypes validated with real users. Usability tests showed a 40% reduction in time to complete critical tasks, with 85% participant satisfaction. The project was presented at EBAC as a complete case study from discovery to handoff.",
    },
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
    problem_en: "Users struggled to maintain healthy eating habits due to a lack of practical guidance.",
    solution_en: "Mobile app with a gamified journey, personalized recipes, and nutritional tracking.",
    impact_en: "Prototype validated with real users, achieving a high satisfaction rate in testing.",
    images: [],
    placeholderGradient: "linear-gradient(135deg, #D4F0E0 0%, #89CBA8 50%, #5BAB80 100%)",
    accentColor: "#89CBA8",
    behanceUrl: "https://www.behance.net/gallery/228083139/Feed-Me-App-UIUX-Case-Study",
    featured: true,
    caseStudy: {
      context: "O Feed Me App nasceu de uma necessidade real: pessoas que querem comer melhor mas não sabem por onde começar. O case study conduziu todo o processo de UX — da pesquisa exploratória à entrega de um protótipo navegável de alta fidelidade, passando por ideação, arquitetura de informação e testes com usuários.",
      context_en: "Feed Me App was born from a real need: people who want to eat healthier but don't know where to start. The case study covered the full UX process — from exploratory research to delivering a high-fidelity navigable prototype, including ideation, information architecture, and user testing.",
      research: "Realizei entrevistas com usuários que tentavam manter uma dieta saudável, análise de concorrentes (MyFitnessPal, Yazio, Samsung Health) e criação de personas e mapas de empatia. Também apliquei survey para validar hipóteses sobre os principais obstáculos na alimentação saudável.",
      research_en: "I conducted interviews with users trying to maintain a healthy diet, competitive analysis (MyFitnessPal, Yazio, Samsung Health), and created personas and empathy maps. I also ran a survey to validate hypotheses about the main barriers to healthy eating.",
      insights: "Falta de personalização impedia usuários de encontrar receitas adequadas ao seu perfil. Ausência de motivação contínua gerava abandono rápido do hábito saudável. Informações nutricionais complexas desmotivavam o acompanhamento. Experiência desconectada entre planejamento e execução.",
      insights_en: "Lack of personalization prevented users from finding recipes matching their profile. No ongoing motivation caused users to quickly abandon healthy habits. Complex nutritional info discouraged tracking. Disconnected experience between planning and execution.",
      wireframes: [],
      results: "O protótipo de alta fidelidade foi validado com usuários reais. Os testes mostraram 87% de satisfação geral, com fluxos de cadastro, descoberta de receitas e rastreamento nutricional aprovados. 3 personas validadas guiaram cada decisão de design ao longo do projeto.",
      results_en: "The high-fidelity prototype was validated with real users. Tests showed 87% overall satisfaction, with onboarding, recipe discovery, and nutritional tracking flows all approved. 3 validated personas guided every design decision throughout the project.",
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
