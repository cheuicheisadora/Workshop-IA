import type { Meta, StoryObj } from "@storybook/react"
import { tokens } from "../../design-system/tokens"

function ColorsGrid() {
  return (
    <div style={{ fontFamily: tokens.typography.fontSans, padding: "24px" }}>
      <h2 style={{ marginBottom: "24px", fontSize: tokens.typography["2xl"], fontWeight: 700 }}>
        Design Tokens — Cores
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "16px" }}>
        {Object.entries(tokens.colors).map(([key, value]) => (
          <div key={key} style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #E5E7EB" }}>
            <div style={{ height: "72px", background: value }} />
            <div style={{ padding: "10px 12px", background: "#fff" }}>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "#2A2A2A", margin: 0 }}>{key}</p>
              <p style={{ fontSize: "11px", color: "#6B7280", margin: "2px 0 0" }}>{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Design Tokens/Colors",
  component: ColorsGrid,
}
export default meta

type Story = StoryObj

export const AllColors: Story = {}
