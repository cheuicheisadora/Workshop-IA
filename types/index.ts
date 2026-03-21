import type { Project, CaseStudy } from "@prisma/client"

export type ProjectWithCaseStudy = Project & {
  caseStudy: CaseStudy | null
}
