"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Search, PenTool, Layers, Users, Sliders, Trophy, LayoutGrid, BookOpen } from "lucide-react"
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
      "Case study de um aplicativo mobile de alimentação saudável, conduzido do discovery à entrega de protótipos navegáveis de alta fidelidade.",
    overviewTitle: "Visão geral",
    problem: "Problema",
    problemText:
      "Usuários encontravam dificuldade em manter uma alimentação saudável por falta de guia prático.",
    solution: "Solução",
    solutionText:
      "App mobile com jornada gamificada, receitas personalizadas e rastreamento nutricional.",
    impact: "Impacto",
    impactText:
      "Protótipo validado com usuários reais, com alta taxa de satisfação nos testes.",
    processTitle: "O processo",
    processSubtitle: "Do discovery ao protótipo validado.",
    steps: [
      {
        icon: Search,
        title: "Discovery",
        desc: "Pesquisa exploratória sobre hábitos alimentares, análise de concorrentes e definição do escopo do produto.",
      },
      {
        icon: Users,
        title: "Pesquisa com Usuários",
        desc: "Entrevistas, survey de validação, criação de personas e mapas de empatia com foco em barreiras alimentares.",
      },
      {
        icon: PenTool,
        title: "Design",
        desc: "Arquitetura de informação, wireframes e sistema visual com identidade verde e linguagem acessível.",
      },
      {
        icon: Layers,
        title: "Protótipo & Validação",
        desc: "Protótipos navegáveis de alta fidelidade no Figma testados com usuários reais em 3 fluxos principais.",
      },
    ],
    insightsTitle: "Principais insights",
    insightsSubtitle: "4 barreiras identificadas na jornada dos usuários.",
    insights: [
      {
        icon: Sliders,
        title: "Falta de personalização",
        desc: "Usuários não encontravam receitas adequadas ao seu perfil alimentar e restrições dietéticas.",
      },
      {
        icon: Trophy,
        title: "Ausência de motivação contínua",
        desc: "Sem gamificação ou acompanhamento de progresso, o hábito saudável era rapidamente abandonado.",
      },
      {
        icon: BookOpen,
        title: "Informações nutricionais complexas",
        desc: "Dados como macros e calorias eram apresentados de forma técnica e desmotivavam o acompanhamento.",
      },
      {
        icon: LayoutGrid,
        title: "Experiência desconectada",
        desc: "Planejamento e execução eram etapas separadas, sem fluxo integrado entre receitas e diário alimentar.",
      },
    ],
    metricsTitle: "Resultados",
    metricsSubtitle: "Validado com usuários reais em testes de usabilidade.",
    metrics: [
      { value: "87%", label: "Taxa de satisfação geral nos testes de usabilidade" },
      { value: "3", label: "Personas validadas guiando cada decisão de design" },
      { value: "3", label: "Fluxos principais aprovados: cadastro, receitas e rastreamento" },
    ],
    contextTitle: "Contexto",
    contextText:
      "O Feed Me App nasceu de uma necessidade real: pessoas que querem comer melhor mas não sabem por onde começar. O case study conduziu todo o processo de UX — da pesquisa exploratória à entrega de um protótipo navegável de alta fidelidade, passando por ideação, arquitetura de informação e testes com usuários.",
    behanceCta: "Ver case completo no Behance",
  },
  en: {
    back: "Back to projects",
    tag: "UI/UX · Mobile App · Case Study",
    title: "Feed Me App",
    subtitle:
      "Case study of a healthy eating mobile app, led from discovery to the delivery of high-fidelity navigable prototypes.",
    overviewTitle: "Overview",
    problem: "Problem",
    problemText:
      "Users struggled to maintain healthy eating habits due to a lack of practical guidance.",
    solution: "Solution",
    solutionText:
      "Mobile app with a gamified journey, personalized recipes, and nutritional tracking.",
    impact: "Impact",
    impactText:
      "Prototype validated with real users, achieving a high satisfaction rate in testing.",
    processTitle: "The process",
    processSubtitle: "From discovery to validated prototype.",
    steps: [
      {
        icon: Search,
        title: "Discovery",
        desc: "Exploratory research into eating habits, competitive analysis, and product scope definition.",
      },
      {
        icon: Users,
        title: "User Research",
        desc: "Interviews, validation survey, persona creation, and empathy maps focused on dietary barriers.",
      },
      {
        icon: PenTool,
        title: "Design",
        desc: "Information architecture, wireframes, and visual system with a green identity and accessible language.",
      },
      {
        icon: Layers,
        title: "Prototype & Validation",
        desc: "High-fidelity navigable prototypes in Figma tested with real users across 3 main flows.",
      },
    ],
    insightsTitle: "Key insights",
    insightsSubtitle: "4 barriers identified in the user journey.",
    insights: [
      {
        icon: Sliders,
        title: "Lack of personalization",
        desc: "Users couldn't find recipes matching their dietary profile and restrictions.",
      },
      {
        icon: Trophy,
        title: "No ongoing motivation",
        desc: "Without gamification or progress tracking, healthy habits were quickly abandoned.",
      },
      {
        icon: BookOpen,
        title: "Complex nutritional information",
        desc: "Data like macros and calories were presented in a technical way, discouraging regular tracking.",
      },
      {
        icon: LayoutGrid,
        title: "Disconnected experience",
        desc: "Planning and execution were separate steps, with no integrated flow between recipes and a food diary.",
      },
    ],
    metricsTitle: "Results",
    metricsSubtitle: "Validated with real users in usability testing.",
    metrics: [
      { value: "87%", label: "Overall satisfaction rate in usability tests" },
      { value: "3", label: "Validated personas guiding every design decision" },
      { value: "3", label: "Core flows approved: onboarding, recipes, and tracking" },
    ],
    contextTitle: "Context",
    contextText:
      "Feed Me App was born from a real need: people who want to eat healthier but don't know where to start. The case study covered the full UX process — from exploratory research to delivering a high-fidelity navigable prototype, including ideation, information architecture, and user testing.",
    behanceCta: "View full case study on Behance",
  },
}

export default function FeedMeAppPage() {
  const { lang } = useLanguage()
  const router = useRouter()
  const c = content[lang]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[480px] flex-col justify-end overflow-hidden px-6 pb-16 pt-32"
        style={{ background: "linear-gradient(135deg, #2d7a56 0%, #3d9467 30%, #5BAB80 55%, #89CBA8 80%, #C5E8D5 100%)" }}
      >
        {/* decorative leaf-like shapes */}
        {[
          { top: "10%", left: "18%", size: 56, opacity: 0.18, rotate: 15 },
          { top: "6%",  left: "36%", size: 40, opacity: 0.13, rotate: -10 },
          { top: "18%", left: "54%", size: 68, opacity: 0.15, rotate: 25 },
          { top: "4%",  left: "70%", size: 48, opacity: 0.12, rotate: -5 },
          { top: "28%", left: "79%", size: 36, opacity: 0.17, rotate: 20 },
          { top: "14%", left: "87%", size: 58, opacity: 0.1,  rotate: -15 },
          { top: "33%", left: "62%", size: 34, opacity: 0.14, rotate: 10 },
        ].map((sq, i) => (
          <div
            key={i}
            aria-hidden
            className="absolute rounded-xl border-2 border-white"
            style={{
              top: sq.top,
              left: sq.left,
              width: sq.size,
              height: sq.size,
              opacity: sq.opacity,
              transform: `rotate(${sq.rotate}deg)`,
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
