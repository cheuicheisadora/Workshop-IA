"use client"

import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Map, PenTool, Sparkles, Scale, BarChart2, AlertCircle } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { useLanguage } from "@/context/language"

const ACCENT = "#16a34a"
const SITE_URL = "https://agromai.com.br/"

const content = {
  pt: {
    back: "Voltar aos projetos",
    tag: "UX/UI Designer · Agromai · Projeto Real",
    title: "Redesign Site Agromai",
    subtitle: "Redesign completo do site institucional — do benchmark ao handoff gerado com IA. Interface minimalista que elevou a clareza da comunicação de produto.",
    overviewTitle: "Visão geral",
    problem: "Problema",
    problemText: "O site estava desatualizado, com visual antigo que não refletia mais o posicionamento atual da marca nem a maturidade do produto.",
    solution: "Solução",
    solutionText: "Interface minimalista com hierarquia visual clara, desenhada no Figma e com handoff gerado com IA — entregue diretamente ao time de desenvolvimento.",
    impact: "Impacto",
    impactText: "~10% de aumento no tráfego e zero retrabalho de handoff, com todo o código gerado a partir do design no Figma.",
    processTitle: "O processo",
    processSubtitle: "Do benchmark ao handoff, inteiramente conduzido por uma designer.",
    steps: [
      { icon: Map, title: "Benchmark", desc: "Pesquisa de referências em sites institucionais do setor agtech para mapear padrões visuais e estruturais com boa performance." },
      { icon: Scale, title: "Decisão de Direção", desc: "Testei duas direções: layout denso (mais informação acima da dobra) e layout minimalista. O benchmark apontou o minimalismo como melhor performance." },
      { icon: PenTool, title: "Design no Figma", desc: "Interface completa no Figma — arquitetura de informação, hierarquia visual, interações e microinterações para o site institucional." },
      { icon: Sparkles, title: "Handoff com IA", desc: "Usei o Claude para gerar o código de implementação a partir do design, entregando o projeto pronto para o time de desenvolvimento subir direto." },
    ],
    insightsTitle: "Decisões & trade-offs",
    insightsSubtitle: "O que guiou as escolhas de design ao longo do projeto.",
    insights: [
      { icon: Scale, title: "Minimalismo vs. densidade", desc: "Optei pela direção minimalista mesmo sabendo que um layout mais denso permitiria comunicar mais conteúdo acima da dobra. O benchmark mostrou que clareza e hierarquia visual geram mais resultado." },
      { icon: Sparkles, title: "IA no handoff", desc: "Usar o Claude para gerar o código de implementação a partir do design eliminou o gap entre design e desenvolvimento — zero retrabalho, entrega direta." },
      { icon: AlertCircle, title: "Analytics sem instrumentação", desc: "O aumento de ~10% no tráfego foi medido informalmente. Faria diferente: instrumentar analytics desde o início para medir o impacto com precisão." },
      { icon: BarChart2, title: "Benchmark antes de descartar", desc: "A direção densa foi descartada com base no benchmark — mas rodaria testes de usabilidade formais para validar a hipótese antes de eliminar a alternativa." },
    ],
    metricsTitle: "Resultados",
    metricsSubtitle: "Impacto do redesign no site institucional.",
    metrics: [
      { value: "~10%", label: "Aumento no tráfego do site após o lançamento do novo design" },
      { value: "0", label: "Retrabalho de handoff — código gerado direto do Figma com IA" },
      { value: "1", label: "Designer conduzindo todo o processo: benchmark, design e entrega" },
    ],
    contextTitle: "Contexto",
    contextText: "Como UX/UI Designer na Agromai, liderei o redesign completo do site institucional da empresa. O site estava desatualizado — com um visual antigo que não refletia mais o posicionamento da marca nem a maturidade do produto que a Agromai entrega ao mercado agtech. Além do design, o projeto foi uma oportunidade de integrar IA ao fluxo de trabalho de forma prática: o código de implementação foi gerado com o Claude a partir do design no Figma, eliminando o retrabalho de handoff e acelerando a entrega.",
    siteCta: "Ver site no ar",
  },
  en: {
    back: "Back to projects",
    tag: "UX/UI Designer · Agromai · Real Project",
    title: "Agromai Website Redesign",
    subtitle: "Full institutional website redesign — from benchmark to AI-generated handoff. A minimalist interface that elevated product communication clarity.",
    overviewTitle: "Overview",
    problem: "Problem",
    problemText: "The website was outdated, with an old visual style that no longer reflected the brand's current positioning or the product's maturity.",
    solution: "Solution",
    solutionText: "Minimalist interface with clear visual hierarchy, designed in Figma and with AI-generated handoff — delivered directly to the development team.",
    impact: "Impact",
    impactText: "~10% traffic increase and zero handoff rework, with all code generated directly from the Figma design.",
    processTitle: "The process",
    processSubtitle: "From benchmark to handoff, entirely led by one designer.",
    steps: [
      { icon: Map, title: "Benchmark", desc: "Research into agtech institutional website references to map visual and structural patterns with good performance." },
      { icon: Scale, title: "Direction Decision", desc: "Explored two directions: a dense layout (more above-the-fold content) and a minimalist one. Benchmarking consistently pointed to minimalism as the better performer." },
      { icon: PenTool, title: "Design in Figma", desc: "Full interface in Figma — information architecture, visual hierarchy, interactions, and microinteractions for the institutional website." },
      { icon: Sparkles, title: "AI-Powered Handoff", desc: "Used Claude to generate the implementation code from the design, delivering the project ready for the dev team to deploy directly — no rework." },
    ],
    insightsTitle: "Decisions & trade-offs",
    insightsSubtitle: "What drove design choices throughout the project.",
    insights: [
      { icon: Scale, title: "Minimalism vs. density", desc: "I chose the minimalist direction even knowing a denser layout would communicate more content above the fold. Benchmarking showed that clarity and visual hierarchy drive better results." },
      { icon: Sparkles, title: "AI in the handoff", desc: "Using Claude to generate the implementation code from the design eliminated the gap between design and development — zero rework, direct delivery." },
      { icon: AlertCircle, title: "Analytics without instrumentation", desc: "The ~10% traffic increase was measured informally. I'd do it differently: instrument analytics from the start to measure impact with precision." },
      { icon: BarChart2, title: "Benchmark before discarding", desc: "The dense direction was discarded based on the benchmark — but I'd run formal usability tests to validate the hypothesis before eliminating the alternative." },
    ],
    metricsTitle: "Results",
    metricsSubtitle: "Redesign impact on the institutional website.",
    metrics: [
      { value: "~10%", label: "Traffic increase after launching the new design" },
      { value: "0", label: "Handoff rework — code generated directly from Figma with AI" },
      { value: "1", label: "Designer leading the full process: benchmark, design, and delivery" },
    ],
    contextTitle: "Context",
    contextText: "As UX/UI Designer at Agromai, I led the complete redesign of the company's institutional website. The site was outdated — with an old visual style that no longer reflected the brand's positioning or the maturity of the product Agromai delivers to the agtech market. Beyond the design itself, the project was an opportunity to integrate AI into the workflow in a practical way: the implementation code was generated with Claude from the Figma design, eliminating handoff rework and accelerating delivery.",
    siteCta: "Visit live site",
  },
}

