"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
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
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="/#sobre"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </Link>
          <Button asChild size="sm" variant="outline">
            <a
              href="mailto:isadora@example.com"
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
