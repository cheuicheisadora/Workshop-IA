import type { Meta, StoryObj } from "@storybook/react"
import { tokens } from "../../design-system/tokens"

function TypographyScale() {
  const sizes = Object.entries(tokens.typography).filter(([k]) => k !== "fontSans")
  return (
    <div style={{ fontFamily: tokens.typography.fontSans, padding: "24px", background: tokens.colors.background }}>
      <h2 style={{ marginBottom: "24px", fontSize: tokens.typography["2xl"], fontWeight: 700, color: tokens.colors.foreground }}>
        Design Tokens — Tipografia
      </h2>
      <p style={{ marginBottom: "24px", fontSize: tokens.typography.sm, color: tokens.colors.foregroundMuted }}>
        Font: {tokens.typography.fontSans}
      </p>
      {sizes.map(([key, value]) => (
        <div key={key} style={{ marginBottom: "16px", borderBottom: `1px solid ${tokens.colors.border}`, paddingBottom: "16px" }}>
          <p style={{ fontSize: "11px", color: tokens.colors.foregroundMuted, marginBottom: "4px" }}>
            {key} — {value}
          </p>
          <p style={{ fontSize: value, color: tokens.colors.foreground, margin: 0, lineHeight: 1.3 }}>
            Portfólio Isadora Cheuiche
          </p>
        </div>
      ))}
    </div>
  )
}

const meta: Meta = {
  title: "Design Tokens/Typography",
  component: TypographyScale,
}
export default meta

type Story = StoryObj

export const Scale: Story = {}
