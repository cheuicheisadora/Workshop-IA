"use client"

import { Download } from "lucide-react"
import { workPrinciples } from "@/data/work"
import { site } from "@/data/site"
import { useLanguage } from "@/context/language"

/**
 * "Como eu trabalho".
 *
 * O Figma traz a segunda linha ocupando as colunas 1 e 4 e deixando o miolo
 * vazio — grade quebrada. Aqui é uma grade regular de 3 colunas por 2 linhas
 * no desktop, 2 no tablet e 1 no mobile.
 */
export function HowIWork() {
  const { lang, t } = useLanguage()
  const en = lang === "en"

  return (
    <section id="como-eu-trabalho" className="section anchor-target">
      <div className="container-page">
        <h2
          className="font-bold"
          style={{
            fontSize: "var(--text-section)",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
          data-animate
        >
          {t("work_heading")}
        </h2>

        <hr
          className="mt-7 border-0 border-t"
          style={{ borderColor: "var(--hairline)" }}
        />

        <ul className="mt-12 grid list-none grid-cols-1 gap-x-8 gap-y-12 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {workPrinciples.map((item, i) => (
            <li
              key={item.id}
              data-animate
              data-delay={String((i % 3) + 1)}
              className="flex flex-col gap-4"
            >
              <h3
                className="font-semibold"
                style={{ fontSize: "var(--text-item-title)", lineHeight: 1.35 }}
              >
                {en ? item.title_en : item.title}
              </h3>
              <p className="text-fg-muted" style={{ lineHeight: 1.8 }}>
                {en ? item.description_en : item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex justify-center">
          <a
            href={en ? site.resumeEn : site.resume}
            download
            className="btn btn-primary btn-lg"
          >
            {t("home_work_cta")}
            <Download className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
