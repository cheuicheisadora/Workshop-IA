"use client"

import { projects } from "@/data/projects"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ProjectCard } from "@/components/portfolio/project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Layers, BarChart2, GitBranch, Lightbulb, Code2, ChevronDown, ArrowUpRight, Sparkles } from "lucide-react"
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

const formacao = [
  {
    id: "f1",
    namePt: "Bacharelado em Administração",
    nameEn: "Bachelor's in Business Administration",
    institutionPt: "Universidade Federal do Rio Grande do Sul (UFRGS)",
    institutionEn: "Federal University of Rio Grande do Sul (UFRGS)",
    periodPt: "Out 2022 – Dez 2026",
    periodEn: "Oct 2022 – Dec 2026",
    tags: ["Marketing", "Gestão de Projetos"],
  },
  {
    id: "f2",
    namePt: "Curso UX/UI Design",
    nameEn: "UX/UI Design Program",
    institutionPt: "EBAC",
    institutionEn: "EBAC",
    periodPt: "Jan 2025 – Mar 2026 · Concluído",
    periodEn: "Jan 2025 – Mar 2026 · Completed",
    tags: ["UX Design", "Pesquisa de Usuário", "UI Design", "Prototipagem"],
  },
]

const certificates = [
  {
    id: 1,
    namePt: "Aplicações Práticas de Acessibilidade no Design",
    nameEn: "Practical Applications of Accessibility in Design",
    institution: "Tudo é acessibilidade",
    datePt: "Nov 2025",
    dateEn: "Nov 2025",
    tags: ["Accessible Design"],
    highlighted: false,
  },
  {
    id: 2,
    namePt: "Design Eye Opener",
    nameEn: "Design Eye Opener",
    institution: "SAP",
    datePt: "Mar 2025",
    dateEn: "Mar 2025",
    tags: ["UX Design"],
    highlighted: true,
  },
  {
    id: 3,
    namePt: "Figma Aplicado",
    nameEn: "Applied Figma",
    institution: "EBAC",
    datePt: "Mai 2025",
    dateEn: "May 2025",
    tags: ["Figma", "UX Design", "Branding"],
    highlighted: true,
  },
  {
    id: 4,
    namePt: "Figma | Treinamento em Figma e Design",
    nameEn: "Figma | Training in Figma and Design",
    institution: "Figma Descomplicado",
    datePt: "Out 2024",
    dateEn: "Oct 2024",
    tags: ["Design Gráfico"],
    highlighted: false,
  },
  {
    id: 5,
    namePt: "From Likes to Leads: Interact with Customers Online",
    nameEn: "From Likes to Leads: Interact with Customers Online",
    institution: "Google",
    datePt: "Mai 2023",
    dateEn: "May 2023",
    tags: ["Engajamento de Clientes"],
    highlighted: true,
  },
  {
    id: 6,
    namePt: "Attract and Engage Customers with Digital Marketing",
    nameEn: "Attract and Engage Customers with Digital Marketing",
    institution: "Google",
    datePt: "Mai 2023",
    dateEn: "May 2023",
    tags: ["Marketing Digital"],
    highlighted: true,
  },
  {
    id: 7,
    namePt: "Foundations of Digital Marketing and E-Commerce",
    nameEn: "Foundations of Digital Marketing and E-Commerce",
    institution: "Google",
    datePt: "Abr 2023",
    dateEn: "Apr 2023",
    tags: ["Marketing Digital", "E-commerce"],
    highlighted: true,
  },
]

