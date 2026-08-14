"use client"

import { Search, PenTool, Layers, Users, HeadphonesIcon, TrendingUp, Gift, LayoutGrid } from "lucide-react"
import { CaseStudy } from "@/components/sections/case-study"
import { useLanguage } from "@/context/language"

const BEHANCE_URL = "https://www.behance.net/gallery/245625317/Redesign-do-App-Itau-Projeto-UXUI-EBAC"

const content = {
  pt: {
    back: "Voltar aos projetos",
    tag: "UX/UI · Case Study · EBAC",
    title: "Redesign App Itaú",
    subtitle:
      "Redesenho da jornada do usuário no app Itaú, eliminando fricções e modernizando a interface para criar uma experiência mais intuitiva no mercado financeiro digital.",
    overviewTitle: "Visão geral",
    problem: "Problema",
    problemText:
      "O Itaú enfrenta o desafio de evoluir suas experiências digitais. 100% dos usuários entrevistados relataram dificuldades com suporte e 67% sentiram excesso de informação na interface.",
    solution: "Solução",
    solutionText:
      "4 soluções priorizadas: Central de Atendimento integrada, Plataforma de Investimentos, hub de Benefícios e Widgets financeiros personalizáveis.",
    impact: "Impacto",
    impactText:
      "Interface modernizada com redução da carga cognitiva, entregue em mobile, desktop e smartwatch.",
    processTitle: "O processo",
    processSubtitle: "7 etapas do projeto Itaú + EBAC.",
    steps: [
      {
        icon: Search,
        title: "Pesquisa",
        desc: "Pesquisa de mercado e benchmark com Nubank, Banco Inter e Bradesco para mapear o cenário competitivo e identificar diferenciais de UX.",
      },
      {
        icon: Users,
        title: "Pesquisa com Usuários",
        desc: "Entrevistas revelaram que 100% tinham dificuldades com suporte, 67% relataram excesso de informação e 50% usavam outro banco para alguns serviços.",
      },
      {
        icon: PenTool,
        title: "Persona & Hipóteses",
        desc: "Formulação da persona Marina Trindade (25 anos, estagiária) e 4 hipóteses de solução para responder às principais dores identificadas.",
      },
      {
        icon: Layers,
        title: "Prototipagem & Validação",
        desc: "Protótipos de alta fidelidade em mobile, desktop e smartwatch, com sistema de design (Itaú Display, paleta Pantone e componentes).",
      },
    ],
    insightsTitle: "Principais insights",
    insightsSubtitle: "O que as entrevistas com usuários revelaram.",
    insights: [
      {
        icon: LayoutGrid,
        title: "Excesso de informações na tela",
        desc: "67% relataram sobrecarga visual. \"Às vezes parece que tem informação demais na tela.\"",
      },
      {
        icon: HeadphonesIcon,
        title: "Suporte fora do aplicativo",
        desc: "100% tinham dificuldades com suporte. \"Quando preciso de ajuda, tenho que sair do app para resolver.\"",
      },
      {
        icon: TrendingUp,
        title: "Falta de clareza sobre taxas e investimentos",
        desc: "50% usavam outro banco para serviços financeiros. \"Prefiro usar o cartão de outro banco porque as taxas são mais claras.\"",
      },
      {
        icon: Gift,
        title: "Benefícios e vantagens invisíveis",
        desc: "Descontos, cashback e vantagens não estavam acessíveis de forma clara e prática no app.",
      },
    ],
    metricsTitle: "Impacto do redesign",
    metricsSubtitle: "Usuários relataram melhorias significativas após o novo design.",
    metrics: [
      { value: "92%", label: "Avaliaram o suporte integrado como mais acessível e fácil de usar" },
      { value: "78%", label: "Sentiram redução da sobrecarga visual na nova interface" },
      { value: "85%", label: "Afirmaram maior clareza sobre investimentos e benefícios disponíveis" },
    ],
    contextTitle: "Contexto",
    contextText:
      "O mercado financeiro passa por rápidas transformações impulsionadas pela digitalização e pela mudança no comportamento dos consumidores. Nesse cenário, o Itaú enfrenta o desafio de evoluir continuamente suas experiências digitais. Este projeto, desenvolvido na formação UX/UI da EBAC em parceria com o Itaú, teve como objetivo redesenhar a jornada do usuário no app — eliminando fricções e criando uma experiência mais intuitiva para fortalecer a competitividade do banco no cenário digital.",
    behanceCta: "Ver case completo no Behance",
  },
  en: {
    back: "Back to projects",
    tag: "UX/UI · Case Study · EBAC",
    title: "Itaú App Redesign",
    subtitle:
      "Redesign of the Itaú app's user journey, eliminating friction and modernizing the interface to create a more intuitive experience in the digital financial landscape.",
    overviewTitle: "Overview",
    problem: "Problem",
    problemText:
      "Itaú faces the challenge of evolving its digital experiences. 100% of interviewed users reported difficulties with support and 67% felt information overload in the interface.",
    solution: "Solution",
    solutionText:
      "4 prioritized solutions: integrated Support Center, Investment Platform, Benefits hub, and customizable Financial Widgets.",
    impact: "Impact",
    impactText:
      "Modernized interface with reduced cognitive load, delivered across mobile, desktop, and smartwatch.",
    processTitle: "The process",
    processSubtitle: "7 stages of the Itaú + EBAC project.",
    steps: [
      {
        icon: Search,
        title: "Research",
        desc: "Market research and benchmarking against Nubank, Banco Inter, and Bradesco to map the competitive landscape and identify UX differentiators.",
      },
      {
        icon: Users,
        title: "User Research",
        desc: "Interviews revealed that 100% had support difficulties, 67% reported information overload, and 50% used another bank for some services.",
      },
      {
        icon: PenTool,
        title: "Persona & Hypotheses",
        desc: "Definition of persona Marina Trindade (25, intern) and 4 solution hypotheses to address the main pain points identified.",
      },
      {
        icon: Layers,
        title: "Prototyping & Validation",
        desc: "High-fidelity prototypes for mobile, desktop, and smartwatch, with a design system (Itaú Display, Pantone palette, and components).",
      },
    ],
    insightsTitle: "Key insights",
    insightsSubtitle: "What user interviews revealed.",
    insights: [
      {
        icon: LayoutGrid,
        title: "Information overload on screen",
        desc: "67% reported visual overload. \"Sometimes it feels like there's too much information on the screen.\"",
      },
      {
        icon: HeadphonesIcon,
        title: "Support outside the app",
        desc: "100% had support difficulties. \"When I need help, I have to leave the app to resolve it.\"",
      },
      {
        icon: TrendingUp,
        title: "Lack of clarity on fees and investments",
        desc: "50% used another bank for financial services. \"I prefer using another bank's card because the fees are clearer.\"",
      },
      {
        icon: Gift,
        title: "Invisible benefits and perks",
        desc: "Discounts, cashback, and perks were not clearly and practically accessible within the app.",
      },
    ],
    metricsTitle: "Redesign impact",
    metricsSubtitle: "Users reported significant improvements after the new design.",
    metrics: [
      { value: "92%", label: "Rated the integrated support as more accessible and easier to use" },
      { value: "78%", label: "Felt reduced visual overload in the new interface" },
      { value: "85%", label: "Reported greater clarity on available investments and benefits" },
    ],
    contextTitle: "Context",
    contextText:
      "The financial market is undergoing rapid transformations driven by digitalization and changing consumer behavior. In this context, Itaú faces the challenge of continuously evolving its digital experiences. This project, developed in EBAC's UX/UI program in partnership with Itaú, aimed to redesign the user journey in the app — eliminating friction and creating a more intuitive experience to strengthen the bank's competitiveness in the digital landscape.",
    behanceCta: "View full case study on Behance",
  },
}

export default function ItauProjectPage() {
  const { lang, t } = useLanguage()
  const c = content[lang]

  return (
    <CaseStudy
      c={{
        ...c,
        ctaLabel: c.behanceCta,
        ctaHref: BEHANCE_URL,
        newTabLabel: t("home_new_tab"),
      }}
    />
  )
}
