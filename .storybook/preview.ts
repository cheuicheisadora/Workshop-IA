import type { Preview } from "@storybook/nextjs"
import "../app/globals.css"
import { tokens } from "../design-system/tokens"

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "background",
      values: [
        { name: "background", value: tokens.colors.background },
        { name: "card", value: tokens.colors.card },
        { name: "primary", value: tokens.colors.primary },
        { name: "dark", value: "#1a1a1a" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
