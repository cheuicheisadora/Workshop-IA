"use client"

import Link from "next/link"
import Image from "next/image"
import { projects, type Project } from "@/data/projects"
import { useLanguage } from "@/context/language"

/**
 * Grade de projetos — frame 8:64 do Figma (grade 8:220).
 *
 * Três cards de vidro escuro: dois na primeira linha e um ocupando as duas
 * colunas na segunda. Cada um mostra o projeto num mockup de aparelho que
 * sangra para fora da moldura e é cortado por ela.
 *
 * Medidas: o arquivo desenha a grade em 1514 × 785 — cards de 737 × 395 na
 * linha 1 e de 1514 × 329 na linha 2, com gaps de 40 e 61. Tudo aqui é % dessas
 * caixas, então a composição escala junto com o container em vez de depender
 * da largura de 1514.
 *
 * Abaixo de lg a grade vira uma coluna e o mockup sai do posicionamento
 * absoluto para uma faixa embaixo do texto: o arquivo não tem versão mobile, e
 * sobrepor aparelho e texto num card estreito não se lê.
 */

type Mockup = { src: string; l: string; t: string; w: string; ratio: string }

type CardSpec = {
  slug: string
  span: string
  ratio: string
  padLeft: string
  titleTop: string
  bodyTop: string
  textWidth: string
}

/** Os três cards, na ordem do arquivo. */
const CARDS: CardSpec[] = [
  {
    slug: "redesign-site-agromai",
    span: "lg:col-span-1",
    ratio: "737 / 395",
    padLeft: "7.73%",
    titleTop: "23.3%",
    bodyTop: "40.5%",
    textWidth: "50.5%",
  },
  {
    slug: "feed-me-app",
    span: "lg:col-span-1",
    ratio: "737 / 395",
    padLeft: "7.73%",
    titleTop: "23.3%",
    bodyTop: "40.5%",
    textWidth: "54.3%",
  },
  {
    slug: "redesign-app-itau",
    span: "lg:col-span-2",
    ratio: "1514 / 329",
    padLeft: "3.76%",
    titleTop: "28%",
    bodyTop: "48.6%",
    textWidth: "26.9%",
  },
]

/**
 * MacBook do card da Agromai (8:225): a moldura é uma imagem e a captura do
 * site entra atrás dela, na janela da tela. As duas peças são separadas no
 * arquivo e continuam separadas aqui.
 */
