import { ArrowUpRight } from "lucide-react"
import { site } from "@/data/site"

export function Contact() {
  return (
    <section id="contato" className="section anchor-target">
      <div className="container-page flex flex-col items-center gap-14 text-center">
        <h2
          className="font-semibold"
          style={{
            fontSize: "var(--text-section)",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
          data-animate
        >
          Vamos conversar?
        </h2>

        <a
          href={`mailto:${site.email}`}
          className="btn btn-solid btn-lg"
          data-animate
          data-delay="1"
        >
          Enviar mensagem
          <ArrowUpRight className="h-5 w-5" aria-hidden />
        </a>
      </div>
    </section>
  )
}
