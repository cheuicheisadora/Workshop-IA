import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { z } from "zod"

const updateSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  role: z.string().optional(),
  tools: z.array(z.string()).optional(),
  problem: z.string().optional(),
  solution: z.string().optional(),
  impact: z.string().optional(),
  images: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  order: z.number().optional(),
  published: z.boolean().optional(),
})

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const project = await db.project.findUnique({
    where: { id },
    include: { caseStudy: true },
  })
  if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json(project)
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params
  const body = await req.json()
  const parsed = updateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const project = await db.project.update({
    where: { id },
    data: parsed.data,
    include: { caseStudy: true },
  })
  return NextResponse.json(project)
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params
  await db.project.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
