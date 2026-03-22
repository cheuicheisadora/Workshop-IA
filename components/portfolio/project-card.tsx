import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const accent = project.accentColor ?? "var(--primary)"
  const isExternal = Boolean(project.externalUrl)

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    isExternal ? (
      <a
        href={project.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {children}
      </a>
    ) : (
      // Dynamic import to avoid circular dep; rendered as <a> via next/link
      <a href={`/projetos/${project.slug}`} className="group block">
        {children}
      </a>
    )

  return (
    <Wrapper>
      <Card
        className="overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
        style={{
          ["--card-accent" as string]: accent,
        }}
      >
        {/* Cover image or gradient placeholder */}
        <div className="relative h-52 w-full overflow-hidden bg-muted">
          {project.images[0] ? (
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : project.placeholderGradient ? (
            <div
              className="h-full w-full transition-transform duration-500 group-hover:scale-105"
              style={{ background: project.placeholderGradient }}
            />
          ) : null}

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: "rgba(0,0,0,0.38)" }}>
            <span
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white"
              style={{ background: accent }}
            >
              {isExternal ? "Ver no Behance" : "Ver Projeto"} <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>

        <CardContent className="p-5">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {project.tools.slice(0, 3).map((tool) => (
              <Badge
                key={tool}
                className="transition-colors duration-200"
                style={{ background: `${accent}33`, color: "var(--foreground)", border: "none" }}
              >
                {tool}
              </Badge>
            ))}
          </div>
          <h3 className="mb-1 text-lg font-semibold text-foreground leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
          <p className="mt-3 text-xs font-medium" style={{ color: accent }}>
            {project.role}
          </p>
        </CardContent>

        {/* Bottom accent line that appears on hover */}
        <div
          className="h-0.5 w-0 transition-all duration-500 group-hover:w-full"
          style={{ background: accent }}
        />
      </Card>
    </Wrapper>
  )
}
