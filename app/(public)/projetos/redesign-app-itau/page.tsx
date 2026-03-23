"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Search, PenTool, Layers, Users, GitBranch, LayoutDashboard, Eye } from "lucide-react"
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
      "Redesign da experiência do aplicativo do Banco Itaú, conduzido do discovery à entrega, com foco em usabilidade e hierarquia visual.",
    overviewTitle: "Visão geral",
    problem: "Problema",
    problemText:
      "Jornadas complexas e hierarquia visual pouco clara dificultavam tarefas cotidianas dos usuários.",
    solution: "Solução",
    solutionText:
      "Redesign centrado no usuário com fluxos simplificados e sistema visual coerente.",
    impact: "Impacto",
    impactText:
      "Maior clareza na hierarquia e fluidez na navegação entre as principais funcionalidades.",
    processTitle: "O processo",
    processSubtitle: "Do discovery ao handoff em 4 etapas.",
    steps: [
      {
        icon: Search,
        title: "Discovery",
        desc: "Imersão no produto atual, benchmarking com Nubank, Bradesco e Santander, e mapeamento dos fluxos existentes.",
      },
      {
        icon: Users,
        title: "Pesquisa com Usuários",
        desc: "Entrevistas com usuários reais do app e análise heurística baseada nas 10 heurísticas de Nielsen.",
      },
      {
        icon: PenTool,
        title: "Design",
        desc: "Arquitetura da informação revisada, wireframes de baixa fidelidade e construção do sistema visual.",
      },
      {
        icon: Layers,
        title: "Protótipo & Validação",
        desc: "Protótipos navegáveis de alta fidelidade no Figma, testados com usuários reais.",
      },
    ],
    insightsTitle: "Principais insights",
    insightsSubtitle: "4 problemas críticos identificados na pesquisa.",
    insights: [
      {
        icon: Layers,
        title: "Hierarquia visual inconsistente",
        desc: "Dificultava a localização de funções essenciais como Pix, extrato e investimentos.",
      },
      {
        icon: GitBranch,
        title: "Fluxos longos para tarefas simples",
        desc: "Transferências e Pix exigiam muitas etapas desnecessárias, gerando abandono.",
      },
      {
        icon: LayoutDashboard,
        title: "Home sem priorização",
        desc: "Excesso de informações na tela inicial sem hierarquia clara de importância.",
      },
      {
        icon: Eye,
        title: "Falta de feedback visual",
        desc: "Ações críticas como pagamentos não tinham confirmação visual clara para o usuário.",
      },
    ],
    metricsTitle: "Resultados",
    metricsSubtitle: "Validado com usuários reais em testes de usabilidade.",
    metrics: [
      { value: "40%", label: "Redução no tempo para completar tarefas críticas" },
      { value: "85%", label: "Taxa de satisfação dos participantes nos testes" },
      { value: "4", label: "Fluxos principais completamente reestruturados" },
    ],
    contextTitle: "Contexto",
    contextText:
      "O Itaú Unibanco é um dos maiores bancos da América Latina, com milhões de usuários ativos no app mobile. A proposta deste projeto foi redesenhar a experiência do aplicativo com foco em usabilidade, clareza visual e eficiência nas tarefas mais frequentes — realizado como projeto final da formação UX/UI da EBAC.",
    behanceCta: "Ver case completo no Behance",
  },
  en: {
    back: "Back to projects",
    tag: "UX/UI · Case Study · EBAC",
    title: "Itaú App Redesign",
    subtitle:
      "Redesign of the Itaú Bank app experience, led from discovery to delivery, with a focus on usability and visual hierarchy.",
    overviewTitle: "Overview",
    problem: "Problem",
    problemText:
      "Complex journeys and unclear visual hierarchy made everyday tasks difficult for users.",
    solution: "Solution",
    solutionText:
      "User-centered redesign with simplified flows and a coherent visual system.",
    impact: "Impact",
    impactText:
      "Greater clarity in hierarchy and fluidity in navigation across the main features.",
    processTitle: "The process",
    processSubtitle: "From discovery to handoff in 4 steps.",
    steps: [
      {
        icon: Search,
        title: "Discovery",
        desc: "Deep dive into the current product, benchmarking against Nubank, Bradesco, and Santander, and mapping existing flows.",
      },
      {
        icon: Users,
        title: "User Research",
        desc: "Interviews with real app users and heuristic analysis based on Nielsen's 10 heuristics.",
      },
      {
        icon: PenTool,
        title: "Design",
        desc: "Revised information architecture, low-fidelity wireframes, and visual system construction.",
      },
      {
        icon: Layers,
        title: "Prototype & Validation",
        desc: "High-fidelity navigable prototypes in Figma, tested with real users.",
      },
    ],
    insightsTitle: "Key insights",
    insightsSubtitle: "4 critical problems identified in research.",
    insights: [
      {
        icon: Layers,
        title: "Inconsistent visual hierarchy",
        desc: "Made it hard to find essential features like Pix, statements, and investments.",
      },
      {
        icon: GitBranch,
        title: "Long flows for simple tasks",
        desc: "Transfers and Pix required too many unnecessary steps, causing drop-off.",
      },
      {
        icon: LayoutDashboard,
        title: "Home screen without prioritization",
        desc: "Excessive information on the home screen without a clear hierarchy of importance.",
      },
      {
        icon: Eye,
        title: "Lack of visual feedback",
        desc: "Critical actions like payments had no clear visual confirmation for the user.",
      },
    ],
    metricsTitle: "Results",
    metricsSubtitle: "Validated with real users in usability testing.",
    metrics: [
      { value: "40%", label: "Reduction in time to complete critical tasks" },
      { value: "85%", label: "Participant satisfaction rate in testing" },
      { value: "4", label: "Main flows completely restructured" },
    ],
    contextTitle: "Context",
    contextText:
      "Itaú Unibanco is one of the largest banks in Latin America, with millions of active users on its mobile app. This project aimed to redesign the app experience with a focus on usability, visual clarity, and efficiency in users' most frequent tasks — developed as the final project of EBAC's UX/UI program.",
    behanceCta: "View full case study on Behance",
  },
}

export default function ItauProjectPage() {
  const { lang } = useLanguage()
  const router = useRouter()
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
          <button
            onClick={() => router.back()}
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> {c.back}
          </button>
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
