"use client"

import { useLanguage } from "@/context/language"

export function Footer() {
  const { lang } = useLanguage()
  const contactLabel = lang === "en" ? "Let's talk" : "Vamos conversar"

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
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
                <path d="M7.443 5.35c.638 0 1.23.05 1.77.198.514.148.994.372 1.377.695.378.32.68.742.866 1.27.18.526.268 1.15.268 1.87 0 .79-.173 1.452-.513 1.998-.34.544-.874.993-1.606 1.352.98.287 1.71.782 2.187 1.486.478.704.716 1.56.716 2.57 0 .828-.157 1.543-.48 2.135-.317.596-.756 1.078-1.308 1.443-.555.365-1.196.628-1.92.793-.722.162-1.472.245-2.25.245H0V5.35h7.443zm-.49 5.738c.61 0 1.11-.152 1.5-.457.383-.305.577-.792.577-1.456 0-.338-.063-.617-.192-.838-.128-.22-.298-.397-.514-.527-.214-.128-.46-.218-.736-.272-.278-.05-.57-.076-.878-.076H2.8v3.626h4.153zm.24 6.002c.34 0 .657-.03.954-.098.298-.064.558-.173.782-.325.224-.15.405-.362.543-.637.138-.275.208-.627.208-1.055 0-.83-.228-1.42-.685-1.766-.456-.346-1.066-.52-1.83-.52H2.8v4.4h4.393zM21.245 17.37c-.667 1.47-2.02 2.13-3.694 2.13-2.42 0-4.308-1.607-4.308-4.34 0-2.65 1.754-4.427 4.262-4.427 2.587 0 4.167 1.852 4.167 4.69v.346H15.08c.073 1.128.837 1.914 2.105 1.914.963 0 1.538-.506 1.875-1.312h2.184zm-2.157-3.35c-.04-.953-.647-1.654-1.697-1.654-.99 0-1.71.74-1.84 1.654h3.537zM17.576 9h5.9v1.28h-5.9z" />
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
