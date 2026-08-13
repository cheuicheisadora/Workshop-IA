"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { navLinks, site } from "@/data/site"

/**
 * Marca do logotipo: vetor exportado do Figma (0:188), caixa de 30,75px.
 * É um disco cheio com o brilho vazado — um subcaminho só, preenchimento
 * nonzero. `currentColor` no lugar do branco fixo do arquivo para o logo
 * herdar a cor do link.
 */
function LogoMark() {
  return (
    <svg
      width="30.75"
      height="30.75"
      viewBox="0 0 30.75 30.75"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M15.375 0C11.2973 0 7.3866 1.61986 4.50323 4.50323C1.61986 7.3866 0 11.2973 0 15.375C0 19.4527 1.61986 23.3634 4.50323 26.2468C7.3866 29.1301 11.2973 30.75 15.375 30.75C19.4527 30.75 23.3634 29.1301 26.2468 26.2468C29.1301 23.3634 30.75 19.4527 30.75 15.375C30.75 11.2973 29.1301 7.3866 26.2468 4.50323C23.3634 1.61986 19.4527 0 15.375 0ZM23.91 16.26C23.7208 16.5089 23.4586 16.6924 23.16 16.785L20.745 17.595C20.007 17.8472 19.3354 18.2625 18.78 18.81C18.2283 19.3621 17.8124 20.0348 17.565 20.775L16.74 23.19C16.629 23.4623 16.4479 23.7004 16.215 23.88C15.966 24.0604 15.6675 24.1599 15.36 24.165C15.051 24.1695 14.7495 24.0691 14.505 23.88C14.2555 23.7009 14.0671 23.4496 13.965 23.16L13.17 20.745C12.9229 20.0022 12.5052 19.3276 11.9504 18.7754C11.3955 18.2231 10.719 17.8086 9.975 17.565L7.575 16.77C7.28538 16.6679 7.03407 16.4795 6.855 16.23C6.66802 15.9844 6.56778 15.6837 6.57 15.375C6.57202 15.0624 6.67166 14.7582 6.855 14.505C7.02727 14.2619 7.27515 14.0825 7.56 13.995L9.975 13.185C10.7215 12.9322 11.4028 12.5173 11.97 11.97C12.525 11.409 12.9405 10.725 13.185 9.975L13.995 7.605C14.0849 7.3212 14.2572 7.07056 14.49 6.885C14.7292 6.68298 15.0319 6.57148 15.345 6.57C15.6426 6.56488 15.935 6.64843 16.185 6.81C16.449 6.9741 16.6498 7.22251 16.755 7.515L17.565 9.96C17.817 10.7145 18.237 11.4015 18.795 11.97C19.3587 12.5142 20.0345 12.9289 20.775 13.185L23.19 14.025C23.477 14.1165 23.7251 14.3013 23.895 14.55C24.0701 14.8008 24.1643 15.0991 24.165 15.405C24.1635 15.708 24.075 16.005 23.91 16.26Z"
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
