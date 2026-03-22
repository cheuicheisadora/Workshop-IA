"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/context/language"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  function handleAnchor(id: string, e: React.MouseEvent) {
    e.preventDefault()
    setMenuOpen(false)
    if (pathname === "/") {
      history.replaceState(null, "", "#" + id)
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/#" + id
    }
  }

  const headerStyle = {
    background: scrolled || menuOpen ? "rgba(253, 252, 251, 0.92)" : "rgba(253, 252, 251, 0.55)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderBottom: "1px solid var(--border)",
    boxShadow: scrolled ? "0 1px 20px rgba(168,216,234,0.12)" : "none",
  }

  return (
    <>
      <header className="fixed top-0 z-50 w-full transition-all duration-300" style={headerStyle}>
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-foreground hover:opacity-75 transition-opacity"
            style={{ maxWidth: "50vw", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          >
            Isadora Cheuiche
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#projetos"
              onClick={(e) => handleAnchor("projetos", e)}
              className={`nav-link text-sm transition-colors duration-200${activeSection === "projetos" ? " active" : ""}`}
              style={activeSection === "projetos" ? { color: "var(--primary-deep)" } : { color: "var(--foreground-muted)" }}
            >
              {t("nav_projects")}
            </a>
            <a
              href="#sobre"
              onClick={(e) => handleAnchor("sobre", e)}
              className={`nav-link text-sm transition-colors duration-200${activeSection === "sobre" ? " active" : ""}`}
              style={activeSection === "sobre" ? { color: "var(--primary-deep)" } : { color: "var(--foreground-muted)" }}
            >
              {t("nav_about")}
            </a>

            <div className="h-4 w-px" style={{ background: "var(--border)" }} aria-hidden />

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/isadora-cheuiche"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center text-muted-foreground hover:text-[var(--primary-deep)] transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>

            {/* Language toggle */}
            <div
              className="flex items-center rounded-full p-0.5"
              style={{ background: "var(--muted, rgba(0,0,0,0.05))", border: "1px solid var(--border)" }}
              role="group"
              aria-label="Language selector"
            >
              <button
                onClick={() => setLang("pt")}
                aria-label="Português"
                aria-pressed={lang === "pt"}
                className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200"
                style={{ background: lang === "pt" ? "var(--primary-deep)" : "transparent", color: lang === "pt" ? "#fff" : "var(--muted-foreground)", opacity: lang === "pt" ? 1 : 0.55 }}
              >
                PT
              </button>
              <button
                onClick={() => setLang("en")}
                aria-label="English"
                aria-pressed={lang === "en"}
                className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200"
                style={{ background: lang === "en" ? "var(--primary-deep)" : "transparent", color: lang === "en" ? "#fff" : "var(--muted-foreground)", opacity: lang === "en" ? 1 : 0.55 }}
              >
                EN
              </button>
            </div>

            {/* CTA */}
            <a
              href="#contato"
              onClick={(e) => handleAnchor("contato", e)}
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-85"
              style={{ background: "var(--primary-deep)" }}
            >
              {t("nav_contact")}
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg transition-colors"
            style={{ color: "var(--foreground)", minHeight: "44px", minWidth: "44px" }}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden"
          style={{
            background: "var(--background)",
            paddingTop: "80px",
            paddingInline: "24px",
            paddingBottom: "40px",
            overflowY: "auto",
          }}
        >
          {/* Nav links */}
          <nav className="flex flex-col gap-1">
            <a
              href="#projetos"
              onClick={(e) => handleAnchor("projetos", e)}
              className="flex items-center text-2xl font-semibold text-foreground py-4 border-b"
              style={{ borderColor: "var(--border)", minHeight: "44px" }}
            >
              {t("nav_projects")}
            </a>
            <a
              href="#sobre"
              onClick={(e) => handleAnchor("sobre", e)}
              className="flex items-center text-2xl font-semibold text-foreground py-4 border-b"
              style={{ borderColor: "var(--border)", minHeight: "44px" }}
            >
              {t("nav_about")}
            </a>
            <a
              href="#contato"
              onClick={(e) => handleAnchor("contato", e)}
              className="flex items-center text-2xl font-semibold py-4"
              style={{ color: "var(--primary-deep)", minHeight: "44px" }}
            >
              {t("nav_contact")}
            </a>
          </nav>

          {/* Bottom utilities */}
          <div className="mt-auto flex flex-col gap-5 pt-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/isadora-cheuiche"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
              style={{ color: "var(--foreground-muted)", minHeight: "44px" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            {/* Language toggle */}
            <div className="flex items-center gap-3">
              <span className="text-sm" style={{ color: "var(--foreground-muted)" }}>
                {lang === "pt" ? "Idioma" : "Language"}
              </span>
              <div
                className="flex items-center rounded-full p-0.5"
                style={{ background: "var(--muted, rgba(0,0,0,0.05))", border: "1px solid var(--border)" }}
                role="group"
                aria-label="Language selector"
              >
                <button
                  onClick={() => setLang("pt")}
                  aria-label="Português"
                  aria-pressed={lang === "pt"}
                  className="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                  style={{ background: lang === "pt" ? "var(--primary-deep)" : "transparent", color: lang === "pt" ? "#fff" : "var(--muted-foreground)" }}
                >
                  PT
                </button>
                <button
                  onClick={() => setLang("en")}
                  aria-label="English"
                  aria-pressed={lang === "en"}
                  className="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                  style={{ background: lang === "en" ? "var(--primary-deep)" : "transparent", color: lang === "en" ? "#fff" : "var(--muted-foreground)" }}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
