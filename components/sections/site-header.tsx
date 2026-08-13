"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { navLinks, site } from "@/data/site"

/**
 * Marca do logotipo. O vetor original (Figma 0:188) não pôde ser exportado —
 * as URLs de asset do MCP respondem 403 neste ambiente. Reconstruído com a
 * mesma caixa de 30,75px do arquivo.
 */
function LogoMark() {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="15.5" cy="15.5" r="14.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M15.5 6.5c.9 4.6 4 7.7 8.6 8.6v.8c-4.6.9-7.7 4-8.6 8.6h-.8c-.9-4.6-4-7.7-8.6-8.6v-.8c4.6-.9 7.7-4 8.6-8.6h.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Fecha o menu mobile com Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [menuOpen])

  return (
    <>
      <a
        href="#conteudo"
        className="btn btn-solid sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        Pular para o conteúdo
      </a>

      <header
        className="fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300"
        style={{
          borderColor: scrolled ? "var(--border)" : "transparent",
          backgroundColor: scrolled ? "rgba(9,10,36,0.72)" : "var(--header-bg)",
          backdropFilter: scrolled ? "blur(24px)" : "blur(8px)",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(8px)",
        }}
      >
        <div className="container-page flex items-center justify-between gap-6 py-3">
          <a
            href="#top"
            className="flex shrink-0 items-center gap-3 text-[1.25rem] font-semibold text-fg no-underline"
          >
            <LogoMark />
            {site.name}
          </a>

          {/* Navegação desktop */}
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex list-none items-center gap-6 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 items-center gap-6 lg:flex">
            <span aria-hidden className="h-7 w-px bg-[var(--border)]" />
            <a href={site.resume} className="nav-link" download>
              Currículo
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link gap-1"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" aria-hidden />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
            <a href="#contato" className="btn btn-solid">
              Contato
            </a>
          </div>

          {/* Alternador mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-transparent text-fg lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
            <span className="sr-only">{menuOpen ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>

        {/* Painel mobile */}
        {menuOpen && (
          <nav
            id="menu-mobile"
            aria-label="Principal"
            className="border-t border-[var(--border)] bg-[rgba(9,10,36,0.96)] lg:hidden"
          >
            <ul className="container-page flex list-none flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={site.resume} className="nav-link w-full" download>
                  Currículo
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link w-full gap-1"
                >
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#contato"
                  className="btn btn-solid w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}
