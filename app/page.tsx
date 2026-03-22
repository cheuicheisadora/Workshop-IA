import { projects } from "@/data/projects"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ProjectCard } from "@/components/portfolio/project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, GitBranch, BarChart2, Users, Lightbulb, ChevronDown, ArrowUpRight } from "lucide-react"
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
            >
              <a href="#contato">Entrar em contato</a>
            </Button>
          </div>
        </div>

        <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <ChevronDown className="h-5 w-5" style={{ color: "var(--primary)" }} />
        </div>
      </section>

      {/* ── Sobre ─────────────────────────────────────────────────── */}
      <section id="sobre" className="py-32 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center" data-animate>
            <span className="section-accent-bar" />
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl tracking-tight">
              Sobre mim
            </h2>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1fr_300px] items-start">
            {/* Bio */}
            <div data-animate data-delay="1" className="space-y-6 text-base leading-[1.85] text-muted-foreground">
              <p>
                Formada em UX/UI pela EBAC, atualmente atuo como estagiária de UX/UI na SAP,
                trabalhando em soluções que exigem clareza, consistência e visão de escala. A
                formação construiu a base; o mercado está refinando o processo.
              </p>
              <p>
                No Feed Me App e no redesign do app do Itaú, conduzi cada etapa do projeto: mapeei
                contextos, defini problemas com clareza, prototipei fluxos e testei com usuários
                reais. São projetos que refletem como penso sobre design — de forma sistêmica, não
                como telas isoladas. A experiência com branding de eventos também fortaleceu minha
                sensibilidade para narrativa visual e consistência de identidade.
              </p>
              <p>
                Tenho domínio avançado de Figma e uso{" "}
                <strong className="font-semibold text-foreground">Claude Code</strong> para
                prototipar e construir interfaces diretamente em código. O portfólio que você está
                vendo foi inteiramente criado por mim com essa abordagem — o que diz bastante sobre
                como enxergo design: não como uma camada visual, mas como parte de um sistema que
                precisa funcionar de verdade.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  style={{ background: "var(--primary-deep)", color: "#fff" }}
                  className="hover:opacity-90 transition-opacity"
                >
                  <a href="mailto:cheuicheisadora@gmail.com">Vamos conversar</a>
                </Button>
              </div>
            </div>

            {/* Skills */}
            <div data-animate data-delay="2">
              <p
                className="mb-4 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--primary-deep)" }}
              >
                Competências
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
      <section className="bg-muted/40 py-32 px-6">
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

      {/* ── Projects — Bento Grid ──────────────────────────────────── */}
      <section id="projetos" className="py-32 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center" data-animate>
            <span className="section-accent-bar" />
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Projetos</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Cases reais com processo, desafios e resultados.
            </p>
          </div>

          {projects.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                    Todos os projetos com processo completo documentado.
                  </p>
                </div>
                <a
                  href="https://www.behance.net/isadoracheuiche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: "var(--primary-deep)" }}
                >
                  Ver perfil completo <ArrowUpRight className="h-4 w-4" />
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
        className="py-32 px-6"
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%)",
        }}
      >
        <div className="mx-auto max-w-2xl text-center" data-animate>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Vamos conversar?</h2>
          <p className="mb-8 text-foreground/80 max-w-lg mx-auto">
            Estou disponível para projetos freelance, oportunidades full-time e colaborações criativas.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 shadow-lg"
          >
            <a href="mailto:cheuicheisadora@gmail.com">Enviar mensagem</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
