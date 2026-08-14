"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
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

type Mockup = {
  src: string
  l: string
  /** Distância do topo do card. Alternativa a `b`. */
  t?: string
  /** Distância da base do card — usada quando o corte da imagem precisa cair
   *  exatamente na borda da moldura, em qualquer altura de card. */
  b?: string
  /** Empurrão vertical em % da altura da própria imagem, que sai da largura do
   *  card. Serve para alinhar o topo de recortes com sobras diferentes sem
   *  soltar a base da moldura. */
  dy?: string
  w: string
  ratio: string
}

type CardSpec = {
  slug: string
  span: string
  ratio: string
  padLeft: string
  /** Distância do topo até o título e daí até o corpo, em % da largura. */
  titleTop: string
  bodyGap: string
  textWidth: string
}

/**
 * Os três cards, na ordem do arquivo.
 *
 * Os recuos verticais e a largura da coluna de texto foram remedidos na
 * revisão do arquivo, e a régua é a mesma para os dois: o card só fecha na
 * proporção do desenho se o bloco de texto couber nela.
 *
 * O detalhe que muda tudo: o arquivo é desenhado em 1514 e o site renderiza
 * em 1120, mas a tipografia não encolhe junto — o corpo do card tem 17px aqui
 * contra os 20px do arquivo, que em escala dariam 14,6px. Texto 16% maior na
 * mesma coluna quebra em mais linhas e estufa o card; foi o que empurrou os
 * aparelhos para o meio da moldura, com uma faixa morta em cima. A saída é
 * alargar a coluna de texto até a linha voltar a quebrar como no desenho —
 * sobra espaço de sobra à esquerda dos aparelhos — e apertar os respiros
 * verticais, que estavam bem mais largos que os do arquivo.
 */
const CARDS: CardSpec[] = [
  {
    slug: "redesign-site-agromai",
    span: "sm:col-span-1",
    ratio: "737 / 395",
    padLeft: "7.87%",
    titleTop: "10.04%",
    bodyGap: "2.45%",
    textWidth: "56%",
  },
  {
    slug: "feed-me-app",
    span: "sm:col-span-1",
    ratio: "737 / 395",
    padLeft: "7.87%",
    titleTop: "10.04%",
    bodyGap: "2.45%",
    textWidth: "62%",
  },
  {
    slug: "redesign-app-itau",
    span: "sm:col-span-2",
    ratio: "1514 / 329",
    padLeft: "3.83%",
    titleTop: "2.38%",
    bodyGap: "1.06%",
    textWidth: "40%",
  },
]

/**
 * MacBook do card da Agromai (8:225): a moldura é uma imagem e a captura do
 * site entra atrás dela, na janela da tela. As duas peças são separadas no
 * arquivo e continuam separadas aqui.
 *
 * Preso pela base, não pelo topo. No arquivo o notebook encosta exatamente na
 * borda de baixo do card, e a moldura aqui é um pouco mais alta que a do
 * desenho — o texto tem tipografia maior e ocupa mais linhas. Preso pelo topo,
 * a sobra toda ia parar embaixo do aparelho e ele ficava boiando; preso pela
 * base, a sobra vira respiro em cima, que é onde ela não incomoda.
 */
