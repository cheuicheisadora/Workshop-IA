"use client"

import { Search, PenTool, Layers, Users, Shuffle, UserX, MessageSquareOff, Accessibility } from "lucide-react"
import { CaseStudy } from "@/components/sections/case-study"
import { useLanguage } from "@/context/language"

const BEHANCE_URL = "https://www.behance.net/gallery/228083139/Feed-Me-App-UIUX-Case-Study"

const content = {
  pt: {
    back: "Voltar aos projetos",
    tag: "UI/UX · Mobile App · Projeto EBAC",
    title: "Feed Me App",
    subtitle:
      "Rede social de receitas onde você descobre pratos personalizados, planeja refeições, compartilha suas criações e se conecta com chefs e cozinheiros do mundo todo.",
    overviewTitle: "Visão geral",
    problem: "Problema",
    problemText:
      "Amantes da culinária não tinham uma plataforma para descobrir receitas personalizadas ao seu gosto e se conectar socialmente com outros cozinheiros e chefs.",
    solution: "Solução",
    solutionText:
      "App mobile com rede social integrada: feed personalizado por preferências alimentares, planejamento de refeições semanal, criação e publicação de receitas próprias e perfis de chef seguíveis.",
    impact: "Impacto",
    impactText:
      "Protótipo de alta fidelidade com 7 fluxos mapeados, sistema de componentes completo e identidade visual consistente — unindo descoberta, criação e conexão social em uma única plataforma.",
    processTitle: "O processo",
    processSubtitle: "7 fluxos do conceito ao protótipo validado.",
    steps: [
      {
        icon: Search,
        title: "Descoberta",
        desc: "Pesquisa sobre hábitos culinários e análise de concorrentes como Instagram, Pinterest, TikTok e Tasty para identificar lacunas e oportunidades.",
      },
      {
        icon: Users,
        title: "Pesquisa com Usuários",
        desc: "Entrevistas com cozinheiros caseiros, chefs e entusiastas da gastronomia. Persona definida: Julia Stone, 25 anos, assistente de marketing apaixonada por culinária.",
      },
      {
        icon: PenTool,
        title: "Identidade e Arquitetura",
        desc: "Sistema visual com tipografia Gelasio + Open Sans, paleta verde escuro (#164821) e creme (#FFFDF2). Arquitetura de informação das 5 telas principais.",
      },
      {
        icon: Layers,
        title: "Protótipo & Validação",
        desc: "Protótipos navegáveis de alta fidelidade no Figma com 7 fluxos completos: Onboarding, Descoberta, Chat, Chefs, Planejamento, Criação e Perfil.",
      },
    ],
    insightsTitle: "Principais insights",
    insightsSubtitle: "4 lacunas identificadas nos apps de receitas existentes.",
    insights: [
      {
        icon: Shuffle,
        title: "Descoberta sem personalização",
        desc: "Apps existentes não recomendavam receitas com base no gosto, restrições alimentares ou histórico do usuário.",
      },
      {
        icon: UserX,
        title: "Cozinheiros sem voz",
        desc: "Cozinheiros caseiros não tinham plataforma para publicar receitas próprias, ganhar seguidores e ser reconhecidos.",
      },
      {
        icon: MessageSquareOff,
        title: "Ausência de conexão social",
        desc: "Não havia como seguir, conversar ou interagir com chefs e outros entusiastas da culinária em tempo real.",
      },
      {
        icon: Accessibility,
        title: "Sem planejamento integrado",
        desc: "Nenhum app combinava descoberta de receitas com planejamento semanal de refeições em uma experiência fluida.",
      },
    ],
    metricsTitle: "Resultados",
    metricsSubtitle: "Protótipo de alta fidelidade entregue com sistema completo.",
    metrics: [
      { value: "7", label: "Fluxos mapeados: Onboarding, Descoberta, Chat, Chefs, Planejamento, Criação e Perfil" },
      { value: "5", label: "Telas principais: Home, Busca, Chat, Menu Semanal e Perfil" },
      { value: "3", label: "Funcionalidades sociais: Seguir chefs, Chat direto e Compartilhar receitas" },
    ],
    contextTitle: "Contexto",
    contextText:
      "\"A comida é o ingrediente social definitivo!\" — essa é a essência do Feed Me App. O projeto nasceu de uma observação simples: apaixonados por culinária não tinham um espaço só deles. A persona Julia Stone, 25 anos, resume esse público: ativa nas redes, curiosa na cozinha, mas frustrada com apps genéricos que não entendiam seu gosto. O Feed Me foi projetado para personalizar a descoberta desde o onboarding — o usuário escolhe preferências alimentares (vegetariano, vegano, keto, halal e outros) e define por que entrou no app (descobrir receitas, conectar-se com cozinheiros, planejar refeições ou compartilhar criações). Tudo converge para uma experiência social, viva e centrada na gastronomia.",
    behanceCta: "Ver projeto completo no Behance",
  },
  en: {
    back: "Back to projects",
    tag: "UI/UX · Mobile App · EBAC Project",
    title: "Feed Me App",
    subtitle:
      "A recipe social network where you discover personalized dishes, plan your meals, share your creations, and connect with chefs and home cooks around the world.",
    overviewTitle: "Overview",
    problem: "Problem",
    problemText:
      "Food lovers had no platform to discover recipes tailored to their taste and connect socially with other cooks and chefs.",
    solution: "Solution",
    solutionText:
      "A mobile app with an integrated social network: personalized feed by dietary preferences, weekly meal planning, recipe creation and publishing, and followable chef profiles.",
    impact: "Impact",
    impactText:
      "High-fidelity prototype with 7 mapped flows, a complete component system, and consistent visual identity — uniting discovery, creation, and social connection in a single platform.",
    processTitle: "The process",
    processSubtitle: "7 flows from concept to validated prototype.",
    steps: [
      {
        icon: Search,
        title: "Discovery",
        desc: "Research into cooking habits and competitive analysis of apps like Instagram, Pinterest, TikTok, and Tasty to identify gaps and opportunities.",
      },
      {
        icon: Users,
        title: "User Research",
        desc: "Interviews with home cooks, chefs, and food enthusiasts. Persona defined: Julia Stone, 25, marketing assistant and passionate food lover.",
      },
      {
        icon: PenTool,
        title: "Identity & Architecture",
        desc: "Visual system with Gelasio + Open Sans typography, dark green (#164821) and cream (#FFFDF2) palette. Information architecture for the 5 main screens.",
      },
      {
        icon: Layers,
        title: "Prototype & Validation",
        desc: "High-fidelity navigable prototypes in Figma with 7 complete flows: Onboarding, Discovery, Chat, Chefs, Meal Planning, Recipe Creation, and Profile.",
      },
    ],
    insightsTitle: "Key insights",
    insightsSubtitle: "4 gaps identified in existing recipe apps.",
    insights: [
      {
        icon: Shuffle,
        title: "Discovery without personalization",
        desc: "Existing apps didn't recommend recipes based on the user's taste, dietary restrictions, or history.",
      },
      {
        icon: UserX,
        title: "Home cooks without a voice",
        desc: "Home cooks had no platform to publish their own recipes, gain followers, and be recognized.",
      },
      {
        icon: MessageSquareOff,
        title: "No social connection",
        desc: "There was no way to follow, chat, or interact with chefs and other food enthusiasts in real time.",
      },
      {
        icon: Accessibility,
        title: "No integrated meal planning",
        desc: "No app combined recipe discovery with weekly meal planning in a seamless experience.",
      },
    ],
    metricsTitle: "Results",
    metricsSubtitle: "High-fidelity prototype delivered with a complete design system.",
    metrics: [
      { value: "7", label: "Mapped flows: Onboarding, Discovery, Chat, Chefs, Planning, Creation, and Profile" },
      { value: "5", label: "Main screens: Home, Search, Chat, Weekly Menu, and Profile" },
      { value: "3", label: "Social features: Follow chefs, Direct chat, and Share recipes" },
    ],
    contextTitle: "Context",
    contextText:
      "\"Food is the ultimate social ingredient!\" — that's the essence of Feed Me App. The project was born from a simple observation: food lovers had no space of their own. The persona Julia Stone, 25, captures this audience perfectly: socially active, curious in the kitchen, but frustrated by generic apps that didn't understand her taste. Feed Me was designed to personalize discovery from the very first onboarding — users choose dietary preferences (vegetarian, vegan, keto, halal, and more) and define why they joined (discover recipes, connect with cooks, plan meals, or share creations). Everything converges into a social, vibrant experience centered on gastronomy.",
    behanceCta: "View full project on Behance",
  },
}

export default function FeedMeAppPage() {
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
