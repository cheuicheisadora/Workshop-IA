import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Isadora Cheuiche · UX/UI Designer",
  description:
    "Portfólio de Isadora Cheuiche — UX/UI Designer que transforma problemas complexos em experiências simples e intuitivas.",
  openGraph: {
    title: "Isadora Cheuiche · UX/UI Designer",
    description:
      "Portfólio de Isadora Cheuiche — UX/UI Designer especializada em design centrado no usuário.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
