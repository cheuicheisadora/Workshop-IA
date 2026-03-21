import { readFileSync, writeFileSync } from "fs"
import { join } from "path"
import { tokens } from "./tokens"
import { tokenKeyToCssVar, sidebarKeyToCssVar } from "./utils"

const GLOBALS_PATH = join(__dirname, "..", "app", "globals.css")
const START_MARKER = "/* TOKENS:START */"
const END_MARKER = "/* TOKENS:END */"

function generateRootBlock(): string {
  const lines: string[] = []

  lines.push(`  /* Colors */`)
  for (const [key, value] of Object.entries(tokens.colors)) {
    lines.push(`  ${tokenKeyToCssVar(key)}: ${value};`)
  }

  lines.push(``)
  lines.push(`  /* Sidebar */`)
  for (const [key, value] of Object.entries(tokens.sidebar)) {
    lines.push(`  ${sidebarKeyToCssVar(key)}: ${value};`)
  }

  lines.push(``)
  lines.push(`  /* Radius */`)
  for (const [key, value] of Object.entries(tokens.radius)) {
    lines.push(`  --radius-${key}: ${value};`)
  }

  lines.push(``)
  lines.push(`  /* Spacing */`)
  for (const [key, value] of Object.entries(tokens.spacing)) {
    lines.push(`  --spacing-${key}: ${value};`)
  }

  lines.push(``)
  lines.push(`  /* Typography */`)
  lines.push(`  --font-sans: ${tokens.typography.fontSans};`)
  for (const [key, value] of Object.entries(tokens.typography)) {
    if (key !== "fontSans") {
      lines.push(`  --text-${key}: ${value};`)
    }
  }

  return `:root {\n${lines.join("\n")}\n}`
}

function run() {
  const css = readFileSync(GLOBALS_PATH, "utf-8")
  const generated = generateRootBlock()

  const isCheck = process.argv.includes("--check")

  if (isCheck) {
    if (
      !css.includes(START_MARKER) ||
      !css.includes(END_MARKER)
    ) {
      console.error("❌ globals.css is missing TOKENS markers. Run: npm run tokens")
      process.exit(1)
    }
    const existing = css.split(START_MARKER)[1]?.split(END_MARKER)[0]?.trim()
    if (existing !== generated) {
      console.error("❌ globals.css tokens are out of sync. Run: npm run tokens")
      process.exit(1)
    }
    console.log("✅ globals.css tokens are in sync")
    return
  }

  let newCss: string
  if (css.includes(START_MARKER) && css.includes(END_MARKER)) {
    const before = css.split(START_MARKER)[0]
    const after = css.split(END_MARKER)[1]
    newCss = `${before}${START_MARKER}\n${generated}\n${END_MARKER}${after}`
  } else {
    newCss = `${START_MARKER}\n${generated}\n${END_MARKER}\n\n${css}`
  }

  writeFileSync(GLOBALS_PATH, newCss)
  console.log("✅ globals.css updated with design tokens")
}

run()
