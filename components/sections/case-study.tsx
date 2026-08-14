"use client"

import Link from "next/link"
import { ArrowLeft, ArrowUpRight, type LucideIcon } from "lucide-react"
import { Backdrop } from "@/components/decor/backdrop"
import { SiteHeader } from "@/components/sections/site-header"
import { SiteFooter } from "@/components/sections/site-footer"

/**
 * Página de case, no mesmo desenho da home.
 *
 * As três páginas de projeto tinham o mesmo esqueleto repetido em três
 * arquivos, cada uma com sua cor de acento e no tema claro antigo. Aqui o
 * esqueleto é um só e o conteúdo entra por props — o texto continua morando na
 * página de cada projeto, que é onde ele é editado.
 *
 * O que vem da home: fundo com as manchas e o grão, header e rodapé, cards de
 * vidro, escala tipográfica e os botões. O acento é o roxo do sistema; as
 * cores por projeto saíram, porque cada página com uma cor diferente desmancha
 * a identidade que a home construiu.
 */

export type CaseItem = {
  icon: LucideIcon
  title: string
  desc: string
}

export type CaseContent = {
  back: string
  tag: string
  title: string
  subtitle: string

  overviewTitle: string
  problem: string
  problemText: string
  solution: string
  solutionText: string
  impact: string
  impactText: string

  contextTitle: string
  contextText: string

  processTitle: string
  processSubtitle: string
  steps: CaseItem[]

  insightsTitle: string
  insightsSubtitle: string
  insights: CaseItem[]

  metricsTitle: string
  metricsSubtitle: string
  metrics: { value: string; label: string }[]

  /** Link externo do fim da página (site no ar, Behance). Opcional. */
  ctaLabel?: string
  ctaHref?: string
  /** Aviso de nova aba, para leitor de tela. */
  newTabLabel: string
}

/** Cabeçalho de seção: título e, quando houver, uma linha de apoio. */
function SectionHead({
  title,
  subtitle,
  centered = false,
}: {
  title: string
  subtitle?: string
  centered?: boolean
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : ""}>
      <h2
        className="font-bold"
        style={{
          fontSize: "var(--text-section)",
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-fg-muted" style={{ lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

/**
 * Card com ícone.
 *
 * Em pé (`empilhado`) para o processo, que vive numa grade de quatro colunas:
 * com o ícone ao lado, sobra uma coluna de texto de meia dúzia de caracteres.
 * Deitado nas decisões, que ocupam duas colunas e têm espaço.
 */
function IconCard({
  item,
  index,
  empilhado = false,
}: {
  item: CaseItem
  index?: number
  empilhado?: boolean
}) {
  const Icon = item.icon
  return (
    <li className={`case-card flex gap-4 ${empilhado ? "flex-col" : ""}`}>
      <span className="case-icone" aria-hidden>
        <Icon className="h-5 w-5" />
      </span>
      <div>
        {index !== undefined && (
          <p className="case-numero">{String(index + 1).padStart(2, "0")}</p>
        )}
        <h3
          className="font-semibold"
          style={{ fontSize: "var(--text-item-title)", lineHeight: 1.35 }}
        >
          {item.title}
        </h3>
        <p
          className="mt-2 text-fg-muted"
          style={{ fontSize: "var(--text-card-body)", lineHeight: 1.65 }}
        >
          {item.desc}
        </p>
      </div>
    </li>
  )
}

export function CaseStudy({ c }: { c: CaseContent }) {
  const visaoGeral = [
    { label: c.problem, text: c.problemText },
    { label: c.solution, text: c.solutionText },
    { label: c.impact, text: c.impactText },
  ]

  return (
    <div className="relative flex min-h-screen flex-col">
      <Backdrop />
      <SiteHeader />

      <main id="conteudo" className="flex-1">
        {/* ── Abertura ───────────────────────────────────────── */}
        <header
          className="container-page"
          style={{
            paddingTop: "calc(var(--header-h) + var(--space-10))",
            paddingBottom: "var(--space-10)",
          }}
        >
          <Link href="/#projetos" className="case-voltar">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {c.back}
          </Link>

          <p className="case-tag">{c.tag}</p>

          <h1
            className="gradient-text mt-4 font-bold"
            style={{
              fontSize: "var(--text-section)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {c.title}
          </h1>

          <p
            className="mt-6 max-w-2xl text-fg-muted"
            style={{ fontSize: "var(--text-lead)", lineHeight: 1.6 }}
          >
            {c.subtitle}
          </p>
        </header>

        {/* ── Visão geral ────────────────────────────────────── */}
        <section className="container-page pb-20" data-animate>
          <SectionHead title={c.overviewTitle} />
          <ul className="mt-8 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-3">
            {visaoGeral.map(({ label, text }) => (
              <li key={label} className="case-card">
                <p className="case-rotulo">{label}</p>
                <p
                  className="mt-3 text-fg-muted"
                  style={{ fontSize: "var(--text-card-body)", lineHeight: 1.65 }}
                >
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Contexto ───────────────────────────────────────── */}
        <section className="container-page pb-20" data-animate>
          <div className="case-card grid gap-6 md:grid-cols-[1fr_2fr] md:items-start">
            <SectionHead title={c.contextTitle} />
            <p className="text-fg-muted" style={{ lineHeight: 1.75 }}>
              {c.contextText}
            </p>
          </div>
        </section>

        {/* ── Processo ───────────────────────────────────────── */}
        <section className="container-page pb-20" data-animate>
          <SectionHead title={c.processTitle} subtitle={c.processSubtitle} centered />
          <ul className="mt-10 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.map((step, i) => (
              <IconCard key={step.title} item={step} index={i} empilhado />
            ))}
          </ul>
        </section>

        {/* ── Decisões e trade-offs ──────────────────────────── */}
        <section className="container-page pb-20" data-animate>
          <SectionHead title={c.insightsTitle} subtitle={c.insightsSubtitle} centered />
          <ul className="mt-10 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2">
            {c.insights.map((insight) => (
              <IconCard key={insight.title} item={insight} />
            ))}
          </ul>
        </section>

        {/* ── Resultados ─────────────────────────────────────── */}
        <section className="container-page pb-20" data-animate>
          <div className="case-card case-resultados">
            <SectionHead title={c.metricsTitle} subtitle={c.metricsSubtitle} centered />
            <ul className="mt-10 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-3">
              {c.metrics.map((m) => (
                <li key={m.label} className="text-center">
                  <p
                    className="gradient-text font-bold"
                    style={{ fontSize: "var(--text-section)", lineHeight: 1.1 }}
                  >
                    {m.value}
                  </p>
                  <p
                    className="mx-auto mt-3 max-w-[28ch] text-fg-muted"
                    style={{ fontSize: "var(--text-card-body)", lineHeight: 1.55 }}
                  >
                    {m.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Saídas ─────────────────────────────────────────── */}
        <section
          className="container-page flex flex-col items-center gap-6 pb-24"
          data-animate
        >
          {c.ctaHref && c.ctaLabel && (
            <a
              href={c.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              {c.ctaLabel}
              <ArrowUpRight className="h-5 w-5" aria-hidden />
              <span className="sr-only">{c.newTabLabel}</span>
            </a>
          )}
          <Link href="/#projetos" className="case-voltar">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {c.back}
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
