import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { z } from "zod"

const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  role: z.string().min(1),
  tools: z.array(z.string()),
  problem: z.string().min(1),
  solution: z.string().min(1),
  impact: z.string().min(1),
  images: z.array(z.string()),
  slug: z.string().min(1),
  featured: z.boolean().optional(),
  order: z.number().optional(),
  published: z.boolean().optional(),
})

export async function GET() {
  const projects = await db.project.findMany({
    where: { published: true },
    orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
    include: { caseStudy: true },
  })
  return NextResponse.json(projects)
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json()
  const parsed = projectSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const project = await db.project.create({ data: parsed.data })
  return NextResponse.json(project, { status: 201 })
}