export default function AgromaISiteProjectPage() {
  const { lang } = useLanguage()
  const c = content[lang]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section
        className="relative flex min-h-[480px] flex-col justify-end overflow-hidden px-6 pb-16 pt-32"
        style={{ background: "linear-gradient(135deg, #14532d 0%, #166534 40%, #15803d 70%, #22c55e 100%)" }}
      >
        {[
          { top: "12%", left: "20%", size: 64, opacity: 0.18 },
          { top: "8%", left: "38%", size: 44, opacity: 0.13 },
          { top: "20%", left: "55%", size: 72, opacity: 0.15 },
          { top: "5%", left: "72%", size: 52, opacity: 0.12 },
          { top: "30%", left: "80%", size: 40, opacity: 0.17 },
          { top: "15%", left: "88%", size: 60, opacity: 0.1 },
          { top: "35%", left: "63%", size: 36, opacity: 0.14 },
        ].map((sq, i) => (
          <div key={i} aria-hidden className="absolute rounded-lg border-2 border-white"
            style={{ top: sq.top, left: sq.left, width: sq.size, height: sq.size, opacity: sq.opacity }} />
        ))}
        <div className="relative mx-auto w-full max-w-5xl">
          <Link href="/#projetos" className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> {c.back}
          </Link>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">{c.tag}</p>
          <h1 className="font-bold text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>{c.title}</h1>
          <p className="mt-4 max-w-xl text-base text-white/85 leading-relaxed">{c.subtitle}</p>
        </div>
      </section>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 space-y-20">
        <section>
          <h2 className="mb-8 text-xl font-bold text-foreground">{c.overviewTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[{ label: c.problem, text: c.problemText }, { label: c.solution, text: c.solutionText }, { label: c.impact, text: c.impactText }].map(({ label, text }) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-6" style={{ borderTop: `3px solid ${ACCENT}` }}>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>{label}</p>
                <p className="text-sm text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="grid gap-8 md:grid-cols-[1fr_2fr] items-start">
          <div>
            <span className="section-accent-bar" style={{ background: ACCENT }} />
            <h2 className="mt-3 text-2xl font-bold text-foreground">{c.contextTitle}</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">{c.contextText}</p>
        </section>
        <section>
          <div className="mb-10 text-center">
            <span className="section-accent-bar" style={{ background: ACCENT }} />
            <h2 className="mt-3 text-2xl font-bold text-foreground">{c.processTitle}</h2>
            <p className="mt-2 text-muted-foreground">{c.processSubtitle}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${ACCENT}20` }}>
                    <Icon className="h-5 w-5" style={{ color: ACCENT }} />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mb-2 font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </section>
        <section>
          <div className="mb-10 text-center">
            <span className="section-accent-bar" style={{ background: ACCENT }} />
            <h2 className="mt-3 text-2xl font-bold text-foreground">{c.insightsTitle}</h2>
            <p className="mt-2 text-muted-foreground">{c.insightsSubtitle}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {c.insights.map((insight, i) => {
              const Icon = insight.icon
              return (
                <div key={i} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: `${ACCENT}20` }}>
                    <Icon className="h-4 w-4" style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{insight.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
        <section className="relative overflow-hidden rounded-3xl px-8 py-12 text-center"
          style={{ background: `linear-gradient(135deg, #14532d 0%, ${ACCENT} 100%)` }}>
          <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full opacity-10" style={{ background: "#fff" }} />
          <h2 className="mb-2 text-2xl font-bold text-white">{c.metricsTitle}</h2>
          <p className="mb-10 text-white/75">{c.metricsSubtitle}</p>
          <div className="grid gap-8 sm:grid-cols-3">
            {c.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-5xl font-black text-white">{m.value}</p>
                <p className="mt-2 text-sm text-white/80 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center gap-4 text-center pb-4">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: ACCENT }}>
            {c.siteCta} <ArrowUpRight className="h-4 w-4" />
          </a>
        </section>
      </main>
      <Footer />
    </div>
  )
}
