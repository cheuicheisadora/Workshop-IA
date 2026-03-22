import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projetos/${project.slug}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        {project.images[0] && (
          <div className="relative h-52 w-full overflow-hidden bg-muted">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <CardContent className="p-5">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {project.tools.slice(0, 3).map((tool) => (
              <Badge key={tool} variant="default">
                {tool}
              </Badge>
            ))}
          </div>
          <h3 className="mb-1 text-lg font-semibold text-foreground leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
          <p className="mt-3 text-xs text-muted-foreground font-medium">{project.role}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
