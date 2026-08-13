/** camelCase -> kebab-case, para nomes de custom property. */
export function toKebab(key: string): string {
  return key.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`)
}

export function tokenKeyToCssVar(key: string): string {
  return `--${toKebab(key)}`
}