const tagTranslations: Record<string, string> = {
  "Design Gráfico": "Graphic Design",
  "Engajamento de Clientes": "Customer Engagement",
  "Marketing Digital": "Digital Marketing",
  "Gestão de Projetos": "Project Management",
  "Pesquisa de Usuário": "User Research",
  "Prototipagem": "Prototyping",
}

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
    <div className="flex min-h-screen flex-col pt-16">
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
                    Atuo como <strong className="font-semibold text-foreground">UX/UI Designer na SAP</strong>, criando soluções digitais com foco em clareza, consistência e escala. Formada em UX/UI pela EBAC, aplico um processo estruturado desde a pesquisa até a entrega, sempre conectando decisões de design ao impacto real no produto.
                  </p>
                  <p>
                    Conduzi projetos de ponta a ponta como o Feed Me App e o redesign do app do Itaú, além de projetos de branding para eventos. Essa diversidade de contextos fortaleceu minha visão sobre como design, narrativa e experiência se integram.
                  </p>
                  <p>
                    Hoje, exploro IA como parte do meu processo. Uso <strong className="font-semibold text-foreground">Claude Code</strong> para construir e iterar interfaces diretamente em código. Este portfólio foi desenvolvido inteiramente com essa abordagem, o que me posiciona na interseção entre design e tecnologia.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I work as a <strong className="font-semibold text-foreground">UX/UI Designer at SAP</strong>, creating digital solutions focused on clarity, consistency, and scale. Trained in UX/UI at EBAC, I apply a structured process from research to delivery, always connecting design decisions to real product impact.
                  </p>
                  <p>
                    I've led end-to-end projects like the Feed Me App and the Itaú app redesign, as well as event branding work. That range of contexts sharpened my understanding of how design, narrative, and experience fit together.
                  </p>
                  <p>
                    Today, I bring AI into my workflow. I use <strong className="font-semibold text-foreground">Claude Code</strong> to build and iterate interfaces directly in code. This portfolio was built entirely with that approach, placing me at the intersection of design and technology.
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
                    {i === 2 ? (
                      <Sparkles className="h-5 w-5" style={{ color: "var(--primary-deep)" }} />
                    ) : (
                      <Icon className="h-5 w-5" style={{ color: "var(--primary-deep)" }} />
                    )}
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

      {/* ── Formação e Certificados ───────────────────────────────── */}
      <section id="certificados" className="py-20 px-6 bg-muted/30">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center" data-animate>
            <span className="section-accent-bar" />
            <h2 className="font-bold text-foreground">{t("cert_heading")}</h2>
          </div>

          <ul className="cert-list">
            {/* Formação Acadêmica */}
            {formacao.map((item, i) => (
              <li
                key={item.id}
                className="cert-item formacao"
                data-animate
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="cert-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="18"
                    height="18"
                    aria-hidden
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="cert-nome">
                    {lang === "en" ? item.nameEn : item.namePt}
                  </span>
                  <div className="cert-meta">
                    <span className="cert-inst destaque">
                      {lang === "en" ? item.institutionEn : item.institutionPt}
                    </span>
                    <span className="cert-sep">·</span>
                    <span className="cert-data">
                      {lang === "en" ? item.periodEn : item.periodPt}
                    </span>
                  </div>
                  <div className="cert-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="cert-tag">
                        {lang === "en" ? (tagTranslations[tag] ?? tag) : tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}

            {/* Separador */}
            <li className="cert-separator" aria-hidden>
              <span>{lang === "en" ? "Certificates" : "Certificados"}</span>
            </li>

            {/* Certificados */}
            {certificates.map((cert, i) => (
              <li
                key={cert.id}
                className="cert-item"
                data-animate
                style={{ transitionDelay: `${(i + formacao.length) * 0.08}s` }}
              >
                <div className="cert-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="18"
                    height="18"
                    aria-hidden
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="cert-nome">
                    {lang === "en" ? cert.nameEn : cert.namePt}
                  </span>
                  <div className="cert-meta">
                    <span className={`cert-inst${cert.highlighted ? " destaque" : ""}`}>
                      {cert.institution}
                    </span>
                    <span className="cert-sep">·</span>
                    <span className="cert-data">
                      {lang === "en" ? cert.dateEn : cert.datePt}
                    </span>
                  </div>
                  <div className="cert-tags">
                    {cert.tags.map((tag) => (
                      <span key={tag} className="cert-tag">
                        {lang === "en" ? (tagTranslations[tag] ?? tag) : tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
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
