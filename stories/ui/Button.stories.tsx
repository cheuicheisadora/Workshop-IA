import type { Meta, StoryObj } from "@storybook/nextjs"
import { Button } from "../../components/ui/button"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "ghost", "accent", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: { children: "Ver projetos", variant: "default" },
}

export const Outline: Story = {
  args: { children: "Entrar em contato", variant: "outline" },
}

export const Accent: Story = {
  args: { children: "Accent", variant: "accent" },
}

export const Large: Story = {
  args: { children: "Enviar mensagem", size: "lg" },
}
