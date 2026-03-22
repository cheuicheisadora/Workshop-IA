"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  project: Project
}

function ProjectCover({ project }: { project: Project }) {
  const [imgFailed, setImgFailed] = useState(false)
  const showImage = project.images[0] && !imgFailed

  return (
    <div className="relative h-52 w-full overflow-hidden">
      {showImage ? (
        <img
          src={project.images[0]}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div
          className="h-full w-full transition-transform duration-500 group-hover:scale-105 flex items-end p-4"
          style={{ background: project.placeholderGradient ?? "var(--primary)" }}
        >
          <span className="text-sm font-semibold text-white/80 drop-shadow">
            {project.title}
          </span>
        </div>
      )}

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "rgba(0,0,0,0.36)" }}
      >
        <span
          className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white"
          style={{ background: project.accentColor ?? "var(--primary)" }}
        >
          {project.externalUrl ? "Ver no Behance" : "Ver Projeto"}
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  const accent = project.accentColor ?? "var(--primary)"

  const content = (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
      <ProjectCover project={project} />
      <CardContent className="p-5">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {project.tools.slice(0, 3).map((tool) => (
            <Badge
              key={tool}
              style={{
                background: `${accent}30`,
                color: "var(--foreground)",
                border: "none",
              }}
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
      {/* Bottom accent line on hover */}
      <div
        className="h-0.5 w-0 transition-all duration-500 group-hover:w-full"
        style={{ background: accent }}
      />
    </Card>
  )

  if (project.externalUrl) {
    return (
      <a
        href={project.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={`/projetos/${project.slug}`} className="group block">
      {content}
    </Link>
  )
}
