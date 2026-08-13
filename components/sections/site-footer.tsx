import { navLinks, site } from "@/data/site"

/* Glifos reaproveitados do footer anterior do projeto (paths já versionados). */
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden focusable="false">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  )
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden focusable="false">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  )
}

const socials = [
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.behance, label: "Behance", Icon: BehanceIcon },
]

export function SiteFooter() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--footer-bg)",
        borderColor: "var(--border)",
        paddingBlock: "var(--space-6)",
      }}
    >
      <div className="container-page">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <nav aria-label="Rodapé">
            <h2
              className="font-normal text-fg-subtle"
              style={{ fontSize: "var(--text-meta)" }}
            >
              Navegação
            </h2>
            <ul className="mt-4 flex list-none flex-col gap-1 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2
              className="font-normal text-fg-subtle"
              style={{ fontSize: "var(--text-meta)" }}
            >
              Contato
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="nav-link mt-4"
            >
              {site.email}
            </a>

            <ul className="mt-6 flex list-none items-center gap-3 p-0">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-full border text-fg no-underline transition-colors duration-200 hover:bg-white/10"
                    style={{ borderColor: "var(--border-strong)" }}
                  >
                    <Icon />
                    <span className="sr-only">{label} (abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          className="mt-12 text-fg-subtle"
          style={{ fontSize: "var(--text-meta)" }}
        >
          © 2026 Isadora Cheuiche
        </p>
      </div>
    </footer>
  )
}
