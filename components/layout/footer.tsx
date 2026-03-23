"use client"

import { useLanguage } from "@/context/language"

export function Footer() {
  const { t } = useLanguage()
  const contactLabel = t("about_btn")

  return (
    <footer
      style={{ borderTop: "1px solid rgba(168,216,234,0.25)", paddingBlock: "48px 36px" }}
      className="bg-card"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          {/* Social icons */}
          <div className="flex items-center gap-6">
            {/* LinkedIn — "in" paths only, no background rect */}
            <a
              href="https://www.linkedin.com/in/isadora-cheuiche"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-[var(--primary-deep)] transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>

            {/* Behance — Remix Icons ri-behance-fill path, viewBox 0 0 24 24 */}
            <a
              href="https://www.behance.net/isadoracheuiche"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="text-muted-foreground hover:text-[var(--primary-deep)] transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
            </a>
          </div>

          {/* Email CTA — text only, email only in href */}
          <a
            href="mailto:cheuicheisadora@gmail.com"
            className="text-sm font-semibold transition-colors duration-200 hover:opacity-75 flex items-center gap-1.5"
            style={{ color: "var(--primary-deep)" }}
          >
            {contactLabel} →
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground" style={{ opacity: 0.55 }}>
          © {new Date().getFullYear()} Isadora Cheuiche · UX/UI Designer
        </p>
      </div>
    </footer>
  )
}
