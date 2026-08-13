import { navLinks, site } from "@/data/site"

/*
 * Glifos exportados do Figma (nós 0:141, 0:145 e 0:150 do rodapé). As caixas
 * são as do arquivo — 16,22×16, 18,95×12 e 24×15,36 — e cada uma é preservada
 * como está: são desenhos de proporções diferentes, não um ícone de tamanho
 * único. O branco fixo do arquivo virou currentColor para o link controlar a
 * cor no hover e no foco.
 */
function LinkedInIcon() {
  return (
    <svg
      width="16.2178"
      height="16"
      viewBox="0 0 16.2178 16"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d="M0.568647 3.16645C0.188868 2.81384 0 2.37737 0 1.85805C0 1.33872 0.189878 0.88305 0.568647 0.529426C0.948427 0.176811 1.4373 0 2.03626 0C2.63522 0 3.1049 0.176811 3.48367 0.529426C3.86345 0.88204 4.05232 1.32559 4.05232 1.85805C4.05232 2.3905 3.86244 2.81384 3.48367 3.16645C3.10389 3.51907 2.62209 3.69588 2.03626 3.69588C1.45043 3.69588 0.948427 3.51907 0.568647 3.16645ZM3.73315 5.18919V16H0.318157V5.18919H3.73315Z" />
      <path d="M15.1014 6.25715C15.8458 7.06543 16.2175 8.17481 16.2175 9.58729V15.8091H12.9743V10.0258C12.9743 9.31348 12.7894 8.7598 12.4208 8.36576C12.0521 7.97172 11.5552 7.77369 10.933 7.77369C10.3108 7.77369 9.81381 7.97071 9.44514 8.36576C9.07647 8.7598 8.89163 9.31348 8.89163 10.0258V15.8091H5.62918V5.15889H8.89163V6.57137C9.22192 6.10054 9.66737 5.72874 10.2269 5.45493C10.7865 5.18113 11.4158 5.04472 12.1157 5.04472C13.3621 5.04472 14.358 5.44886 15.1014 6.25614V6.25715Z" />
    </svg>
  )
}

function BehanceIcon() {
  return (
    <svg
      width="18.9523"
      height="12"
      viewBox="0 0 18.9523 12"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d="M8.19328 6.62225C7.90519 6.26087 7.57527 5.98431 7.20586 5.79723C7.53229 5.59853 7.81341 5.35451 8.04575 5.06401C8.43723 4.57365 8.63588 3.95894 8.63588 3.23617C8.63588 2.63309 8.47673 2.07883 8.16192 1.58963C7.84827 1.10042 7.38127 0.70766 6.77372 0.421807C6.17894 0.141765 5.46219 0 4.64553 0H0V12H4.85928C5.65503 12 6.36597 11.8548 6.9712 11.5689C7.58805 11.2784 8.06898 10.8717 8.3989 10.3616C8.72998 9.84913 8.89842 9.26697 8.89842 8.63135C8.89842 7.88651 8.66144 7.21138 8.19328 6.62341V6.62225ZM5.72589 4.43537C5.43896 4.66777 5.01959 4.78629 4.48174 4.78629H2.47204V2.12763H4.48174C5.01727 2.12763 5.43431 2.24964 5.72124 2.49134C5.99656 2.72258 6.13015 3.04213 6.13015 3.4651C6.13015 3.88807 5.99772 4.21575 5.72589 4.43537ZM2.47204 6.91508H4.62927C5.19384 6.91508 5.62831 7.05219 5.95706 7.33456C6.27187 7.6053 6.42522 7.96437 6.42522 8.43382C6.42522 8.90327 6.28349 9.23443 5.99075 9.48193C5.68755 9.73874 5.25193 9.86889 4.69432 9.86889H2.47204V6.91508Z" />
      <path d="M18.3889 4.61527C18.0148 3.93899 17.4851 3.40564 16.8137 3.03148C16.1434 2.65731 15.3686 2.4679 14.5136 2.4679C13.6586 2.4679 12.8256 2.66311 12.1391 3.04773C11.4514 3.43352 10.91 3.9878 10.5313 4.69778C10.1526 5.40661 9.96096 6.2386 9.96096 7.17053C9.96096 8.10245 10.1584 8.9356 10.5488 9.64326C10.9391 10.3521 11.4851 10.9098 12.1728 11.3003C12.8593 11.6907 13.647 11.8883 14.5147 11.8883C15.58 11.8883 16.4849 11.6175 17.2052 11.0841C17.9254 10.5508 18.4296 9.85591 18.7049 9.02043L18.7246 8.96116H16.6174L16.6046 8.98674C16.1991 9.80827 15.4963 10.2243 14.5136 10.2243C13.8293 10.2243 13.2439 10.007 12.7734 9.58052C12.3145 9.16336 12.0508 8.6056 11.9892 7.92118H18.8803L18.8861 7.88284C18.9302 7.60744 18.9523 7.29602 18.9523 6.95787C18.9523 6.0794 18.763 5.29156 18.3889 4.61527ZM12.8059 4.73613C13.2543 4.33524 13.8015 4.13305 14.4311 4.13305C15.1269 4.13305 15.7182 4.33873 16.1887 4.74543C16.6464 5.14051 16.8892 5.67154 16.9101 6.32226H12.009C12.1019 5.66108 12.3703 5.12772 12.8071 4.73729L12.8059 4.73613Z" />
      <path d="M16.7517 0.276489H12.1619V1.36412H16.7517V0.276489Z" />
    </svg>
  )
}

/** Terceiro círculo do rodapé (0:150): o "G+" do Google, aqui levando ao e-mail. */
function GoogleIcon() {
  return (
    <svg
      width="24"
      height="15.3564"
      viewBox="13 17.3218 24 15.3564"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d="M20.6409 23.7168V26.5435H24.9713C24.851 27.6863 23.7082 29.8514 20.6409 29.8514C18.0547 29.8514 15.9497 27.6863 15.9497 25.0399C15.9497 22.3936 17.9344 20.2284 20.5206 20.2284C22.0242 20.2284 23.0467 20.8299 23.588 21.3712L25.693 19.3864C24.6142 18.3627 23.256 17.682 21.7903 17.4303C20.3245 17.1786 18.8171 17.3673 17.4586 17.9725C16.1001 18.5777 14.9516 19.5722 14.1585 20.8302C13.3653 22.0883 12.9631 23.5533 13.0027 25.0399C13.0027 29.25 16.4309 32.6782 20.6409 32.6782C25.0915 32.6782 27.9784 29.4906 27.9784 25.1602L27.8582 23.7168" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.3236 25.6113V28.2877H32.5794V25.6113H29.903V23.8671H32.5794V21.1908H34.3236V23.8671H37V25.6113H34.3236Z"
      />
    </svg>
  )
}

const socials = [
  { href: site.linkedin, label: "LinkedIn", external: true, Icon: LinkedInIcon },
  { href: site.behance, label: "Behance", external: true, Icon: BehanceIcon },
  { href: `mailto:${site.email}`, label: "E-mail", external: false, Icon: GoogleIcon },
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

            {/* Círculos de 50px com traço de 1px em rgba(255,255,255,.25),
                espaçados por 10px — medidas do nó 0:139. */}
            <ul className="mt-6 flex list-none items-center gap-2.5 p-0">
              {socials.map(({ href, label, external, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-full border text-fg no-underline transition-colors duration-200 hover:bg-white/10"
                    style={{ borderColor: "var(--border-strong)" }}
                  >
                    <Icon />
                    <span className="sr-only">
                      {label}
                      {external ? " (abre em nova aba)" : ""}
                    </span>
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
