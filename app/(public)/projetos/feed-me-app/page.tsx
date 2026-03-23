"use client"

import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Search, PenTool, Layers, Users, Shuffle, UserX, MessageSquareOff, Accessibility } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { useLanguage } from "@/context/language"

const ACCENT = "#5BAB80"
const ACCENT_LIGHT = "#89CBA8"
const BEHANCE_URL = "https://www.behance.net/gallery/228083139/Feed-Me-App-UIUX-Case-Study"

const content = {
  pt: {
    back: "Voltar aos projetos",
    tag: "UI/UX · Mobile App · Case Study",
    title: "Feed Me App",
    subtitle:
      "Rede social de receitas onde você descobre pratos personalizados, compartilha suas criações e se conecta com chefs e cozinheiros.",
    overviewTitle: "Visão geral",
    problem: "Problema",
    problemText:
      "Amantes da culinária não tinham uma plataforma para descobrir receitas ao seu gosto e se conectar socialmente com outros cozinheiros.",
    solution: "Solução",
    solutionText:
      "App mobile de receitas com rede social integrada — feed personalizado, perfis de chef, chat e compartilhamento de criações.",
    impact: "Impacto",
    impactText:
      "Interface acessível e amigável com navegação fluida, conectando descoberta de receitas à interação social.",
    processTitle: "O processo",
    processSubtitle: "Do discovery ao protótipo validado.",
    steps: [
      {
        icon: Search,
        title: "Descoberta",
        desc: "Pesquisa sobre hábitos culinários e análise de concorrentes como Instagram, Pinterest, TikTok e Tasty.",
      },
      {
        icon: Users,
        title: "Pesquisa com Usuários",
        desc: "Entrevistas com cozinheiros caseiros, chefs e entusiastas da gastronomia para mapear necessidades e comportamentos.",
      },
      {
        icon: PenTool,
        title: "Criação",
        desc: "Sistema de componentes, arquitetura de informação das 5 telas principais e identidade visual verde.",
      },
      {
        icon: Layers,
        title: "Protótipo & Validação",
        desc: "Protótipos navegáveis de alta fidelidade no Figma com fluxos de descoberta, perfil de chef e receitas.",
      },
    ],
    insightsTitle: "Principais insights",
    insightsSubtitle: "4 lacunas identificadas nos apps de receitas existentes.",
    insights: [
      {
        icon: Shuffle,
        title: "Descoberta sem personalização",
        desc: "Apps existentes não recomendavam receitas com base no gosto, histórico ou perfil do usuário.",
      },
      {
        icon: UserX,
        title: "Cozinheiros sem voz",
        desc: "Cozinheiros caseiros não tinham plataforma para publicar suas receitas, ganhar seguidores e ser reconhecidos.",
      },
      {
        icon: MessageSquareOff,
        title: "Ausência de conexão social",
        desc: "Não havia como seguir, chatear ou interagir com chefs e outros entusiastas da culinária.",
      },
      {
        icon: Accessibility,
        title: "Interfaces pouco acessíveis",
        desc: "Apps de receitas existentes tinham navegação confusa e não priorizavam inclusividade e facilidade de uso.",
      },
    ],
    metricsTitle: "Resultados",
    metricsSubtitle: "Protótipo de alta fidelidade entregue com sistema completo.",
    metrics: [
      { value: "5", label: "Telas principais: Home, Explorar, Chat, Receitas e Perfil" },
      { value: "3", label: "Features sociais: Follow, Chat e Share integrados ao app" },
      { value: "2025", label: "Projeto concluído na formação UX/UI da EBAC" },
    ],
    contextTitle: "Contexto",
    contextText:
      "O FeedMe é uma rede social de receitas — um lugar para cozinhar o que você ama e compartilhar o que você cria. O projeto desenvolveu um app mobile onde qualquer pessoa pode descobrir receitas personalizadas, seguir chefs e cozinheiros caseiros, compartilhar suas próprias criações e interagir como em uma rede social.",
    behanceCta: "Ver case completo no Behance",
  },
  en: {
    back: "Back to projects",
    tag: "UI/UX · Mobile App · Case Study",
    title: "Feed Me App",
    subtitle:
      "A recipe social network where you discover personalized dishes, share your creations, and connect with chefs and home cooks.",
    overviewTitle: "Overview",
    problem: "Problem",
    problemText:
      "Food lovers had no platform to discover recipes tailored to their taste and connect socially with other cooks.",
    solution: "Solution",
    solutionText:
      "A recipe mobile app with an integrated social network — personalized feed, chef profiles, chat, and recipe sharing.",
    impact: "Impact",
    impactText:
      "Accessible, user-friendly interface with smooth navigation, bridging recipe discovery and social interaction.",
    processTitle: "The process",
    processSubtitle: "From discovery to validated prototype.",
    steps: [
      {
        icon: Search,
        title: "Discovery",
        desc: "Research into cooking habits and competitive analysis of apps like Instagram, Pinterest, TikTok, and Tasty.",
      },
      {
        icon: Users,
        title: "User Research",
        desc: "Interviews with home cooks, professional chefs, and food enthusiasts to map needs and behaviors.",
      },
      {
        icon: PenTool,
        title: "Design",
        desc: "Component system, information architecture for the 5 main screens, and green visual identity.",
      },
      {
        icon: Layers,
        title: "Prototype & Validation",
        desc: "High-fidelity navigable prototypes in Figma covering recipe discovery, chef profile, and social flows.",
      },
    ],
    insightsTitle: "Key insights",
    insightsSubtitle: "4 gaps identified in existing recipe apps.",
    insights: [
      {
        icon: Shuffle,
        title: "Discovery without personalization",
        desc: "Existing apps didn't recommend recipes based on the user's taste, history, or profile.",
      },
      {
        icon: UserX,
        title: "Home cooks without a voice",
        desc: "Home cooks had no platform to publish their recipes, gain followers, and be recognized.",
      },
      {
        icon: MessageSquareOff,
        title: "No social connection",
        desc: "There was no way to follow, chat, or interact with chefs and other food enthusiasts.",
      },
      {
        icon: Accessibility,
        title: "Inaccessible interfaces",
        desc: "Existing recipe apps had confusing navigation and didn't prioritize inclusivity or ease of use.",
      },
    ],
    metricsTitle: "Results",
    metricsSubtitle: "High-fidelity prototype delivered with a complete design system.",
    metrics: [
      { value: "5", label: "Main screens: Home, Explore, Chat, Cookbook, and Profile" },
      { value: "3", label: "Social features: Follow, Chat, and Share integrated into the app" },
      { value: "2025", label: "Case study completed in EBAC's UX/UI program" },
    ],
    contextTitle: "Context",
    contextText:
      "Feed Me App was born from a real need: people who want to eat healthier but don't know where to start. The case study covered the full UX process — from exploratory research to delivering a high-fidelity navigable prototype, including ideation, information architecture, and user testing.",
    behanceCta: "View full case study on Behance",
  },
}