function MockupAgromai() {
  return (
    <div
      className="pc-mockup"
      style={
        {
          "--l": "51.7%",
          "--t": "6.3%",
          "--w": "83.4%",
          aspectRatio: "614.43 / 364.224",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute"
        style={{ left: "12.45%", right: "13.02%", top: "8.12%", aspectRatio: "1425 / 900" }}
      >
        <Image
          src="/figma/projetos/agromai-tela.jpg"
          alt=""
          fill
          sizes="(max-width: 1024px) 60vw, 40vw"
          className="object-cover"
        />
      </div>
      <Image
        src="/figma/projetos/macbook-air.png"
        alt=""
        fill
        sizes="(max-width: 1024px) 70vw, 45vw"
        className="object-contain"
      />
    </div>
  )
}

/**
 * Celular do FeedMe (8:233): uma imagem só, ampliada e deslocada dentro de uma
 * caixa que corta — os mesmos 233,33% × 124,23% do arquivo.
 */
function MockupFeedMe() {
  return (
    <div
      className="pc-mockup overflow-hidden"
      style={
        {
          "--l": "68.4%",
          "--t": "23.3%",
          "--w": "23.88%",
          aspectRatio: "176 / 363",
          borderRadius: "clamp(10px, 1.7vw, 25px)",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute"
        style={{ left: "-66.7%", top: "-5.32%", width: "233.33%", height: "124.23%" }}
      >
        <Image
          src="/figma/projetos/feedme-tela.jpg"
          alt=""
          fill
          sizes="(max-width: 1024px) 40vw, 20vw"
          className="object-cover"
        />
      </div>
    </div>
  )
}

/** Os três aparelhos do card do Itaú (8:238, 8:239 e 8:304). */
const ITAU: Mockup[] = [
  { src: "/figma/projetos/itau-inicio.png", l: "44.32%", t: "21.6%", w: "15.98%", ratio: "242 / 494" },
  { src: "/figma/projetos/itau-duvidas.png", l: "60.9%", t: "25.4%", w: "15.75%", ratio: "477 / 558" },
  { src: "/figma/projetos/itau-atendimento.png", l: "77.4%", t: "25.4%", w: "15.75%", ratio: "477 / 558" },
]

function MockupItau() {
  return (
    <>
      {ITAU.map((m) => (
        <div
          key={m.src}
          className="pc-mockup"
          style={
            { "--l": m.l, "--t": m.t, "--w": m.w, aspectRatio: m.ratio } as React.CSSProperties
          }
        >
          <Image
            src={m.src}
            alt=""
            fill
            sizes="(max-width: 1024px) 30vw, 16vw"
            className="object-contain object-top"
          />
        </div>
      ))}
    </>
  )
}

const MOCKUPS: Record<string, () => React.ReactElement> = {
  "redesign-site-agromai": MockupAgromai,
  "feed-me-app": MockupFeedMe,
  "redesign-app-itau": MockupItau,
}

function ProjectCard({ project, card }: { project: Project; card: CardSpec }) {
  const { lang } = useLanguage()
  const en = lang === "en"
  const Mockup = MOCKUPS[card.slug]

  const title = en ? project.cardTitle_en ?? project.title : project.cardTitle ?? project.title
  const description = en
    ? project.cardDescription_en ?? project.description_en ?? project.description
    : project.cardDescription ?? project.description

  const inner = (
    <>
      <div
        className="pc-texto"
        style={
          {
            "--pad-esq": card.padLeft,
            "--titulo-topo": card.titleTop,
            "--corpo-topo": card.bodyTop,
            "--largura-texto": card.textWidth,
          } as React.CSSProperties
        }
      >
        <h3
          className="font-bold"
          style={{ fontSize: "var(--text-card-title)", letterSpacing: "-0.01em", lineHeight: 1.2 }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "var(--text-card-body)", lineHeight: 1.5 }}>{description}</p>
      </div>

      <div className="pc-palco" aria-hidden>
        <Mockup />
      </div>
    </>
  )

  const className = `project-card ${card.span}`
  // A proporção do arquivo só vale de lg para cima; abaixo disso o card cresce
  // com o texto. Vai como custom property para a media query decidir.
  const style = { "--ratio": card.ratio } as React.CSSProperties

  // Projeto sem página interna abre o link externo, como no card antigo.
  if (project.externalUrl && !project.behanceUrl) {
    return (
      <a
        href={project.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link href={`/projetos/${project.slug}`} className={className} style={style}>
      {inner}
    </Link>
  )
}

export function Projects() {
  const { t } = useLanguage()

  const cards = CARDS.map((card) => ({
    card,
    project: projects.find((p) => p.slug === card.slug),
  })).filter((x): x is { card: CardSpec; project: Project } => Boolean(x.project))

  return (
    <section id="projetos" className="section anchor-target">
      <div className="container-page">
        <header className="mx-auto mb-8 max-w-3xl text-center" data-animate>
          <h2
            className="font-bold"
            style={{
              fontSize: "var(--text-section)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            {t("projects_heading")}
          </h2>
          {/* 8:219: neste frame o subtítulo subiu de 16 para 20px. */}
          <p className="mt-7 text-fg" style={{ fontSize: "var(--text-lead)", lineHeight: 1.44 }}>
            {t("projects_subtitle")}
          </p>
        </header>

        {/* Gaps do arquivo: 40px entre colunas, 61px entre linhas. */}
        <ul className="grid list-none grid-cols-1 gap-x-10 gap-y-8 p-0 lg:grid-cols-2 lg:gap-y-[61px]">
          {cards.map(({ card, project }, i) => (
            <li
              key={project.id}
              className={`flex ${card.span}`}
              data-animate
              data-delay={String(i + 1)}
            >
              <ProjectCard project={project} card={card} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
