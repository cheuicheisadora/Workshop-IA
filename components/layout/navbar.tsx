"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/context/language"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLanguage()

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
        <nav className="flex items-center gap-5">
          <Link
            href="/#projetos"
            className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav_projects")}
          </Link>
          <Link
            href="/#sobre"
            className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav_about")}
          </Link>

          {/* LinkedIn icon */}
          <a
            href="https://www.linkedin.com/in/isadora-cheuiche"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors duration-200 hover:text-[var(--primary-deep)] flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
              aria-hidden
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Language toggle */}
          <div
            className="flex items-center gap-1"
            style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em" }}
            aria-label="Seletor de idioma"
          >
            <button
              onClick={() => setLang("pt")}
              aria-label="Português"
              className="px-1 py-0.5 transition-colors duration-200 uppercase"
              style={{
                color: lang === "pt" ? "var(--primary-deep)" : "var(--muted-foreground)",
                borderBottom: lang === "pt" ? "1.5px solid var(--primary-deep)" : "1.5px solid transparent",
                opacity: lang === "pt" ? 1 : 0.5,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              PT
            </button>
            <span style={{ color: "var(--muted-foreground)", opacity: 0.4 }}>|</span>
            <button
              onClick={() => setLang("en")}
              aria-label="English"
              className="px-1 py-0.5 transition-colors duration-200 uppercase"
              style={{
                color: lang === "en" ? "var(--primary-deep)" : "var(--muted-foreground)",
                borderBottom: lang === "en" ? "1.5px solid var(--primary-deep)" : "1.5px solid transparent",
                opacity: lang === "en" ? 1 : 0.5,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              EN
            </button>
          </div>

          <Link
            href="/#contato"
            className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            style={{ background: "var(--primary-deep)" }}
          >
            {t("nav_contact")}
          </Link>
        </nav>
      </div>
    </header>
  )
}
