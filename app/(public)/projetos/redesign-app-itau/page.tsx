"use client"

import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Search, PenTool, Layers, Users, HeadphonesIcon, TrendingUp, Gift, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { useLanguage } from "@/context/language"

const ACCENT = "#F97316"
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
    metricsTitle: "Dados das entrevistas",
    metricsSubtitle: "Resultados reais coletados com usuários do app Itaú.",
    metrics: [
      { value: "100%", label: "Mencionaram dificuldades com suporte ou acesso" },
      { value: "67%", label: "Relataram excesso de informação na interface" },
      { value: "50%", label: "Utilizam outro banco para alguns serviços financeiros" },
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
    metricsTitle: "Interview data",
    metricsSubtitle: "Real results collected from Itaú app users.",
    metrics: [
      { value: "100%", label: "Mentioned difficulties with support or access" },
      { value: "67%", label: "Reported information overload in the interface" },
      { value: "50%", label: "Use another bank for some financial services" },
    ],
    contextTitle: "Context",
    contextText:
      "The financial market is undergoing rapid transformations driven by digitalization and changing consumer behavior. In this context, Itaú faces the challenge of continuously evolving its digital experiences. This project, developed in EBAC's UX/UI program in partnership with Itaú, aimed to redesign the user journey in the app — eliminating friction and creating a more intuitive experience to strengthen the bank's competitiveness in the digital landscape.",
    behanceCta: "View full case study on Behance",
  },
}

export default function ItauProjectPage() {
  const { lang } = useLanguage()
  const c = content[lang]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[480px] flex-col justify-end overflow-hidden px-6 pb-16 pt-32"
        style={{ background: "linear-gradient(135deg, #ea580c 0%, #F97316 40%, #fb923c 70%, #fdba74 100%)" }}
      >
        {/* decorative squares */}
        {[
          { top: "12%", left: "20%", size: 64, opacity: 0.18 },
          { top: "8%", left: "38%", size: 44, opacity: 0.13 },
          { top: "20%", left: "55%", size: 72, opacity: 0.15 },
          { top: "5%", left: "72%", size: 52, opacity: 0.12 },
          { top: "30%", left: "80%", size: 40, opacity: 0.17 },
          { top: "15%", left: "88%", size: 60, opacity: 0.1 },
          { top: "35%", left: "63%", size: 36, opacity: 0.14 },
        ].map((sq, i) => (
          <div
            key={i}
            aria-hidden
            className="absolute rounded-lg border-2 border-white"
            style={{
              top: sq.top,
              left: sq.left,
              width: sq.size,
              height: sq.size,
              opacity: sq.opacity,
            }}
          />
        ))}

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
          style={{ background: "linear-gradient(135deg, #ea580c 0%, #F97316 50%, #fb923c 100%)" }}
        >
          <h2 className="mb-2 text-2xl font-bold text-white">{c.metricsTitle}</h2>
          <p className="mb-10 text-white/75">{c.metricsSubtitle}</p>
          <div className="grid gap-8 sm:grid-cols-3">
            {c.metrics.map((m) => (
              <div key={m.value}>
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
