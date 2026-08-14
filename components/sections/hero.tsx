"use client"

import { ArrowRight } from "lucide-react"
import { site } from "@/data/site"
import { useLanguage } from "@/context/language"

export function Hero() {
  const { lang, t } = useLanguage()

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
      {/* Composição 3D do hero (Figma 12:57): imagem de 1825 × 895 dentro de um
          frame de 1920 × 1096, ou seja, uma folga de 2,5% de cada lado. O miolo
          dela é vazio de propósito — é onde o texto entra.

          A imagem entra pelo CSS, e não por <Image>, para o celular não baixar
          o arquivo: lá a arte não aparece, e um background declarado dentro de
          uma media query que não casa nunca é requisitado. Ver .hero-arte. */}
      <div className="hero-arte" aria-hidden />

      <div className="container-page relative text-center">
        <h1
          className="hero-reveal gradient-text font-bold"
          style={{
            fontSize: "var(--text-hero)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}
        >
          {t("home_hero_title")}
        </h1>

        <p
          className="hero-reveal mx-auto mt-5 max-w-2xl font-semibold text-fg"
          style={{
            fontSize: "var(--text-lead)",
            animationDelay: "0.1s",
            // Sem isso a última palavra fica sozinha na segunda linha.
            textWrap: "balance",
          }}
        >
          {lang === "en" ? site.roleEn : site.role}
        </p>

        <div
          className="hero-reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-7"
          style={{ animationDelay: "0.2s" }}
        >
          <a href="#projetos" className="btn btn-primary btn-lg w-full sm:w-auto">
            {t("hero_btn_projects")}
            <ArrowRight className="h-5 w-5" aria-hidden />
          </a>
          {/* Sem ícone: o rótulo já diz o que o botão faz, e o par de botões
              fica mais limpo com só o primário carregando símbolo. */}
          <a href="#contato" className="btn btn-outline btn-lg w-full sm:w-auto">
            {t("hero_btn_contact")}
          </a>
        </div>
      </div>
    </section>
  )
}
