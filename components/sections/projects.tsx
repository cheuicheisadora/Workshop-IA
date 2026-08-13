import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { projects, type Project } from "@/data/projects"

/**
 * Grade de projetos.
 *
 * Seção isolada e dirigida por dados: o layout vive só neste arquivo e o
 * conteúdo vem de data/projects.ts. Para trocar a grade depois, basta mexer
 * em BENTO_SPAN e no ProjectCard — nada mais na página muda.
 *
 * BENTO_SPAN reproduz a alternância do Figma (estreito | largo, largo |
 * estreito) numa grade de 12 colunas.
 */
const BENTO_SPAN = [
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-7",
  "lg:col-span-5",
]

function ProjectCard({ project }: { project: Project }) {
  const cover = project.images[0]

  const inner = (
    <>
      {/* Capa */}
      <div className="absolute inset-0" aria-hidden={!cover}>
        {cover ? (
          /* fill + sizes: dimensões resolvidas no layout, sem layout shift. */
          <Image
            src={cover}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          /* Placeholder neutro do Figma, até as capas reais chegarem. */
          <div
            className="h-full w-full"
            style={{ background: "var(--surface)" }}
          />
        )}
      </div>

      {/* Scrim: mantém o contraste do texto branco sobre a capa, tanto no
          placeholder quanto numa foto real. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(9,10,36,0) 28%, rgba(9,10,36,0.62) 60%, rgba(9,10,36,0.94) 100%)",
        }}
      />

      {/* Texto */}
      <div
        className="relative mt-auto flex flex-col gap-2"
        style={{ padding: "clamp(20px, 3vw, 40px)" }}
      >
        <h3
          className="font-bold leading-tight"
          style={{ fontSize: "var(--text-card-title)" }}
        >
          {project.title}
        </h3>
        <p
          className="max-w-[52ch] text-fg-muted"
          style={{ fontSize: "var(--text-card-body)", lineHeight: 1.6 }}
        >
          {project.description}
        </p>
        <span
          className="mt-1 inline-flex items-center gap-1.5 font-semibold"
          style={{ color: "#C9AEEE" }}
        >
          Ver case
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </>
  )

  const shell =
    "group relative flex h-full flex-col overflow-hidden no-underline text-fg transition-transform duration-500 hover:-translate-y-1"
  const shellStyle = {
    borderRadius: "var(--radius-card)",
    minHeight: "clamp(260px, 24vw, 340px)",
  }

  // Mesma regra do card antigo: projeto sem página interna abre o link externo.
  if (project.externalUrl && !project.behanceUrl) {
    return (
      <a
        href={project.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={shell}
        style={shellStyle}
      >
        {inner}
        <span className="sr-only">(abre em nova aba)</span>
      </a>
    )
  }

  return (
    <Link href={`/projetos/${project.slug}`} className={shell} style={shellStyle}>
      {inner}
    </Link>
  )
}

export function Projects() {
  return (
    <section id="projetos" className="section anchor-target">
      <div className="container-page">
        <header className="mx-auto mb-12 max-w-3xl text-center" data-animate>
          <h2
            className="font-bold"
            style={{
              fontSize: "var(--text-section)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Projetos
          </h2>
          <p className="mt-6 text-fg-muted" style={{ lineHeight: 1.8 }}>
            Cases reais com processo, desafios e resultados.
          </p>
        </header>

        <ul className="grid list-none grid-cols-1 gap-6 p-0 lg:grid-cols-12">
          {projects.map((project, i) => (
            <li
              key={project.id}
              className={`flex ${BENTO_SPAN[i % BENTO_SPAN.length]}`}
              data-animate
              data-delay={String((i % 4) + 1)}
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
