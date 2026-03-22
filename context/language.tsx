"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Lang = "pt" | "en"

const translations = {
  pt: {
    // Navbar
    nav_projects: "Projetos",
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
      "Comecei no design através da formação em UX/UI pela EBAC e, desde então, venho construindo minha experiência com foco em produto digital e decisões orientadas por usuário. Hoje, atuo como estagiária de UX/UI na SAP, participando do desenvolvimento de soluções que exigem clareza, consistência e visão de escala.",
    about_p2:
      "Neste portfólio, apresento projetos como o Feed Me App e o redesign do app do Itaú, nos quais conduzi o processo de ponta a ponta, passando por pesquisa, definição de problemas, ideação e prototipação. São trabalhos que refletem minha forma de pensar: prática, estruturada e sempre conectada ao impacto real no usuário.",
    about_p3_before:
      "Além disso, já atuei com branding de eventos, o que fortaleceu minha sensibilidade para narrativa e identidade visual. Tenho domínio avançado de Figma e, recentemente, passei a explorar o desenvolvimento de interfaces com",
    about_p3_after:
      ". Inclusive, este portfólio foi inteiramente criado por mim utilizando essa abordagem, aproximando ainda mais meu trabalho do contexto técnico e da implementação.",
    about_btn: "Vamos conversar",
    skills_heading: "Competências",
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
    feature_3_title: "Visão de Produto",
    feature_3_desc:
      "Entendo o produto além da tela: jornada do usuário, fluxos de navegação, impacto no negócio e alinhamento com times de engenharia e produto.",
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
    behance_cta_text: "Todos os projetos com processo completo documentado.",
    behance_cta_link: "Ver perfil completo",
    card_view_behance: "Ver no Behance",
    card_view_project: "Ver Projeto",
    // CTA
    cta_heading: "Vamos conversar?",
    cta_subtitle:
      "Estou disponível para projetos freelance, oportunidades full-time e colaborações criativas.",
    cta_btn: "Enviar mensagem",
  },
  en: {
    // Navbar
    nav_projects: "Projects",
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
      "I got into design through my UX/UI training at EBAC, and since then I've been building my experience with a focus on digital products and user-informed decisions. Today I work as a UX/UI intern at SAP, contributing to solutions that demand clarity, consistency, and a scalable vision.",
    about_p2:
      "In this portfolio, I present projects like Feed Me App and the Itaú app redesign — both of which I led end to end, from research and problem definition through ideation and prototyping. These projects reflect the way I think: practical, structured, and always connected to real user impact.",
    about_p3_before:
      "I've also worked with event branding, which deepened my sensitivity to storytelling and visual identity. I have advanced Figma skills and recently started exploring interface development using",
    about_p3_after:
      " — including this very portfolio, which I built entirely with that approach, bringing my work even closer to the technical and implementation side of product design.",
    about_btn: "Let's talk",
    skills_heading: "Skills",
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
    feature_3_title: "Product Vision",
    feature_3_desc:
      "I understand the product beyond the screen: user journeys, navigation flows, business impact, and alignment with engineering and product teams.",
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
    behance_cta_text: "All projects with full process documentation.",
    behance_cta_link: "View full profile",
    card_view_behance: "View on Behance",
    card_view_project: "View Project",
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
  lang: "pt",
  setLang: () => {},
  t: (key) => translations.pt[key],
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt")

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null
    if (saved === "pt" || saved === "en") {
      setLangState(saved)
      document.documentElement.lang = saved === "pt" ? "pt-BR" : "en"
    }
  }, [])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem("lang", newLang)
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