function MockupAgromai() {
  return (
    <div
      className="pc-mockup"
      style={
        {
          "--l": "51.7%",
          "--b": "0%",
          "--w": "83.4%",
          "--w-sm": "78%",
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
 *
 * Largura e recuo são os do arquivo (23,9% e 68,4%). Também preso pela base,
 * e com 6,3% da própria altura de empurrão para baixo: no arquivo o aparelho
 * passa da borda do card e é cortado por ela — sem o empurrão ele encostaria
 * na base sem sangrar, e a borda de cima subiria acima da do notebook ao lado.
 */
function MockupFeedMe() {
  return (
    <div
      className="pc-mockup overflow-hidden"
      style={
        {
          "--l": "68.4%",
          "--b": "0%",
          "--dy": "6.3%",
          "--w": "23.88%",
          "--w-sm": "40%",
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

/**
 * Os três aparelhos do card do Itaú (8:238, 8:239 e 8:304).
 *
 * Presos pela base, e alinhados pelo topo do aparelho — não pelo da imagem. As
 * três exportações têm sobras diferentes: o PNG do início traz o celular
 * inteiro, com 20px de folga na esquerda e 46 no topo em 700 × 1430; os outros
 * dois já vêm cortados na base pela moldura do card, com 14 e 7 em 477 × 558.
 *
 * Os dois cortados encostam na borda de baixo (`b: 0`). O inteiro é bem mais
 * alto: encostando na base ele começaria 149px acima dos vizinhos, então leva
 * 40,9% da própria altura de empurrão para baixo — o tanto que põe a borda de
 * cima dos três na mesma linha e joga o resto dele para fora do card, como no
 * arquivo. A conta é em % da altura da imagem, que sai da largura do card, e
 * por isso o alinhamento se mantém em qualquer altura de moldura.
 *
 * As larguras são a do aparelho convertida para a da imagem — daí três valores
 * parecidos mas não iguais.
 */
const ITAU: Mockup[] = [
  {
    src: "/figma/projetos/itau-inicio.png",
    l: "48.49%",
    b: "0%",
    dy: "40.9%",
    w: "15.94%",
    ratio: "700 / 1430",
  },
  { src: "/figma/projetos/itau-duvidas.png", l: "65.06%", b: "0%", w: "15.75%", ratio: "477 / 558" },
  {
    src: "/figma/projetos/itau-atendimento.png",
    l: "81.64%",
    b: "0%",
    w: "15.68%",
    ratio: "477 / 558",
  },
]

function MockupItau() {
  return (
    <>
      {ITAU.map((m) => (
        <div
          key={m.src}
          className="pc-mockup"
          style={
            {
              "--l": m.l,
              "--t": m.t ?? "auto",
              "--b": m.b ?? "auto",
              "--dy": m.dy ?? "0",
              "--w": m.w,
              "--w-sm": "27%",
              aspectRatio: m.ratio,
            } as React.CSSProperties
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
  const { lang, t } = useLanguage()
  const en = lang === "en"
  const Mockup = MOCKUPS[card.slug]

  const title = en ? project.cardTitle_en ?? project.title : project.cardTitle ?? project.title
  const description = en
    ? project.cardDescription_en ?? project.description_en ?? project.description
    : project.cardDescription ?? project.description

  const inner = (
    <>
      {/* Carrega a proporção do arquivo. Divide a célula da grade com o texto,
          então o card fica com a altura do desenho — ou com a do texto, quando
          ele precisa de mais espaço. */}
      <div className="pc-espacador" aria-hidden />

      <div
        className="pc-texto"
        style={
          {
            "--pad-esq": card.padLeft,
            "--titulo-topo": card.titleTop,
            "--corpo-vao": card.bodyGap,
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
        {/* 1,45 e não 1,5: o arquivo usa 1,35 e o card é um bloco curto de
            apoio. Meio termo — a entrelinha aperta o suficiente para o card
            fechar na proporção do desenho sem endurecer a leitura. */}
        <p style={{ fontSize: "var(--text-card-body)", lineHeight: 1.45 }}>{description}</p>

        {/* Marcador de que o card é clicável. É um span, não um botão: o card
            inteiro já é o link, e um controle dentro de outro não é navegável
            por teclado nem anunciado corretamente. */}
        <span className="pc-cta">
          {t("home_projects_view_case")}
          <span className="pc-cta-icone" aria-hidden>
            <ArrowRight className="h-4 w-4" />
          </span>
        </span>
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

  // Um card só entra se existir o projeto e o mockup correspondentes: assim
  // uma edição em CARDS sem par em MOCKUPS deixa de derrubar a página.
  const cards = CARDS.map((card) => ({
    card,
    project: projects.find((p) => p.slug === card.slug),
  })).filter(
    (x): x is { card: CardSpec; project: Project } =>
      Boolean(x.project) && Boolean(MOCKUPS[x.card.slug])
  )

  return (
    <section id="projetos" className="section anchor-target">
      <div className="container-page">
        <header className="mx-auto mb-8 max-w-3xl text-center" data-animate>
          <h2
            className="font-bold"
            style={{
              fontSize: "var(--text-section)",
              lineHeight: 1.1,
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
        {/* Duas colunas já a partir de sm: em coluna única o card fica alto
            demais no tablet, com o texto solto numa faixa muito larga. */}
        <ul className="grid list-none grid-cols-1 gap-x-10 gap-y-8 p-0 sm:grid-cols-2 lg:gap-y-[61px]">
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
