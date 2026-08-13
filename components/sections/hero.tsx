import { ArrowRight, ArrowDown } from "lucide-react"
import { site } from "@/data/site"

export function Hero() {
  return (
    <section
      id="top"
      /*
       * align-content:center centraliza no content-box. Com padding-top igual à
       * altura do header e padding-bottom igual a header + 8svh, o header se
       * cancela e o centro do conteúdo cai exatamente em 46svh — acima do meio,
       * como especificado, sem depender de transform.
       */
      className="relative grid min-h-[100svh] content-center"
      style={{
        paddingTop: "var(--header-h)",
        paddingBottom: "calc(var(--header-h) + 8svh)",
      }}
    >
      <div className="container-page text-center">
        <h1
          className="hero-reveal gradient-text font-bold"
          style={{
            fontSize: "var(--text-hero)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}
        >
          Oi! Eu sou a Isadora.
        </h1>

        <p
          className="hero-reveal mx-auto mt-6 max-w-2xl font-semibold text-fg"
          style={{ fontSize: "var(--text-lead)", animationDelay: "0.1s" }}
        >
          {site.role}
        </p>

        <div
          className="hero-reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-7"
          style={{ animationDelay: "0.2s" }}
        >
          <a href="#projetos" className="btn btn-primary btn-lg w-full sm:w-auto">
            Ver projetos
            <ArrowRight className="h-5 w-5" aria-hidden />
          </a>
          <a href="#contato" className="btn btn-outline btn-lg w-full sm:w-auto">
            Entrar em contato
            <ArrowDown className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </div>

      <a
        href="#projetos"
        aria-label="Rolar para os projetos"
        className="absolute bottom-8 left-1/2 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-fg-subtle sm:flex"
      >
        <ArrowDown className="scroll-hint h-5 w-5" aria-hidden />
      </a>
    </section>
  )
}
