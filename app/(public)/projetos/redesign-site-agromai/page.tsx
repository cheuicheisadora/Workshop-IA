"use client"

import { Map, PenTool, Sparkles, Scale, BarChart2, AlertCircle } from "lucide-react"
import { CaseStudy } from "@/components/sections/case-study"
import { useLanguage } from "@/context/language"

const SITE_URL = "https://agromai.com.br/"

const content = {
  pt: {
    back: "Voltar",
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
    back: "Back",
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
  const { lang, t } = useLanguage()
  const c = content[lang]

  return (
    <CaseStudy
      c={{
        ...c,
        ctaLabel: c.siteCta,
        ctaHref: SITE_URL,
        newTabLabel: t("home_new_tab"),
      }}
    />
  )
}
