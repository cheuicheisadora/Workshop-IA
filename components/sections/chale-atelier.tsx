"use client"

import {
  conta,
  campanhaResultado,
  campanhaCusto,
  campanhaSecundaria,
  organico,
  interacoes,
  postDestaque,
  origemTrafego,
  type Metrica,
  type Fatia,
} from "@/data/chale"
import { useLanguage } from "@/context/language"

/**
 * Painel de resultados da Chalé Atelier.
 *
 * É um relatório, não um case de design — o que a seção precisa provar é
 * gestão de verba e leitura de métrica, então a composição inverte a
 * hierarquia do resto do site: aqui quem tem o maior corpo é o número, e o
 * rótulo entra como legenda embaixo.
 *
 * A ordem dos blocos é o argumento. Resultado da campanha primeiro, custo
 * logo abaixo na mesma moldura — ver "525 novos seguidores" e "R$ 226,18
 * investidos" juntos é o que mostra gestão de verba, e não só volume. Depois
 * a segunda campanha, com o custo por visita ao lado do da primeira, que é
 * onde a leitura de eficiência aparece. Só então o orgânico e o post de
 * destaque, que falam de conteúdo e não de mídia paga.
 *
 * Todos os valores vêm de data/chale.ts, transcritos do relatório. Nada é
 * somado nem derivado aqui.
 */

/** Uma métrica: número grande em cima, legenda embaixo. */
function Metrica({
  m,
  en,
  menor = false,
  regua = false,
}: {
  m: Metrica
  en: boolean
  /** Segundo patamar tipográfico, para os números de apoio. */
  menor?: boolean
  /** Régua vertical separando da métrica anterior. */
  regua?: boolean
}) {
  return (
    <div className={regua ? "metrica-regua" : undefined}>
      <p className={menor ? "metrica-valor-menor" : "metrica-valor gradient-text"}>
        {en ? m.valorEn : m.valor}
      </p>
      <p className="metrica-rotulo">{en ? m.rotuloEn : m.rotulo}</p>
    </div>
  )
}

/** Lista com uma barra por item, proporcional ao maior valor. */
function Barras({ fatias, en }: { fatias: Fatia[]; en: boolean }) {
  return (
    <ul className="mt-6 grid list-none gap-4 p-0">
      {fatias.map((f) => (
        <li key={f.rotulo}>
          <div className="flex items-baseline justify-between gap-4">
            <span style={{ fontSize: "var(--text-meta)" }}>
              {en ? f.rotuloEn : f.rotulo}
            </span>
            <span
              className="font-semibold"
              style={{ fontSize: "var(--text-meta)", fontVariantNumeric: "tabular-nums" }}
            >
              {en ? f.valorEn ?? f.valor : f.valor}
            </span>
          </div>
          <div className="barra-trilho mt-2">
            <div className="barra-preenchida" style={{ width: `${f.pct}%` }} />
          </div>
        </li>
      ))}
    </ul>
  )
}

export function ChaleAtelier() {
  const { lang, t } = useLanguage()
  const en = lang === "en"

  return (
    <section id="chale-atelier" className="section anchor-target">
      <div className="container-page">
        <header data-animate>
          <p className="case-rotulo">{t("chale_tag")}</p>
          <h2
            className="mt-3 font-bold"
            style={{
              fontSize: "var(--text-section)",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            {t("chale_heading")}
          </h2>
          <p
            className="mt-5 max-w-2xl text-fg-muted"
            style={{ fontSize: "var(--text-lead)", lineHeight: 1.6 }}
          >
            {t("chale_subtitle")}
          </p>
          <p className="mt-4 text-fg-subtle" style={{ fontSize: "var(--text-meta)" }}>
            {en ? conta.seguidoresEn : conta.seguidores} {en ? conta.rotuloEn : conta.rotulo}
          </p>
        </header>

        <hr className="mt-7 border-0 border-t" style={{ borderColor: "var(--hairline)" }} />

        {/* ── Campanha principal ──────────────────────────────── */}
        <div className="case-card case-resultados mt-10" data-animate>
          <p className="case-rotulo">{t("chale_campanha")}</p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-4">
            {campanhaResultado.map((m, i) => (
              <Metrica key={m.rotulo} m={m} en={en} regua={i > 0} />
            ))}
          </div>

          {/* O custo mora na mesma moldura do resultado: é a leitura junta
              que mostra gestão de verba. */}
          <hr
            className="my-8 border-0 border-t"
            style={{ borderColor: "var(--hairline)" }}
          />

          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
            {campanhaCusto.map((m, i) => (
              <Metrica key={m.rotulo} m={m} en={en} menor regua={i > 0} />
            ))}
          </div>
        </div>

        {/* ── Segunda campanha ────────────────────────────────── */}
        <div className="case-card mt-6" data-animate data-delay="1">
          <p className="case-rotulo">{t("chale_campanha_2")}</p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-4">
            {campanhaSecundaria.map((m, i) => (
              <Metrica key={m.rotulo} m={m} en={en} menor regua={i > 0} />
            ))}
          </div>
        </div>

        {/* ── Orgânico + post de destaque ─────────────────────── */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="case-card" data-animate data-delay="1">
            <p className="case-rotulo">{t("chale_organico")}</p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
              {organico.map((m, i) => (
                <Metrica key={m.rotulo} m={m} en={en} menor regua={i > 0} />
              ))}
            </div>

            <hr
              className="my-8 border-0 border-t"
              style={{ borderColor: "var(--hairline)" }}
            />

            <div className="flex items-baseline gap-3">
              <span className="metrica-valor-menor">
                {en ? interacoes.totalEn : interacoes.total}
              </span>
              <span className="metrica-rotulo" style={{ marginTop: 0 }}>
                {en ? interacoes.rotuloEn : interacoes.rotulo}
              </span>
            </div>
            <Barras fatias={interacoes.fatias} en={en} />
          </div>

          <div className="case-card" data-animate data-delay="2">
            <p className="case-rotulo">{t("chale_post")}</p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-4">
              {postDestaque.map((m, i) => (
                <Metrica key={m.rotulo} m={m} en={en} menor regua={i > 0 && i !== 3} />
              ))}
            </div>

            <hr
              className="my-8 border-0 border-t"
              style={{ borderColor: "var(--hairline)" }}
            />

            <p className="metrica-rotulo" style={{ marginTop: 0 }}>
              {t("chale_origem")}
            </p>
            <div className="barra-empilhada mt-4" role="presentation">
              {origemTrafego.map((f) => (
                <div key={f.rotulo} className="barra-fatia" style={{ width: `${f.pct}%` }} />
              ))}
            </div>
            <ul className="mt-4 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
              {origemTrafego.map((f) => (
                <li
                  key={f.rotulo}
                  className="flex items-baseline gap-2"
                  style={{ fontSize: "var(--text-meta)" }}
                >
                  <span className="text-fg-muted">{en ? f.rotuloEn : f.rotulo}</span>
                  <span
                    className="font-semibold"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {en ? f.valorEn ?? f.valor : f.valor}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
