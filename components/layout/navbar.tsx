"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(253, 252, 251, 0.75)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              borderBottom: "1px solid var(--border)",
              boxShadow: "0 2px 16px rgba(168,216,234,0.10)",
            }
          : { background: "transparent" }
      }
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-base font-semibold text-foreground hover:opacity-80 transition-opacity"
        >
          Isadora Cheuiche
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/#projetos"
            className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="/#sobre"
            className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </Link>
          <Button asChild size="sm" variant="outline" style={{ borderColor: "var(--primary)" }}>
            <a
              href="mailto:cheuicheisadora@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contato
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
