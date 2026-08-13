"use client"

import { createContext, useContext, useState } from "react"

type Lang = "pt" | "en"

const translations = {
  pt: {
    // Navbar
    nav_projects: "Projetos",
    nav_experience: "Experiência",
    nav_about: "Sobre",
    nav_contact: "Contato",
    // Hero
    hero_tag: "UX/UI Designer",
    hero_title_1: "Sou uma UX/UI Designer que transforma problemas complexos em",
    hero_title_accent: "experiências simples e intuitivas",
    hero_subtitle:
      "Foco em design centrado no usuário, criando soluções digitais que equilibram necessidades do negócio e experiência real das pessoas. Experiência em UX, UI e Product Thinking",
    hero_btn_projects: "Ver projetos",
    hero_btn_contact: "Entrar em contato",
    // About
    about_heading: "Sobre mim",
    about_p1:
      "Atuo como Mid-Level UX Designer na Agromai, liderando o design de interação em uma plataforma agtech. Minha formação em UX/UI pela EBAC estruturou um processo sólido que aplico em todos os projetos, desde pesquisa com usuários até prototipação e entrega.",
    about_p2:
      "Tenho experiência prática conduzindo projetos de ponta a ponta, como o Feed Me App e o redesign do app do Itaú, sempre conectando decisões de design ao impacto real no usuário e nos objetivos de negócio. Também atuei com branding de eventos, o que fortaleceu minha visão sobre narrativa, identidade visual e experiência como um todo.",
    about_p3_before:
      "Hoje, amplio meu trabalho explorando IA no processo de design, utilizando",
    about_p3_after:
      " para construir e iterar interfaces diretamente em código. Este portfólio, inclusive, foi desenvolvido inteiramente por mim com essa abordagem. Isso me permite ir além do design visual e atuar com uma visão mais próxima da implementação, tecnologia e produto.",
    about_btn: "Vamos conversar",
    skills_heading: "Competências",
    // Certificates
    cert_heading: "Formação e Certificados",
    // How I work
    work_heading: "Como eu trabalho",
    work_subtitle: "Cada projeto nasce de uma pergunta real e termina com impacto mensurável.",
    // Features
    feature_1_title: "UX Research & Estratégia",
    feature_1_desc:
      "Conduzo pesquisas com usuários, sintetizo dados e defino problemas para embasar decisões de produto com clareza e intenção.",
    feature_2_title: "UI Design de Alta Fidelidade",
    feature_2_desc:
      "Crio interfaces polidas e consistentes no Figma, com atenção à hierarquia visual, tipografia, espaçamento e sistemas de componentes.",
    feature_3_title: "IA Aplicada ao Design",
    feature_3_desc:
      "Integro ferramentas de IA ao processo de design, da pesquisa à geração de interfaces, combinando visão estratégica de negócio com as possibilidades reais da tecnologia para entregar soluções mais rápidas e fundamentadas.",
    feature_4_title: "Design System & Componentes",
    feature_4_desc:
      "Trabalho com estruturas escaláveis no Figma usando auto layout, variantes, tokens e bibliotecas de componentes prontas para handoff.",
    feature_5_title: "Prototipagem & Validação",
    feature_5_desc:
      "Entrego protótipos navegáveis de alta fidelidade e conduzo testes de usabilidade para validar hipóteses antes do desenvolvimento.",
    feature_6_title: "Implementação com Claude Code",
    feature_6_desc:
      "Prototipo e construo interfaces diretamente em código usando Claude Code, o que garante uma visão técnica mais completa e colaboração mais eficiente com devs.",
    // Projects
    projects_heading: "Projetos",
    projects_subtitle: "Cases reais com processo, desafios e resultados.",
    behance_cta_text: "Todos os projetos com processo completo documentado, do brief ao handoff.",
    behance_cta_link: "Ver perfil completo",
    card_view_behance: "Ver no Behance",
    card_view_project: "Ver Projeto",
    // Experience
    exp_heading: "Experiência",
    exp_subtitle: "Trajetória profissional completa",
    exp_present: "Presente",
    exp_cv_btn: "Baixar currículo completo",
    exp_skill_uxui: "UX/UI Design",
    exp_skill_ds: "Design System",
    exp_skill_research: "Pesquisa & UX",
    exp_skill_product: "Produto & Negócio",
    exp_skill_tools: "Ferramentas",
    exp_lang_native: "Nativo",
    // CTA
    cta_heading: "Vamos conversar?",
    cta_subtitle:
      "Estou disponível para projetos freelance, oportunidades full-time e colaborações criativas.",
    cta_btn: "Enviar mensagem",
  },
  en: {
    // Navbar
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_about: "About",
    nav_contact: "Contact",
    // Hero
    hero_tag: "UX/UI Designer",
    hero_title_1: "I'm a UX/UI Designer who turns complex problems into",
    hero_title_accent: "simple, intuitive experiences",
    hero_subtitle:
      "Focused on user-centered design, creating digital solutions that balance business needs with real human experience. Background in UX, UI, and Product Thinking",
    hero_btn_projects: "View projects",
    hero_btn_contact: "Get in touch",
    // About
    about_heading: "About me",
    about_p1:
      "I work as a Mid-Level UX Designer at Agromai, leading end-to-end interaction design for an agtech platform. My UX/UI training at EBAC built a solid process I apply to every project, from user research through prototyping and delivery.",
    about_p2:
      "I have hands-on experience leading end-to-end projects like Feed Me App and the Itaú app redesign, always connecting design decisions to real user impact and business goals. I also worked on event branding, which deepened my understanding of narrative, visual identity, and experience as a whole.",
    about_p3_before:
      "Today, I expand my work by exploring AI in the design process, using",
    about_p3_after:
      " to build and iterate interfaces directly in code. This portfolio was built entirely by me using that approach. It lets me go beyond visual design and work with a perspective closer to implementation, technology, and product.",
    about_btn: "Let's talk",
    skills_heading: "Skills",
    // Certificates
    cert_heading: "Education & Certificates",
    // How I work
    work_heading: "How I work",
    work_subtitle: "Every project starts with a real question and ends with measurable impact.",
    // Features
    feature_1_title: "UX Research & Strategy",
    feature_1_desc:
      "I conduct user research, synthesize data, and define problems to ground product decisions with clarity and intention.",
    feature_2_title: "High-Fidelity UI Design",
    feature_2_desc:
      "I create polished, consistent interfaces in Figma with close attention to visual hierarchy, typography, spacing, and component systems.",
    feature_3_title: "AI Applied to Design",
    feature_3_desc:
      "I integrate AI tools into the design process, from research to interface generation, combining strategic business vision with real technology possibilities to deliver faster and more grounded solutions.",
    feature_4_title: "Design System & Components",
    feature_4_desc:
      "I work with scalable structures in Figma using auto layout, variants, tokens, and component libraries ready for handoff.",
    feature_5_title: "Prototyping & Validation",
    feature_5_desc:
      "I deliver high-fidelity navigable prototypes and conduct usability tests to validate hypotheses before development.",
    feature_6_title: "Implementation with Claude Code",
    feature_6_desc:
      "I prototype and build interfaces directly in code using Claude Code, which gives me a more complete technical perspective and makes collaboration with devs more efficient.",
    // Projects
    projects_heading: "Projects",
    projects_subtitle: "Real cases with process, challenges, and outcomes.",
    behance_cta_text: "All projects with full process documentation, from brief to handoff.",
    behance_cta_link: "View full profile",
    card_view_behance: "View on Behance",
    card_view_project: "View Project",
    // Experience
    exp_heading: "Experience",
    exp_subtitle: "Full professional background",
    exp_present: "Present",
    exp_cv_btn: "Download full resume",
    exp_skill_uxui: "UX/UI Design",
    exp_skill_ds: "Design System",
    exp_skill_research: "Research & UX",
    exp_skill_product: "Product & Business",
    exp_skill_tools: "Tools",
    exp_lang_native: "Native",
    // CTA
    cta_heading: "Let's talk?",
    cta_subtitle:
      "I'm available for freelance projects, full-time opportunities, and creative collaborations.",
    cta_btn: "Send a message",
  },
} as const

export type TranslationKey = keyof typeof translations.pt

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => translations.en[key],
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  /*
   * O site deixou de ser bilíngue: o seletor PT/EN foi removido do header.
   * O padrão passa a ser "pt" e a preferência salva não é mais lida — senão
   * quem visitou o site em inglês antes continuaria vendo as páginas de case
   * em inglês, com <html lang> divergindo do conteúdo.
   * O provider segue de pé porque as páginas de case ainda consomem t().
   */
  const [lang, setLangState] = useState<Lang>("pt")

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    document.documentElement.lang = newLang === "pt" ? "pt-BR" : "en"
  }

  const t = (key: TranslationKey): string => translations[lang][key]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
