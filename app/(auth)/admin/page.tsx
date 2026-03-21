import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

export default async function AdminPage() {
  const session = await auth()
  if (!session?.user) redirect("/login")

  const projects = await db.project.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-foreground">Admin</h1>
            <p className="text-sm text-muted-foreground">{session.user.email}</p>
          </div>
          <Button asChild size="sm">
            <Link href="/admin/projetos/novo">
              <Plus className="mr-1 h-4 w-4" /> Novo projeto
            </Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="mb-6 text-xl font-semibold text-foreground">
          Projetos ({projects.length})
        </h2>

        {projects.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-16 text-center">
            <p className="text-muted-foreground">Nenhum projeto criado ainda.</p>
            <Button asChild className="mt-4" size="sm">
              <Link href="/admin/projetos/novo">Criar primeiro projeto</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base">{project.title}</CardTitle>
                    <Badge variant={project.published ? "default" : "muted"}>
                      {project.published ? "Publicado" : "Rascunho"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/projetos/${project.slug}`} target="_blank">
                        Ver
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
