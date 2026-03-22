import { projects } from "@/data/projects"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ProjectCard } from "@/components/portfolio/project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, GitBranch, BarChart2, Users, Lightbulb, ChevronDown } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Layers,
    title: "Projetos com abordagem end-to-end",
    description:
      "Do discovery à entrega: pesquisa, síntese, ideação, prototipagem e validação em cada projeto.",
  },
  {
    icon: GitBranch,
    title: "Processo de Design estruturado",
    description:
      "Metodologia clara que une Design Thinking, UX Research e critérios de negócio em cada decisão.",
  },
  {
    icon: BarChart2,
    title: "Foco em impacto e métricas",
    description:
      "Decisões de design guiadas por dados reais — conversão, retenção, satisfação e acessibilidade.",
  },
  {
    icon: Users,
    title: "Colaboração multidisciplinar",
    description:
      "Trabalho integrado com times de produto, engenharia e negócios para alinhar visão e execução.",
  },
  {
    icon: Lightbulb,
    title: "Pensamento estratégico + execução visual",
    description:
      "Visão sistêmica do produto aliada à entrega de interfaces polidas e acessíveis.",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center py-36 px-6 text-center overflow-hidden min-h-[90vh]">
        {/* Animated mesh orbs */}
        <div
          aria-hidden
          className="mesh-orb-1 pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--primary)" }}
        />
        <div
          aria-hidden
          className="mesh-orb-2 pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
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
            UX/UI Designer
          </span>

          <h1
            className="hero-reveal mb-5 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
            style={{ animationDelay: "0.15s" }}
          >
            Sou uma UX/UI Designer que transforma problemas complexos em{" "}
            <span style={{ color: "var(--primary-deep)" }}>
              experiências simples e intuitivas.
            </span>
          </h1>

          {/* Accent underline */}
          <div
            className="hero-reveal mx-auto mb-8 h-1 w-16 rounded-full"
            style={{ background: "var(--primary)", animationDelay: "0.3s" }}
          />

          <p
            className="hero-reveal mb-10 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            Foco em design centrado no usuário, criando soluções digitais que
            equilibram necessidades do negócio e experiência real das pessoas.
            Experiência em UX, UI e Product Thinking.
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
              <Link href="#projetos">
                Ver projetos <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              style={{ borderColor: "var(--primary)" }}
              className="hover:bg-[var(--primary-glow)] transition-colors"
            >
              <a href="mailto:isadora@example.com">Entrar em contato</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <ChevronDown className="h-5 w-5" style={{ color: "var(--primary)" }} />
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────── */}
      <section id="sobre" className="bg-muted/40 py-32 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center" data-animate>
            <span className="section-accent-bar" />
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Como eu trabalho</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Cada projeto nasce de uma pergunta real e termina com impacto mensurável.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  data-animate
                  data-delay={String(i + 1)}
                  className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  style={{ ["--hover-shadow" as string]: "0 8px 30px var(--primary-glow)" }}
                >
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ background: "var(--primary-glow)", border: "1px solid var(--primary)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "var(--primary-deep)" }} />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────────────── */}
      <section id="projetos" className="py-32 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center" data-animate>
            <span className="section-accent-bar" />
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Projetos</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Cases reais com processo, desafios e resultados.
            </p>
          </div>

          {projects.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <div key={project.id} data-animate data-delay={String(i + 1)}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 py-20 text-center">
              <p className="text-muted-foreground">Projetos em breve — fique ligado!</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section
        className="py-32 px-6"
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%)",
        }}
      >
        <div className="mx-auto max-w-2xl text-center" data-animate>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Vamos conversar?</h2>
          <p className="mb-8 text-foreground/80">
            Estou disponível para projetos freelance, oportunidades full-time e colaborações criativas.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 shadow-lg"
          >
            <a href="mailto:isadora@example.com">Enviar mensagem</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
