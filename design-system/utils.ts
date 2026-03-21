export function tokenKeyToCssVar(key: string): string {
  return (
    "--" +
    key.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`)
  )
}

export function sidebarKeyToCssVar(key: string): string {
  return (
    "--sidebar-" +
    key.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`)
  )
}
