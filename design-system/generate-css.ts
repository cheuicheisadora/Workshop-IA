import { readFileSync, writeFileSync } from "fs"
import { join } from "path"
import { tokens } from "./tokens"
import { tokenKeyToCssVar, toKebab } from "./utils"

const GLOBALS_PATH = join(__dirname, "..", "app", "globals.css")
const START_MARKER = "/* TOKENS:START */"
const END_MARKER = "/* TOKENS:END */"

function generateRootBlock(): string {
  const lines: string[] = []

  lines.push(`  /* Cores */`)
  for (const [key, value] of Object.entries(tokens.colors)) {
    lines.push(`  ${tokenKeyToCssVar(key)}: ${value};`)
  }

  lines.push(``)
  lines.push(`  /* Raios */`)
  for (const [key, value] of Object.entries(tokens.radius)) {
    lines.push(`  --radius-${toKebab(key)}: ${value};`)
  }

  lines.push(``)
  lines.push(`  /* Espaçamento — malha de 8 */`)
  for (const [key, value] of Object.entries(tokens.spacing)) {
    lines.push(`  --space-${key}: ${value};`)
  }

  lines.push(``)
  lines.push(`  /* Tipografia */`)
  lines.push(`  --font-sans: ${tokens.typography.fontSans};`)
  for (const [key, value] of Object.entries(tokens.typography)) {
    if (key !== "fontSans") {
      lines.push(`  --text-${toKebab(key)}: ${value};`)
    }
  }

  lines.push(``)
  lines.push(`  /* Layout */`)
  for (const [key, value] of Object.entries(tokens.layout)) {
    lines.push(`  ${tokenKeyToCssVar(key)}: ${value};`)
  }

  return `:root {\n${lines.join("\n")}\n}`
}

function run() {
  const css = readFileSync(GLOBALS_PATH, "utf-8")
  const generated = generateRootBlock()

  const isCheck = process.argv.includes("--check")

  if (isCheck) {
    if (!css.includes(START_MARKER) || !css.includes(END_MARKER)) {
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
