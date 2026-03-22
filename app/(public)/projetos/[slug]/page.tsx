import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { projects, getProjectBySlug } from "@/data/projects"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const { caseStudy } = project

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
          <Link href="/#projetos">
            <ArrowLeft className="mr-1 h-4 w-4" /> Voltar aos projetos
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool}>{tool}</Badge>
            ))}
          </div>
          <h1 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            {project.title}
          </h1>
          <p className="text-muted-foreground">{project.role}</p>
        </div>

        {/* Cover image */}
        {project.images[0] && (
          <div className="relative mb-12 h-72 w-full overflow-hidden rounded-xl bg-muted sm:h-96">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Overview cards */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          {[
            { label: "Problema", content: project.problem },
            { label: "Solução", content: project.solution },
            { label: "Impacto", content: project.impact },
          ].map(({ label, content }) => (
            <div key={label} className="rounded-xl border border-border bg-card p-5">
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-wide"
                style={{ color: "var(--primary)" }}
              >
                {label}
              </p>
              <p className="text-sm text-foreground leading-relaxed">{content}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-foreground">Sobre o projeto</h2>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        </section>

        {/* Case Study */}
        {caseStudy && (
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Case Study</h2>

            {[
              { label: "Contexto", content: caseStudy.context },
              { label: "Pesquisa", content: caseStudy.research },
              { label: "Insights", content: caseStudy.insights },
              { label: "Resultados", content: caseStudy.results },
            ].map(({ label, content }) => (
              <div key={label}>
                <h3 className="mb-2 font-semibold text-foreground">{label}</h3>
                <p className="text-muted-foreground leading-relaxed">{content}</p>
              </div>
            ))}

            {caseStudy.wireframes.length > 0 && (
              <div>
                <h3 className="mb-4 font-semibold text-foreground">Wireframes</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {caseStudy.wireframes.map((url, i) => (
                    <div key={i} className="relative h-48 overflow-hidden rounded-lg bg-muted">
                      <Image src={url} alt={`Wireframe ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {caseStudy.prototype && (
              <Button asChild>
                <a href={caseStudy.prototype} target="_blank" rel="noopener noreferrer">
                  Ver protótipo <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                </a>
              </Button>
            )}
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
