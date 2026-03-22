"use client"

import { projects } from "@/data/projects"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ProjectCard } from "@/components/portfolio/project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Layers, BarChart2, GitBranch, Lightbulb, Code2, ChevronDown, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useLanguage, TranslationKey } from "@/context/language"

const featureIcons = [Search, Layers, BarChart2, GitBranch, Lightbulb, Code2]
const featureKeys: Array<{ titleKey: TranslationKey; descKey: TranslationKey }> = [
  { titleKey: "feature_1_title", descKey: "feature_1_desc" },
  { titleKey: "feature_2_title", descKey: "feature_2_desc" },
  { titleKey: "feature_3_title", descKey: "feature_3_desc" },
  { titleKey: "feature_4_title", descKey: "feature_4_desc" },
  { titleKey: "feature_5_title", descKey: "feature_5_desc" },
  { titleKey: "feature_6_title", descKey: "feature_6_desc" },
]

const skills = [
  "UX Research",
  "UI Design",
  "Branding",
  "Figma",
  "Prototipagem",
  "Design System",
  "Teste de Usabilidade",
  "Claude Code",
  "Case Study",
  "UX Writing",
]

export default function HomePage() {
  const { t, lang } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center py-36 px-6 text-center overflow-hidden min-h-[90vh]">
        <div
          aria-hidden
          className="mesh-orb-1 pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
          style={{ background: "var(--primary)" }}
        />
        <div
          aria-hidden
          className="mesh-orb-2 pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full opacity-45 blur-3xl"
          style={{ background: "var(--accent)" }}
        />
        <div
          aria-hidden
          className="mesh-orb-3 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--primary-mid)" }}
        />

        <div className="relative max-w-3xl">
          <span
            className="hero-reveal mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-medium"
            style={{
              background: "var(--primary-glow)",
              color: "var(--primary-deep)",
              border: "1px solid var(--primary)",
              animationDelay: "0s",
            }}
          >
            {t("hero_tag")}
          </span>

          <h1
            className="hero-reveal mb-5 font-bold text-foreground"
            style={{ animationDelay: "0.15s", fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.02em", lineHeight: 1.08 }}
          >
            {t("hero_title_1")}{" "}
            <span style={{ color: "var(--primary-deep)" }}>
              {t("hero_title_accent")}
            </span>
          </h1>

          <div
            className="hero-reveal mx-auto mb-8 h-1 w-16 rounded-full"
            style={{ background: "var(--primary)", animationDelay: "0.3s" }}
          />

          <p
            className="hero-reveal mb-10 text-base text-muted-foreground max-w-xl mx-auto"
            style={{ animationDelay: "0.4s", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", lineHeight: 1.75 }}
          >
            {t("hero_subtitle")}
          </p>

          <div
            className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{ animationDelay: "0.55s" }}
          >
            <Button
              asChild
              size="lg"
              style={{ background: "var(--primary-deep)", color: "#fff" }}
              className="hover:opacity-90 transition-opacity"
            >
              <a
                href="#projetos"
                onClick={(e) => {
                  e.preventDefault()
                  history.replaceState(null, "", "#projetos")
                  document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("hero_btn_projects")} <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              style={{ borderColor: "var(--primary)" }}
            >
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault()
                  history.replaceState(null, "", "#contato")
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("hero_btn_contact")}
              </a>
            </Button>
          </div>
        </div>

        <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <ChevronDown className="h-5 w-5" style={{ color: "var(--primary)" }} />
        </div>
      </section>

      {/* ── Sobre ─────────────────────────────────────────────────── */}
      <section id="sobre" className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center" data-animate>
            <span className="section-accent-bar" />
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl tracking-tight">
              {t("about_heading")}
            </h2>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1fr_300px] items-start">
            {/* Bio */}
            <div data-animate data-delay="1" className="space-y-6 text-base leading-[1.85] text-muted-foreground">
              {lang === "pt" ? (
                <>
                  <p>
                    Atuo como designer de <strong className="font-semibold text-foreground">UX/UI</strong> na <strong className="font-semibold text-foreground">SAP</strong>, onde trabalho no desenvolvimento de soluções digitais que exigem clareza, consistência e visão de escala. Minha formação pela <strong className="font-semibold text-foreground">EBAC</strong> estruturou um processo que levo para cada projeto: pesquisa com usuários, definição de problemas, prototipagem e entrega em <strong className="font-semibold text-foreground">Figma</strong>.
                  </p>
                  <p>
                    No <strong className="font-semibold text-foreground">Feed Me App</strong> e no <strong className="font-semibold text-foreground">redesign do app do Itaú</strong>, conduzi o processo inteiro, do discovery à prototipagem de alta fidelidade. São projetos que mostram como penso produto: de forma prática, estruturada e sempre conectada ao impacto real no usuário. Também tenho experiência em <strong className="font-semibold text-foreground">branding</strong>, o que fortaleceu minha leitura de narrativa e identidade visual.
                  </p>
                  <p>
                    Uso <strong className="font-semibold text-foreground">Claude Code</strong> para construir e iterar interfaces diretamente em código. Inclusive, este portfólio foi feito inteiramente com essa abordagem, o que me aproxima do contexto técnico e me torna uma designer com visão mais completa do produto.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I work as a <strong className="font-semibold text-foreground">UX/UI designer</strong> at <strong className="font-semibold text-foreground">SAP</strong>, contributing to digital products that demand clarity, consistency, and scalable vision. My training at <strong className="font-semibold text-foreground">EBAC</strong> shaped the process I bring to every project: user research, problem definition, prototyping, and <strong className="font-semibold text-foreground">Figma</strong> delivery.
                  </p>
                  <p>
                    In <strong className="font-semibold text-foreground">Feed Me App</strong> and the <strong className="font-semibold text-foreground">Itaú app redesign</strong>, I led the entire process from discovery to high-fidelity prototyping. These projects show how I think about product design: practical, structured, and always tied to real user impact. I also have experience in <strong className="font-semibold text-foreground">branding</strong>, which sharpened my sense of narrative and visual identity.
                  </p>
                  <p>
                    I use <strong className="font-semibold text-foreground">Claude Code</strong> to build and iterate interfaces directly in code. This portfolio was made entirely with that approach, bringing me closer to the technical side of product work and making me a designer with a more complete view of the product.
                  </p>
                </>
              )}
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  style={{ background: "var(--primary-deep)", color: "#fff" }}
                  className="hover:opacity-90 transition-opacity"
                >
                  <a href="mailto:cheuicheisadora@gmail.com">{t("about_btn")}</a>
                </Button>
              </div>
            </div>

            {/* Skills */}
            <div data-animate data-delay="2">
              <p
                className="mb-4 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--primary-deep)" }}
              >
                {t("skills_heading")}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full px-3 py-1.5 text-sm font-medium"
                    style={{
                      background: "var(--primary-glow)",
                      color: "var(--primary-deep)",
                      border: "1px solid var(--primary)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Como eu trabalho ──────────────────────────────────────── */}
      <section className="bg-muted/40 py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center" data-animate>
            <span className="section-accent-bar" />
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{t("work_heading")}</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              {t("work_subtitle")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {featureKeys.map((feature, i) => {
              const Icon = featureIcons[i]
              return (
                <div
                  key={feature.titleKey}
                  data-animate
                  data-delay={String(i + 1)}
                  className="h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      background: "var(--primary-glow)",
                      border: "1px solid var(--primary)",
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "var(--primary-deep)" }} />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{t(feature.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Projects — Bento Grid ──────────────────────────────────── */}
      <section id="projetos" className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center" data-animate>
            <span className="section-accent-bar" />
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{t("projects_heading")}</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              {t("projects_subtitle")}
            </p>
          </div>

          {projects.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-start">
              {/* Card 1 — Featured (wide) */}
              <div className="md:col-span-2" data-animate data-delay="1">
                <ProjectCard project={projects[0]} />
              </div>

              {/* Card 2 — Side */}
              <div data-animate data-delay="2">
                <ProjectCard project={projects[1]} />
              </div>

              {/* Glass CTA block — col 1 */}
              <div
                data-animate
                data-delay="3"
                className="hidden md:flex flex-col justify-between rounded-xl p-6"
                style={{
                  background: "rgba(168, 216, 234, 0.08)",
                  border: "1px solid rgba(168, 216, 234, 0.3)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: "var(--primary-deep)" }}
                  >
                    Behance
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("behance_cta_text")}
                  </p>
                </div>
                <a
                  href="https://www.behance.net/isadoracheuiche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: "var(--primary-deep)" }}
                >
                  {t("behance_cta_link")} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Card 3 — spans 2 cols */}
              <div className="md:col-span-2" data-animate data-delay="4">
                <ProjectCard project={projects[2]} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA / Contato ─────────────────────────────────────────── */}
      <section
        id="contato"
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%)",
        }}
      >
        <div className="mx-auto max-w-2xl text-center" data-animate>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">{t("cta_heading")}</h2>
          <p className="mb-8 text-foreground/80 max-w-lg mx-auto">
            {t("cta_subtitle")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 shadow-lg"
          >
            <a href="mailto:cheuicheisadora@gmail.com">{t("cta_btn")}</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
