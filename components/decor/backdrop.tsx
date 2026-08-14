/**
 * Camada decorativa da página: manchas de gradiente, anéis, partículas e grão.
 *
 * Tudo aqui vem dos assets exportados do Figma (frame 0:53) e versionados em
 * `public/figma/`. Nada é redesenhado em CSS: os SVGs já trazem o gradiente e
 * o desfoque gaussiano do arquivo, e o grão é a textura original em PNG.
 *
 * Coordenadas: o Figma desenha num canvas de 1920 × 4595. Cada peça é
 * posicionada pelo centro em % do canvas, e dimensionada em vw a partir da
 * largura intrínseca do SVG — assim a composição escala junto com a viewport
 * em vez de quebrar fora de 1920.
 *
 * Puramente decorativa: aria-hidden, pointer-events none, nunca cobre CTA.
 *
 * Sem animação: as manchas são texturas de até 1660 × 1300px com desfoque
 * gaussiano dentro, e o grão por cima usa mix-blend-mode. Qualquer uma delas
 * em movimento obriga o navegador a recompor a pilha inteira a cada quadro —
 * medido em 23 fps no desktop, contra 60 com tudo parado. A deriva não pagava
 * esse preço.
 */

/** Largura do canvas do Figma, usada para converter px → vw. */
const CANVAS_W = 1920

/** px do canvas → vw. */
const vw = (px: number) => `${((px / CANVAS_W) * 100).toFixed(2)}vw`

type Glow = {
  /** Asset exportado (público, versionado). */
  src: string
  /** Largura e altura intrínsecas do SVG — definem tamanho e proporção. */
  w: number
  h: number
  /** Centro da peça em % do canvas do Figma. */
  cx: number
  cy: number
  /** Rotação/skew do nó no arquivo. */
  transform: string
}

/**
 * Manchas de gradiente ("Element"). Os retângulos vêm das caixas resolvidas
 * pelo Figma (left/right/bottom), não do x/y bruto do vetor, que é anterior à
 * rotação.
 */
const GLOWS: Glow[] = [
  {
    // 0:62 — mancha roxa atrás do hero.
    src: "/figma/glow-purple-wide.svg",
    w: 2216.34,
    h: 1157.29,
    cx: 48.8,
    cy: 5.5,
    transform: "rotate(-176.39deg) skewX(8.54deg)",
  },
  {
    // 0:63 — magenta alta, entre hero e projetos.
    src: "/figma/glow-magenta-tall.svg",
    w: 1603.02,
    h: 1526.07,
    cx: 53.1,
    cy: 28.7,
    transform: "scaleX(-1) rotate(176.39deg) skewX(8.54deg)",
  },
  {
    // 0:64 — magenta menor, sobreposta à anterior.
    src: "/figma/glow-magenta-small.svg",
    w: 1056.73,
    h: 928.601,
    cx: 38,
    cy: 33.9,
    transform: "scaleX(-1) rotate(176.39deg) skewX(8.54deg)",
  },
  {
    // 0:182 — roxa achatada, na altura de "Como eu trabalho".
    src: "/figma/glow-purple-flat.svg",
    w: 1383.64,
    h: 746.835,
    cx: 47.7,
    cy: 48.4,
    transform: "rotate(-177.19deg) skewX(9.13deg)",
  },
  {
    // 0:54 — magenta larga à esquerda, perto do rodapé.
    src: "/figma/glow-magenta-wide.svg",
    w: 1602.22,
    h: 1318.03,
    cx: 0.76,
    cy: 82.25,
    transform: "scaleX(-1) rotate(177.19deg) skewX(9.13deg)",
  },
  {
    // 0:55 — mesma mancha espelhada à direita.
    src: "/figma/glow-magenta-wide.svg",
    w: 1602.22,
    h: 1318.03,
    cx: 81.5,
    cy: 90,
    transform: "scaleX(-1) rotate(177.19deg) skewX(9.13deg)",
  },
]

