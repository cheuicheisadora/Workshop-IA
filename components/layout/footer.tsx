export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Isadora Cheuiche · UX/UI Designer
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/isadora-cheuiche"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          <a
            href="https://www.behance.net/isadoracheuiche"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Behance"
          >
            {/* Behance official SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden>
              <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.855.28 1.39 0 .596-.135 1.091-.4 1.484-.269.394-.657.722-1.17.984.705.201 1.243.566 1.604 1.09.365.522.547 1.155.547 1.9 0 .596-.114 1.111-.341 1.543-.229.435-.543.79-.939 1.063-.396.271-.853.47-1.374.596-.519.126-1.051.189-1.6.189H1V5.731h6.803zm-.351 4.972c.48 0 .878-.114 1.192-.344.315-.23.472-.604.472-1.12 0-.291-.051-.532-.155-.723-.103-.191-.242-.343-.419-.454-.175-.111-.379-.187-.607-.228-.231-.04-.474-.061-.733-.061H3.968v2.93h3.484zm.19 5.257c.271 0 .526-.026.765-.079.241-.054.455-.143.637-.269.184-.125.329-.295.439-.509.109-.215.164-.491.164-.828 0-.66-.186-1.133-.558-1.419-.37-.288-.866-.432-1.491-.432H3.968v3.536h3.674zm9.645-8.168c1.24 0 2.302.306 3.182.919.877.614 1.387 1.615 1.522 3.001H18.38c-.052-.607-.26-1.063-.619-1.365-.363-.302-.82-.454-1.369-.454-.388 0-.721.073-.998.217-.277.145-.503.332-.68.565-.176.233-.308.503-.396.809-.088.307-.131.622-.131.948h6.398c.023 1.438-.296 2.554-.951 3.349-.657.795-1.655 1.193-2.997 1.193-.823 0-1.546-.145-2.172-.436-.625-.29-1.145-.687-1.558-1.189-.415-.503-.724-1.083-.929-1.744-.203-.659-.306-1.363-.306-2.109 0-.741.112-1.441.338-2.101.224-.657.548-1.234.971-1.727.423-.493.939-.879 1.549-1.16.611-.279 1.301-.416 2.066-.416zm.177 1.74c-.488 0-.886.104-1.191.312-.305.208-.543.486-.714.836-.17.35-.267.73-.29 1.143h3.925c-.07-.709-.283-1.243-.637-1.604-.356-.36-.79-.54-1.093-.687zM14.703 5.73h5.134v1.256H14.703z"/>
            </svg>
            Behance
          </a>

          <a
            href="mailto:cheuicheisadora@gmail.com"
            className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-75"
            style={{ color: "var(--primary-deep)" }}
            aria-label="E-mail"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            E-mail
          </a>
        </div>
      </div>
    </footer>
  )
}
