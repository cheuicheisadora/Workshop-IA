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
      "Redesenho da jornada do usuário no app Itaú, com pesquisa real, persona, benchmark e 4 soluções entregues em mobile, desktop e smartwatch. Projeto da formação UX/UI da EBAC em parceria com o Itaú.",
    description_en:
      "Redesign of the Itaú app's user journey, with real research, persona, benchmarking and 4 solutions delivered across mobile, desktop, and smartwatch. Project from EBAC's UX/UI program in partnership with Itaú.",
    role: "UX/UI · Case Study · EBAC",
    role_en: "UX/UI · Case Study · EBAC",
    tools: ["Figma", "UX Research", "Prototipagem"],
    tools_en: ["Figma", "UX Research", "Prototyping"],
    problem: "100% dos usuários entrevistados relataram dificuldades com suporte e 67% sentiram excesso de informação na interface.",
    solution: "4 soluções: Central de Atendimento integrada, Plataforma de Investimentos, hub de Benefícios e Widgets financeiros personalizáveis.",
    impact: "Interface modernizada com redução da carga cognitiva, entregue em mobile, desktop e smartwatch.",
    problem_en: "100% of interviewed users reported difficulties with support and 67% felt information overload in the interface.",
    solution_en: "4 solutions: integrated Support Center, Investment Platform, Benefits hub, and customizable Financial Widgets.",
    impact_en: "Modernized interface with reduced cognitive load, delivered across mobile, desktop, and smartwatch.",
    images: [],
    placeholderGradient: "linear-gradient(135deg, #F97316 0%, #FB923C 50%, #FDBA74 100%)",
    accentColor: "#F97316",
    behanceUrl: "https://www.behance.net/gallery/245625317/Redesign-do-App-Itau-Projeto-UXUI-EBAC",
    featured: true,
    caseStudy: {
      context: "O mercado financeiro passa por rápidas transformações impulsionadas pela digitalização. Nesse cenário, o Itaú enfrenta o desafio de evoluir continuamente suas experiências digitais. Este projeto, desenvolvido na formação UX/UI da EBAC em parceria com o Itaú, teve como objetivo redesenhar a jornada do usuário no app — eliminando fricções e criando uma experiência mais intuitiva para fortalecer a competitividade do banco no cenário digital.",
      context_en: "The financial market is undergoing rapid transformations driven by digitalization and changing consumer behavior. In this context, Itaú faces the challenge of continuously evolving its digital experiences. This project, developed in EBAC's UX/UI program in partnership with Itaú, aimed to redesign the user journey in the app — eliminating friction and creating a more intuitive experience to strengthen the bank's competitiveness in the digital landscape.",
      research: "Benchmark com Nubank (navegação limpa), Banco Inter (tudo integrado, menu poluído) e Bradesco (acessível, passos excessivos). Entrevistas com usuários revelaram: 100% com dificuldades de suporte, 67% com excesso de informação e 50% usando outro banco para alguns serviços.",
      research_en: "Benchmarking against Nubank (clean navigation), Banco Inter (all-in-one, cluttered menu), and Bradesco (accessible, too many steps). User interviews revealed: 100% with support difficulties, 67% with information overload, and 50% using another bank for some services.",
      insights: "Excesso de informações na interface. Suporte totalmente fora do aplicativo. Falta de clareza sobre taxas e investimentos. Benefícios e vantagens invisíveis para o usuário.",
      insights_en: "Information overload in the interface. Support entirely outside the app. Lack of clarity on fees and investments. Benefits and perks invisible to the user.",
      wireframes: [],
      results: "4 soluções de produto entregues em protótipos de alta fidelidade: Página Inicial redesenhada, Chat Virtual com Isabel (assistente 24h), Plataforma de Investimentos por objetivos, Plataforma de Benefícios (cashback/descontos) e Widgets financeiros personalizáveis para mobile, desktop e smartwatch.",
      results_en: "4 product solutions delivered as high-fidelity prototypes: redesigned Home page, Virtual Chat with Isabel (24h assistant), goal-based Investment Platform, Benefits Platform (cashback/discounts), and customizable Financial Widgets for mobile, desktop, and smartwatch.",
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
git clone -b claude/setup-github-account-SIPjj https://github.com/cheuicheisadora/Workshop-IA
cd Workshop-IA
git apply caminho/para/agromai-project.patch
git add "app/(public)/projetos/redesign-site-agromai/page.tsx" data/projects.ts
git commit -m "Add Agromai website redesign project and internal case study page"
git push -u origin claude/setup-github-account-SIPjj