/** Anéis de 495 px ("bola testzinho" 0:110–0:114), pelo canto superior esquerdo. */
const RINGS = [
  { left: 89.2, top: 13.9 },
  { left: -16.3, top: 51.9 },
  { left: -16.5, top: 4.7 },
  { left: 83.5, top: 69.8 },
  { left: -5.6, top: 79.4 },
]

/** Partículas (Ellipse 2–47): coordenadas do Figma convertidas para %. */
const PARTICLES = [
  { x: 7.8, y: 4.6, s: 7 },
  { x: 26.9, y: 5.4, s: 7 },
  { x: 39.5, y: 6.9, s: 7 },
  { x: 42.9, y: 4.4, s: 4 },
  { x: 52.1, y: 6.0, s: 7 },
  { x: 70.1, y: 4.4, s: 7 },
  { x: 76.1, y: 8.2, s: 4 },
  { x: 87.4, y: 4.6, s: 7 },
  { x: 18.0, y: 12.4, s: 7 },
  { x: 27.1, y: 11.8, s: 7 },
  { x: 48.6, y: 17.4, s: 7 },
  { x: 85.2, y: 16.1, s: 4 },
  { x: 87.6, y: 10.9, s: 7 },
  { x: 17.8, y: 18.9, s: 7 },
  { x: 52.0, y: 19.9, s: 4 },
  { x: 3.3, y: 26.1, s: 7 },
  { x: 35.0, y: 28.4, s: 7 },
  { x: 38.4, y: 26.0, s: 4 },
  { x: 47.6, y: 27.6, s: 7 },
  { x: 71.6, y: 29.8, s: 4 },
  { x: 13.5, y: 34.0, s: 7 },
  { x: 13.3, y: 40.4, s: 7 },
  { x: 66.6, y: 62.1, s: 7 },
  { x: 91.7, y: 47.7, s: 4 },
  { x: 75.7, y: 48.6, s: 7 },
  { x: 3.3, y: 66.6, s: 7 },
  { x: 47.6, y: 68.0, s: 7 },
  { x: 35.0, y: 68.9, s: 7 },
  { x: 38.4, y: 66.4, s: 4 },
  { x: 71.6, y: 70.2, s: 4 },
  { x: 13.5, y: 74.4, s: 7 },
  { x: 13.3, y: 80.9, s: 7 },
  { x: 75.7, y: 89.1, s: 7 },
  { x: 75.9, y: 95.5, s: 7 },
]

export function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="decor absolute inset-0 -z-10 overflow-hidden"
    >
      {GLOWS.map((glow, i) => (
        <div
          key={`glow-${i}`}
          className="glow-anchor"
          style={{ left: `${glow.cx}%`, top: `${glow.cy}%` }}
        >
          <div
            className="glow"
            style={{
              width: vw(glow.w),
              aspectRatio: `${glow.w} / ${glow.h}`,
              backgroundImage: `url("${glow.src}")`,
              transform: glow.transform,
            }}
          />
        </div>
      ))}

      {/* Grupo "Noise - 1": no arquivo ele inteiro está a 50% de opacidade. */}
      <div className="absolute inset-0 opacity-50">
        {RINGS.map((ring, i) => (
          <div
            key={`ring-${i}`}
            className="ring-decor"
            style={{ left: `${ring.left}%`, top: `${ring.top}%` }}
          />
        ))}

        {PARTICLES.map((p, i) => (
          <div
            key={`p-${i}`}
            className="absolute"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.s}px`,
              height: `${p.s}px`,
              backgroundImage: `url("/figma/dot-${p.s}.svg")`,
              backgroundSize: "100% 100%",
            }}
          />
        ))}
      </div>

      {/* Grão: textura original do Figma (0:115), overlay a 64% dentro de um
          grupo a 50% — 0,32 no total. Fica fora do grupo acima porque
          mix-blend-mode dentro de um elemento com opacity não alcança o fundo
          da página. */}
      <div className="grain" />
    </div>
  )
}