export default function FeedMeAppPage() {
  const { lang } = useLanguage()
  const c = content[lang]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[480px] flex-col justify-end overflow-hidden px-6 pb-16 pt-32"
        style={{ background: "linear-gradient(135deg, #2d7a56 0%, #3d9467 30%, #5BAB80 55%, #89CBA8 80%, #C5E8D5 100%)" }}
      >

        <div className="relative mx-auto w-full max-w-5xl">
          <Link
            href="/#projetos"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> {c.back}
          </Link>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">
            {c.tag}
          </p>
          <h1
            className="font-bold text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            {c.title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/85 leading-relaxed">
            {c.subtitle}
          </p>
        </div>
      </section>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 space-y-20">

        {/* ── Overview cards ──────────────────────────────────────────── */}
        <section>
          <h2 className="mb-8 text-xl font-bold text-foreground">{c.overviewTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { label: c.problem, text: c.problemText },
              { label: c.solution, text: c.solutionText },
              { label: c.impact, text: c.impactText },
            ].map(({ label, text }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-card p-6"
                style={{ borderTop: `3px solid ${ACCENT}` }}
              >
                <p
                  className="mb-2 text-xs font-bold uppercase tracking-widest"
                  style={{ color: ACCENT }}
                >
                  {label}
                </p>
                <p className="text-sm text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Context ─────────────────────────────────────────────────── */}
        <section className="rounded-2xl p-8" style={{ background: `${ACCENT}0f`, border: `1px solid ${ACCENT}30` }}>
          <h2 className="mb-3 text-lg font-bold text-foreground">{c.contextTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{c.contextText}</p>
        </section>

        {/* ── Process ─────────────────────────────────────────────────── */}
        <section>
          <div className="mb-10 text-center">
            <span
              className="mb-3 block h-1 w-10 rounded-full mx-auto"
              style={{ background: ACCENT }}
            />
            <h2 className="text-2xl font-bold text-foreground">{c.processTitle}</h2>
            <p className="mt-2 text-muted-foreground">{c.processSubtitle}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={i}
                  className="relative rounded-2xl border border-border bg-card p-6"
                >
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${ACCENT}18`, border: `1px solid ${ACCENT}40` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: ACCENT }} />
                  </div>
                  <span
                    className="absolute top-5 right-5 text-3xl font-black opacity-10"
                    style={{ color: ACCENT }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="mb-2 font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Insights ────────────────────────────────────────────────── */}
        <section>
          <div className="mb-10 text-center">
            <span
              className="mb-3 block h-1 w-10 rounded-full mx-auto"
              style={{ background: ACCENT }}
            />
            <h2 className="text-2xl font-bold text-foreground">{c.insightsTitle}</h2>
            <p className="mt-2 text-muted-foreground">{c.insightsSubtitle}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {c.insights.map((insight, i) => {
              const InsightIcon = insight.icon
              return (
                <div
                  key={i}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <div
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: `${ACCENT}18` }}
                  >
                    <InsightIcon className="h-4 w-4" style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground text-sm">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{insight.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Metrics ─────────────────────────────────────────────────── */}
        <section
          className="rounded-2xl px-8 py-12 text-center"
          style={{ background: "linear-gradient(135deg, #2d7a56 0%, #3d9467 40%, #5BAB80 80%, #89CBA8 100%)" }}
        >
          <h2 className="mb-2 text-2xl font-bold text-white">{c.metricsTitle}</h2>
          <p className="mb-10 text-white/75">{c.metricsSubtitle}</p>
          <div className="grid gap-8 sm:grid-cols-3">
            {c.metrics.map((m) => (
              <div key={m.value + m.label}>
                <p
                  className="font-black text-white"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
                >
                  {m.value}
                </p>
                <p className="mt-2 text-sm text-white/80 leading-snug max-w-[160px] mx-auto">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Behance CTA ─────────────────────────────────────────────── */}
        <section className="flex flex-col items-center gap-4 text-center">
          <Button
            asChild
            size="lg"
            style={{ background: ACCENT, color: "#fff" }}
            className="hover:opacity-90 transition-opacity"
          >
            <a href={BEHANCE_URL} target="_blank" rel="noopener noreferrer">
              {c.behanceCta} <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  )
}
