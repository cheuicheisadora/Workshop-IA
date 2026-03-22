"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/context/language"

interface ProjectCardProps {
  project: Project
}

function ProjectCover({ project }: { project: Project }) {
  const [imgFailed, setImgFailed] = useState(false)
  const { t } = useLanguage()
  const showImage = project.images[0] && !imgFailed
  const accent = project.accentColor ?? "var(--primary)"

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
        style={{ background: "rgba(0,0,0,0.32)" }}
      >
        <span
          className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg"
          style={{ background: accent }}
        >
          {project.externalUrl ? t("card_view_behance") : t("card_view_project")}
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)
  const { lang } = useLanguage()
  const accent = project.accentColor ?? "var(--primary)"

  const isEn = lang === "en"
  const description = isEn ? (project.description_en ?? project.description) : project.description
  const role = isEn ? (project.role_en ?? project.role) : project.role
  const tools = isEn ? (project.tools_en ?? project.tools) : project.tools

  const content = (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
      <ProjectCover project={project} />
      <CardContent className="p-5">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {tools.slice(0, 3).map((tool) => (
            <Badge
              key={tool}
              style={{
                background: `${accent}28`,
                color: "var(--foreground)",
                border: "none",
              }}
            >
              {tool}
            </Badge>
          ))}
        </div>
        <h3
          className="mb-1 text-lg font-semibold leading-snug transition-colors duration-300"
          style={{ color: hovered ? accent : "var(--foreground)" }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <p className="mt-3 text-xs font-medium" style={{ color: accent }}>
          {role}
        </p>
      </CardContent>
      {/* Bottom accent line — exact project color */}
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
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      href={`/projetos/${project.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {content}
    </Link>
  )
}
