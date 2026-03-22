"use client"

import { useLanguage } from "@/context/language"

export function Footer() {
  const { lang } = useLanguage()
  const tagline =
    lang === "en"
      ? "Made with intention, from brief to deployment."
      : "Feito com intenção, do brief ao deploy."
  const contactLabel = lang === "en" ? "Let's talk" : "Vamos conversar"

  return (
    <footer
      style={{ borderTop: "1px solid rgba(168,216,234,0.25)", paddingBlock: "60px 40px" }}
      className="bg-card"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Top row: tagline + social links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <p
            className="text-sm text-muted-foreground"
            style={{ letterSpacing: "0.03em", fontStyle: "italic" }}
          >
            {tagline}
          </p>
          <div className="flex items-center gap-5">
            {/* LinkedIn icon */}
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
            {/* Behance icon with official path */}
            <a
              href="https://www.behance.net/isadoracheuiche"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="text-muted-foreground hover:text-[var(--primary-deep)] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
                aria-hidden
              >
                <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.855.28 1.39 0 .596-.135 1.091-.4 1.484-.269.394-.657.722-1.17.984.705.201 1.243.566 1.604 1.09.365.522.547 1.155.547 1.9 0 .596-.114 1.111-.341 1.543-.229.435-.543.79-.939 1.063-.396.271-.853.47-1.374.596-.519.126-1.051.189-1.6.189H1V5.731h6.803zm-.351 4.972c.48 0 .878-.114 1.192-.344.315-.23.472-.604.472-1.12 0-.291-.051-.532-.155-.723-.103-.191-.242-.343-.419-.454-.175-.111-.379-.187-.607-.228-.231-.04-.474-.061-.733-.061H3.968v2.93h3.484zm.19 5.257c.271 0 .526-.026.765-.079.241-.054.455-.143.637-.269.184-.125.329-.295.439-.509.109-.215.164-.491.164-.828 0-.66-.186-1.133-.558-1.419-.37-.288-.866-.432-1.491-.432H3.968v3.536h3.674zm9.645-8.168c1.24 0 2.302.306 3.182.919.877.614 1.387 1.615 1.522 3.001H18.38c-.052-.607-.26-1.063-.619-1.365-.363-.302-.82-.454-1.369-.454-.388 0-.721.073-.998.217-.277.145-.503.332-.68.565-.176.233-.308.503-.396.809-.088.307-.131.622-.131.948h6.398c.023 1.438-.296 2.554-.951 3.349-.657.795-1.655 1.193-2.997 1.193-.823 0-1.546-.145-2.172-.436-.625-.29-1.145-.687-1.558-1.189-.415-.503-.724-1.083-.929-1.744-.203-.659-.306-1.363-.306-2.109 0-.741.112-1.441.338-2.101.224-.657.548-1.234.971-1.727.423-.493.939-.879 1.549-1.16.611-.279 1.301-.416 2.066-.416zm.177 1.74c-.488 0-.886.104-1.191.312-.305.208-.543.486-.714.836-.17.35-.267.73-.29 1.143h3.925c-.07-.709-.283-1.243-.637-1.604-.356-.36-.79-.54-1.093-.687zM14.703 5.73h5.134v1.256H14.703z" />
              </svg>
            </a>
            {/* Email CTA — text only, email only in href */}
            <a
              href="mailto:cheuicheisadora@gmail.com"
              className="text-sm font-semibold transition-colors duration-200 hover:opacity-75 flex items-center gap-1.5"
              style={{ color: "var(--primary-deep)" }}
            >
              {contactLabel} →
            </a>
          </div>
        </div>
        {/* Bottom: copyright */}
        <p className="text-xs text-muted-foreground" style={{ opacity: 0.6 }}>
          © {new Date().getFullYear()} Isadora Cheuiche · UX/UI Designer
        </p>
      </div>
    </footer>
  )
}
