"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { navLinks, site } from "@/data/site"
import { useLanguage } from "@/context/language"

/**
 * Marca do logotipo: duas estrelas sobrepostas (Figma 8:198).
 *
 * A de baixo, magenta, tem o gradiente C680E2 → AA13B2 do arquivo e um bloom
 * borrado por cima, no centro. A de cima é vidro: o roxo do sistema a 65% com
 * um traço de luz que cai de 25% a zero.
 *
 * Duas coisas do arquivo não vêm para cá. O backdrop-blur de 7,5px da estrela
 * de vidro, que a 30px de altura não se percebe e em SVG só existe via
 * foreignObject — o que o Figma exporta e nenhum navegador aplica de forma
 * confiável dentro de <svg>. E as cores ficam fixas em vez de currentColor: a
 * marca agora é colorida por desenho, não monocromática herdando o link.
 *
 * O viewBox tem ~2,5 unidades de folga em volta. É a mesma precaução do logo
 * anterior, que encostava na borda e aparecia achatado: aqui ainda há o traço
 * da estrela de vidro e o bloom borrado, que sangram além do contorno.
 */
function LogoMark() {
  return (
    <svg
      viewBox="0 0 40 34"
      width="36"
      height="30.6"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <defs>
        <linearGradient
          id="logo-estrela"
          x1="3.8316"
          y1="18.8625"
          x2="24.6463"
          y2="38.3647"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--glow-magenta-from)" />
          <stop offset="1" stopColor="var(--glow-magenta-to)" />
        </linearGradient>
        <linearGradient
          id="logo-vidro"
          x1="17.9125"
          y1="3.74453"
          x2="27.917"
          y2="26.8825"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0.25" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter
          id="logo-bloom"
          x="1.5"
          y="8.5"
          width="26.6"
          height="26.6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.13739" />
        </filter>
      </defs>

      <path d="M19.1697 20.3882C19.0109 20.7155 19.0235 21.1007 19.2024 21.4177L21.7445 25.7734C21.9596 26.1427 21.9386 26.6034 21.691 26.9524C21.4533 27.3074 21.0324 27.493 20.6098 27.4323L15.6144 26.773C15.4402 26.7485 15.2629 26.7659 15.0953 26.8216L14.8385 26.9152C14.7542 26.9609 14.6774 27.0211 14.6137 27.0937L11.217 30.8237C11.0475 31.0036 10.8259 31.1262 10.5821 31.1732C9.9824 31.2715 9.41322 30.8735 9.29962 30.2761L8.44358 25.3058C8.37548 24.9452 8.13662 24.6404 7.80308 24.4882L3.17184 22.4185C2.78442 22.2451 2.53292 21.8644 2.52657 21.4405C2.51678 21.0189 2.74107 20.6269 3.11002 20.4226L7.57115 18.0225C7.91592 17.855 8.15112 17.5223 8.19478 17.1414L8.71932 12.1296C8.73405 12.0169 8.76577 11.9065 8.8156 11.8046L8.87671 11.7072C8.90329 11.6417 8.93961 11.5823 8.98439 11.5284L9.07387 11.4528L9.21081 11.3278L9.6098 11.1823C9.97961 11.0894 10.371 11.1883 10.6511 11.447L14.2981 14.9168C14.5627 15.1714 14.9359 15.2792 15.2951 15.2073L20.2543 14.1738C20.6731 14.0856 21.1059 14.2392 21.3758 14.5702C21.6385 14.905 21.6834 15.3611 21.4913 15.7413L19.1697 20.3882Z" fill="url(#logo-estrela)" />
      <g opacity="0.5" filter="url(#logo-bloom)">
        <path d="M14.8017 17.8677C12.6328 17.8677 10.8724 19.6284 10.8724 21.797C10.8724 23.9663 12.6328 25.7263 14.8017 25.7263C16.9746 25.7263 18.731 23.9663 18.731 21.797C18.731 19.6284 16.9746 17.8677 14.8017 17.8677Z" fill="var(--glow-magenta-to)" />
      </g>
      <path
        d="M27.2844 3.01326L27.3002 3.01825C27.7414 3.17919 28.0858 3.52472 28.247 3.95898L28.3045 4.15066L28.305 4.15279L29.6665 10.3995L29.6674 10.3997C29.7534 10.8053 30.0341 11.1431 30.416 11.3037L30.415 11.3035L36.3642 13.7509L36.4664 13.7968C36.9347 14.0275 37.2616 14.4722 37.3435 14.9868L37.3578 15.0982L37.358 15.1012C37.3997 15.7009 37.0899 16.2687 36.5643 16.5612L30.8132 19.7932L30.8125 19.792C30.4586 19.997 30.2278 20.3641 30.1936 20.7723L29.7619 27.1625C29.7207 27.7656 29.3305 28.2887 28.7641 28.5007L28.7634 28.4995C28.2054 28.7239 27.5701 28.6076 27.1259 28.2039L22.344 23.9523L22.3433 23.9511C22.233 23.8513 22.1058 23.7721 21.9675 23.7157L21.8257 23.667L21.5084 23.5873C21.4073 23.5782 21.305 23.585 21.2076 23.6104L21.2043 23.6115L14.9761 25.1116L14.9737 25.113C14.6355 25.1884 14.2814 25.156 13.9613 25.0187L13.9568 25.0166C13.1791 24.6568 12.8299 23.742 13.1699 22.955L13.1703 22.9531L15.8111 17.1201C15.9761 16.7396 15.9467 16.3031 15.7318 15.9492L12.3381 10.4727C12.0225 9.96293 12.0298 9.31861 12.3584 8.81736C12.68 8.31847 13.251 8.03834 13.8426 8.09177L13.8445 8.09225L20.2449 8.74797L20.2508 8.74845C20.6794 8.81032 21.1102 8.64823 21.3927 8.31946L25.5153 3.42562L25.517 3.42302L25.5179 3.42325C25.6241 3.30355 25.7487 3.19867 25.8897 3.11792L25.9046 3.1106L26.0328 3.0532C26.1163 2.99994 26.2053 2.96066 26.2984 2.93367L26.325 2.92826L26.473 2.91209L26.7009 2.87873L26.7615 2.88188L27.2844 3.01326Z"
        fill="var(--purple)"
        fillOpacity="0.65"
        stroke="url(#logo-vidro)"
        strokeWidth="0.313739"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Pílula PT/EN (Figma 0:198): caixa de 81×41 em rgba(217,217,217,.1), duas
 * fichas de 32px, a ativa em rgba(151,111,204,.55). O arquivo mostra EN
 * marcada; aqui quem manda é o idioma corrente, que começa em PT.
 *
 * A ficha tem 32px por desenho, abaixo dos 44px de alvo mínimo — o ::after
 * estende a área de clique sem mexer no visual.
 */
function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      role="group"
      aria-label={lang === "en" ? "Language" : "Idioma"}
      className={`flex w-[81px] items-center justify-center gap-[2.386px] rounded-[var(--radius-pill)] p-[4.771px] ${className}`}
      style={{ background: "var(--surface-soft)" }}
    >
      {(["pt", "en"] as const).map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className="tap-44 relative flex h-8 w-8 items-center justify-center rounded-[var(--radius-pill)] border-0 text-[14px] font-bold text-fg transition-colors duration-200"
            style={{
              background: active ? "var(--purple-fill)" : "transparent",
              textShadow: "0 0 1.193px rgba(0, 0, 0, 0.15)",
              cursor: "pointer",
            }}
          >
            {code.toUpperCase()}
            <span className="sr-only">
              {code === "pt" ? " — Português" : " — English"}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export function SiteHeader() {
  const { lang, t } = useLanguage()
  const en = lang === "en"
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
        {t("home_skip")}
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
          <Link
            href="/"
            /* Logo 0:187: vetor + nome, com 15px entre eles no desktop. O
               tamanho do nome vem de --text-brand. */
            className="flex shrink-0 items-center gap-3 font-medium text-fg no-underline sm:gap-[15px]"
            style={{ fontSize: "var(--text-brand)" }}
          >
            <LogoMark />
            {site.name}
          </Link>

          {/* Navegação desktop */}
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex list-none items-center gap-6 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="nav-link">
                    {en ? link.labelEn : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 items-center gap-6 lg:flex">
            {/* Traço vertical 0:194: 0,5px, 27,5px de altura. */}
            <span
              aria-hidden
              className="h-[27.5px] w-[0.5px]"
              style={{ background: "var(--ring)" }}
            />
            <a
              href={en ? site.resumeEn : site.resume}
              className="nav-link"
              download
            >
              {t("home_nav_resume")}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              LinkedIn
              <span className="sr-only">{t("home_new_tab")}</span>
            </a>
            <LanguageToggle />
            <Link href="/#contato" className="btn btn-solid">
              {t("nav_contact")}
            </Link>
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
            <span className="sr-only">
              {menuOpen ? t("home_menu_close") : t("home_menu_open")}
            </span>
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
                  <Link
                    href={link.href}
                    className="nav-link w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    {en ? link.labelEn : link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={en ? site.resumeEn : site.resume}
                  className="nav-link w-full"
                  download
                >
                  {t("home_nav_resume")}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link w-full"
                >
                  LinkedIn
                  <span className="sr-only">{t("home_new_tab")}</span>
                </a>
              </li>
              <li className="pt-2">
                <LanguageToggle className="w-fit" />
              </li>
              <li className="pt-2">
                <Link
                  href="/#contato"
                  className="btn btn-solid w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("nav_contact")}
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}
