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
              background: "rgba(253, 252, 251, 0.80)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--border)",
              boxShadow: "0 1px 20px rgba(168,216,234,0.12)",
            }
          : { background: "transparent" }
      }
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground hover:opacity-75 transition-opacity"
        >
          Isadora Cheuiche
        </Link>

        {/* Right side */}
        <nav className="flex items-center gap-6">
          {/* Primary nav links */}
          <Link
            href="/#projetos"
            className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {t("nav_projects")}
          </Link>
          <Link
            href="/#sobre"
            className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {t("nav_about")}
          </Link>

          {/* Visual separator */}
          <div
            className="h-4 w-px"
            style={{ background: "var(--border)" }}
            aria-hidden
          />

          {/* LinkedIn — "in" icon only, no box background */}
          <a
            href="https://www.linkedin.com/in/isadora-cheuiche"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center text-muted-foreground hover:text-[var(--primary-deep)] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="17"
              height="17"
              aria-hidden
            >
              {/* "in" paths only — no background rectangle */}
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
          </a>

          {/* Language toggle — pill capsule */}
          <div
            className="flex items-center rounded-full p-0.5"
            style={{
              background: "var(--muted, rgba(0,0,0,0.05))",
              border: "1px solid var(--border)",
            }}
            role="group"
            aria-label="Language selector"
          >
            <button
              onClick={() => setLang("pt")}
              aria-label="Português"
              aria-pressed={lang === "pt"}
              className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200"
              style={{
                background: lang === "pt" ? "var(--primary-deep)" : "transparent",
                color: lang === "pt" ? "#fff" : "var(--muted-foreground)",
                opacity: lang === "pt" ? 1 : 0.55,
              }}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              aria-label="English"
              aria-pressed={lang === "en"}
              className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200"
              style={{
                background: lang === "en" ? "var(--primary-deep)" : "transparent",
                color: lang === "en" ? "#fff" : "var(--muted-foreground)",
                opacity: lang === "en" ? 1 : 0.55,
              }}
            >
              EN
            </button>
          </div>

          {/* CTA */}
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
