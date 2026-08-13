/**
 * Camada decorativa da página: manchas de gradiente, anéis, partículas e grão.
 *
 * Os assets originais do Figma (os vetores "Element", os círculos e a textura
 * de noise) não puderam ser baixados: o egress do ambiente bloqueia
 * www.figma.com ("Host not in allowlist"). Enquanto o host não é liberado, as
 * formas são reconstruídas em CSS a partir das posições, tamanhos e rotações
 * lidas do arquivo.
 *
 * Puramente decorativa: aria-hidden, pointer-events none, nunca cobre CTA.
 */

/** Partículas: coordenadas do Figma (canvas 1920 × 4581) convertidas para %. */
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

/** Anéis grandes (Figma: "bola testzinho", 495 px). */
const RINGS = [
  { left: "-16%", top: "3%", size: 495 },
  { left: "88%", top: "13%", size: 495 },
  { left: "-17%", top: "51%", size: 495 },
  { left: "83%", top: "69%", size: 495 },
  { left: "-6%", top: "79%", size: 495 },
]

/**
 * Manchas de gradiente. Cada uma é uma forma irregular borrada — a rotação
 * e o skew vêm dos vetores "Element" do arquivo, que estão girados ~177°.
 */
const BLOBS = [
  {
    shape: "blob-1",
    anim: "orb-a",
    style: {
      top: "-10%",
      right: "-14%",
      width: "58vw",
      height: "46vw",
      maxWidth: "1120px",
      maxHeight: "880px",
      background:
        "linear-gradient(135deg, #A87BE0 0%, #7B4FBF 45%, #3C2270 100%)",
      opacity: 0.42,
      transform: "rotate(-8deg) skewX(6deg)",
    },
  },
  {
    shape: "blob-2",
    anim: "orb-b",
    style: {
      top: "2%",
      left: "-22%",
      width: "52vw",
      height: "44vw",
      maxWidth: "980px",
      maxHeight: "820px",
      background:
        "linear-gradient(120deg, #6E45A8 0%, #4A2A7A 55%, #1B1140 100%)",
      opacity: 0.5,
      transform: "rotate(12deg)",
    },
  },
  {
    shape: "blob-3",
    anim: "orb-a",
    style: {
      top: "24%",
      left: "22%",
      width: "44vw",
      height: "30vw",
      maxWidth: "820px",
      maxHeight: "560px",
      background:
        "linear-gradient(90deg, #8C63C9 0%, #5B3A9B 60%, transparent 100%)",
      opacity: 0.22,
      transform: "rotate(-4deg)",
    },
    hideSm: true,
  },
  {
    shape: "blob-4",
    anim: "orb-b",
    style: {
      top: "48%",
      right: "-16%",
      width: "50vw",
      height: "36vw",
      maxWidth: "940px",
      maxHeight: "680px",
      background:
        "linear-gradient(200deg, #9670D0 0%, #4E2E86 50%, #221247 100%)",
      opacity: 0.3,
      transform: "rotate(16deg) skewY(-5deg)",
    },
    hideSm: true,
  },
  {
    shape: "blob-2",
    anim: "orb-a",
    style: {
      bottom: "-2%",
      left: "-14%",
      width: "54vw",
      height: "40vw",
      maxWidth: "1000px",
      maxHeight: "760px",
      background:
        "linear-gradient(60deg, #A177DB 0%, #5C3699 50%, #241450 100%)",
      opacity: 0.38,
      transform: "rotate(-14deg)",
    },
  },
]

/**
 * Grão de filme. feColorMatrix dessatura o feTurbulence — sem isso o ruído
 * sai colorido e suja o fundo em vez de granular.
 */
const GRAIN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="134" height="134"><filter id="g" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="134" height="134" filter="url(#g)"/></svg>`

const GRAIN_URL = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`

export function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="decor absolute inset-0 -z-10 overflow-hidden"
    >
      {BLOBS.map((blob, i) => (
        <div
          key={`blob-${i}`}
          className={`blob ${blob.shape} ${blob.anim}${
            blob.hideSm ? " blob-hide-sm" : ""
          }`}
          style={blob.style}
        />
      ))}

      {RINGS.map((ring, i) => (
        <div
          key={`ring-${i}`}
          className="absolute rounded-full"
          style={{
            left: ring.left,
            top: ring.top,
            width: ring.size,
            height: ring.size,
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        />
      ))}

      {PARTICLES.map((p, i) => (
        <div
          key={`p-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.s}px`,
            height: `${p.s}px`,
            background: "rgba(255,255,255,0.6)",
            opacity: p.s > 5 ? 0.45 : 0.3,
          }}
        />
      ))}

      <div className="vignette" />
      <div className="grain" style={{ backgroundImage: GRAIN_URL }} />
    </div>
  )
}
