import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"

const meta: Meta = {
  title: "UI/Card",
  component: Card,
  parameters: { layout: "centered" },
}
export default meta

type Story = StoryObj

export const ProjectCard: Story = {
  render: () => (
    <Card className="w-72">
      <div className="h-36 rounded-t-xl" style={{ background: "var(--primary)" }} />
      <CardHeader>
        <div className="flex gap-1.5 mb-1">
          <Badge>Figma</Badge>
          <Badge variant="accent">UX Research</Badge>
        </div>
        <CardTitle>Redesign do App Mobile</CardTitle>
        <CardDescription>Redesign completo da experiência de onboarding.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">UX/UI Designer · Pesquisadora</p>
      </CardContent>
    </Card>
  ),
}
