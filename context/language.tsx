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
    feature_1_title: "Projetos com abordagem end-to-end",
    feature_1_desc:
      "Do discovery à entrega: pesquisa, síntese, ideação, prototipagem e validação em cada projeto.",
    feature_2_title: "Processo de Design estruturado",
    feature_2_desc:
      "Metodologia clara que une Design Thinking, UX Research e critérios de negócio em cada decisão.",
    feature_3_title: "Foco em impacto e métricas",
    feature_3_desc:
      "Decisões de design guiadas por dados reais — conversão, retenção, satisfação e acessibilidade.",
    feature_4_title: "Colaboração multidisciplinar",
    feature_4_desc:
      "Trabalho integrado com times de produto, engenharia e negócios para alinhar visão e execução.",
    feature_5_title: "Pensamento estratégico + execução visual",
    feature_5_desc: "Visão sistêmica do produto aliada à entrega de interfaces polidas e acessíveis.",
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
    feature_1_title: "End-to-end project approach",
    feature_1_desc:
      "From discovery to delivery: research, synthesis, ideation, prototyping, and validation in every project.",
    feature_2_title: "Structured Design Process",
    feature_2_desc:
      "A clear methodology combining Design Thinking, UX Research, and business criteria in every decision.",
    feature_3_title: "Focus on impact and metrics",
    feature_3_desc:
      "Design decisions guided by real data — conversion, retention, satisfaction, and accessibility.",
    feature_4_title: "Multidisciplinary collaboration",
    feature_4_desc:
      "Integrated work with product, engineering, and business teams to align vision and execution.",
    feature_5_title: "Strategic thinking + visual execution",
    feature_5_desc:
      "Systemic product vision combined with the delivery of polished, accessible interfaces.",
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
