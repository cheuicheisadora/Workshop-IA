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
      "Rede social de receitas onde você descobre pratos personalizados, compartilha suas criações e se conecta com chefs e cozinheiros. Case study completo do discovery ao protótipo de alta fidelidade.",
    description_en:
      "A recipe social network where you discover personalized dishes, share your creations, and connect with chefs and home cooks. Full case study from discovery to high-fidelity prototype.",
    role: "UI/UX · Mobile App · Case Study",
    role_en: "UI/UX · Mobile App · Case Study",
    tools: ["Figma", "Prototipagem", "FigJam"],
    tools_en: ["Figma", "Prototyping", "FigJam"],
    problem: "Amantes da culinária não tinham uma plataforma para descobrir receitas ao seu gosto e se conectar socialmente com outros cozinheiros.",
    solution: "App mobile de receitas com rede social integrada — feed personalizado, perfis de chef, chat e compartilhamento.",
    impact: "Interface acessível e amigável com navegação fluida, conectando descoberta de receitas à interação social.",
    problem_en: "Food lovers had no platform to discover recipes tailored to their taste and connect socially with other cooks.",
    solution_en: "A recipe mobile app with an integrated social network — personalized feed, chef profiles, chat, and sharing.",
    impact_en: "Accessible, user-friendly interface with smooth navigation, bridging recipe discovery and social interaction.",
    images: [],
    placeholderGradient: "linear-gradient(135deg, #D4F0E0 0%, #89CBA8 50%, #5BAB80 100%)",
    accentColor: "#89CBA8",
    behanceUrl: "https://www.behance.net/gallery/228083139/Feed-Me-App-UIUX-Case-Study",
    featured: true,
    caseStudy: {
      context: "O FeedMe é uma rede social de receitas — um lugar para cozinhar o que você ama e compartilhar o que você cria. O case study desenvolveu um app mobile onde qualquer pessoa pode descobrir receitas personalizadas, seguir chefs e cozinheiros caseiros, compartilhar suas próprias criações e interagir como em uma rede social.",
      context_en: "FeedMe is a recipe social network — a place to cook what you love and share what you create. The case study developed a mobile app where anyone can discover personalized recipes, follow chefs and home cooks, share their own creations, and interact just like on a social network.",
      research: "Pesquisa sobre hábitos culinários e análise de concorrentes (Instagram, Pinterest, TikTok, Tasty). Entrevistas com cozinheiros caseiros, chefs e entusiastas da gastronomia para mapear necessidades, comportamentos e lacunas nos apps existentes.",
      research_en: "Research into cooking habits and competitive analysis (Instagram, Pinterest, TikTok, Tasty). Interviews with home cooks, chefs, and food enthusiasts to map needs, behaviors, and gaps in existing apps.",
      insights: "Apps existentes não personalizavam a descoberta de receitas. Cozinheiros caseiros não tinham plataforma para publicar e ganhar reconhecimento. Ausência de funcionalidades sociais como seguir, chatear e compartilhar. Interfaces confusas e pouco acessíveis.",
      insights_en: "Existing apps didn't personalize recipe discovery. Home cooks had no platform to publish and gain recognition. No social features like following, chatting, or sharing. Confusing and inaccessible interfaces.",
      wireframes: [],
      results: "Protótipo de alta fidelidade entregue com 5 telas principais (Home, Explorar, Chat, Receitas, Perfil) e sistema de componentes completo. Features sociais de Follow, Chat e Share integradas. Interface acessível e amigável validada no case study da formação EBAC.",
      results_en: "High-fidelity prototype delivered with 5 main screens (Home, Explore, Chat, Cookbook, Profile) and a complete component system. Social features — Follow, Chat, and Share — fully integrated. Accessible and user-friendly interface validated in the EBAC case study.",
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
