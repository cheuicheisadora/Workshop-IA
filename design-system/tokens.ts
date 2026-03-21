export type DesignTokens = {
  colors: {
    primary: string
    background: string
    accent: string
    foreground: string
    foregroundMuted: string
    card: string
    cardAlt: string
    border: string
    primaryForeground: string
    accentForeground: string
    ring: string
    destructive: string
  }
  sidebar: {
    background: string
    foreground: string
    primary: string
    primaryForeground: string
    accent: string
    accentForeground: string
    border: string
    ring: string
  }
  radius: {
    sm: string
    md: string
    lg: string
    xl: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    "2xl": string
  }
  typography: {
    fontSans: string
    xs: string
    sm: string
    base: string
    lg: string
    xl: string
    "2xl": string
    "3xl": string
    "4xl": string
    "5xl": string
  }
}

export const tokens: DesignTokens = {
  colors: {
    primary: "#A7C7E7",
    background: "#FDFCFB",
    accent: "#F4B6C2",
    foreground: "#2A2A2A",
    foregroundMuted: "#6B7280",
    card: "#FFFFFF",
    cardAlt: "#FAFAFA",
    border: "#E5E7EB",
    primaryForeground: "#2A2A2A",
    accentForeground: "#2A2A2A",
    ring: "#A7C7E7",
    destructive: "#EF4444",
  },
  sidebar: {
    background: "#FDFCFB",
    foreground: "#2A2A2A",
    primary: "#A7C7E7",
    primaryForeground: "#2A2A2A",
    accent: "#F4B6C2",
    accentForeground: "#2A2A2A",
    border: "#E5E7EB",
    ring: "#A7C7E7",
  },
  radius: {
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },
  typography: {
    fontSans: "Inter, Poppins, system-ui, sans-serif",
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
}

export default tokens
