import { projects } from "@/data/projects"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ProjectCard } from "@/components/portfolio/project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, GitBranch, BarChart2, Users, Lightbulb } from "lucide-react"
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

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center py-28 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--primary)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--accent)" }}
        />

        <div className="relative max-w-3xl">
          <span
            className="mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-medium"
            style={{ background: "var(--primary)", color: "var(--foreground)" }}
          >
            UX/UI Designer
          </span>
          <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Sou uma UX/UI Designer que transforma problemas complexos em{" "}
            <span style={{ color: "var(--primary)" }}>
              experiências simples e intuitivas.
            </span>
          </h1>
          <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Foco em design centrado no usuário, criando soluções digitais que
            equilibram necessidades do negócio e experiência real das pessoas.
            Experiência em UX, UI e Product Thinking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="#projetos">
                Ver projetos <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:isadora@example.com">Entrar em contato</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="sobre" className="bg-muted/40 py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground">Como eu trabalho</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Cada projeto nasce de uma pergunta real e termina com impacto mensurável.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-sm"
                >
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ background: "var(--primary)" }}
                  >
                    <Icon className="h-5 w-5 text-foreground" />
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

      {/* Projects */}
      <section id="projetos" className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground">Projetos</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Cases reais com processo, desafios e resultados.
            </p>
          </div>

          {projects.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 py-20 text-center">
              <p className="text-muted-foreground">Projetos em breve — fique ligado!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "var(--primary)" }}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Vamos conversar?</h2>
          <p className="mb-8 text-foreground/80">
            Estou disponível para projetos freelance, oportunidades full-time e colaborações criativas.
          </p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
            <a href="mailto:isadora@example.com">Enviar mensagem</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
