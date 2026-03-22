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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden>
              <path d="M22 7h-7V5h7v2zM9.507 11.257c.28-.31.438-.733.438-1.257 0-1.38-.94-2-2.5-2H4v8h3.584C9.121 16 10.5 15.224 10.5 13.5c0-.851-.379-1.725-.993-2.243zM6 9h1.077c.689 0 1.173.31 1.173.97 0 .685-.484.97-1.228.97H6V9zm2.352 5.324c0 .779-.538 1.176-1.363 1.176H6v-2.5h1c.838 0 1.352.397 1.352 1.324zM20 14h-4.586c0 1.245.862 1.765 1.92 1.765.684 0 1.275-.248 1.532-.773H20.5c-.412 1.612-1.77 2.508-3.234 2.508-1.887 0-3.266-1.256-3.266-3.248 0-2.018 1.396-3.252 3.266-3.252 2.066 0 3.266 1.476 3.266 3.277 0 .102-.011.395-.032.723H20zm-2.386-1.5h-2.152c.125-.965.693-1.5 1.14-1.5.621 0 1.012.5 1.012 1.5z"/>
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
