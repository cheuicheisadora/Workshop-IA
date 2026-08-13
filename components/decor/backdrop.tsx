/**
 * Camada decorativa da página: glows roxos, anéis, partículas e ruído.
 *
 * Os assets originais do Figma (SVGs "Element", "bola testzinho" e a textura
 * de noise) não puderam ser baixados — as URLs do MCP respondem 403 a partir
 * deste ambiente. As formas foram reconstruídas em CSS/SVG a partir das
 * posições e dimensões lidas do arquivo.
 *
 * Puramente decorativa: aria-hidden, pointer-events none, nunca cobre CTA.
 */

/** Partículas: coordenadas do Figma (canvas 1920) convertidas para %. */
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

/** Anéis grandes (Figma: "bola testzinho", 495px). */
const RINGS = [
  { left: "-16%", top: "4%" },
  { left: "89%", top: "14%" },
  { left: "-16%", top: "52%" },
  { left: "84%", top: "70%" },
  { left: "-6%", top: "79%" },
]

/** Ruído gerado via feTurbulence — evita dependência de asset externo. */
const NOISE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="134" height="134"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="134" height="134" filter="url(#n)" opacity="0.5"/></svg>`

const NOISE_URL = `url("data:image/svg+xml,${encodeURIComponent(NOISE_SVG)}")`

export function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="decor absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Glow principal — atrás do hero, canto superior direito */}
      <div
        className="orb-a absolute"
        style={{
          top: "-14%",
          right: "-18%",
          width: "1100px",
          height: "900px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(151,111,204,0.42) 0%, rgba(151,111,204,0.12) 45%, rgba(151,111,204,0) 72%)",
        }}
      />
      {/* Glow secundário — esquerda, altura do hero */}
      <div
        className="orb-b absolute"
        style={{
          top: "6%",
          left: "-24%",
          width: "900px",
          height: "800px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(122,86,180,0.34) 0%, rgba(122,86,180,0.10) 48%, rgba(122,86,180,0) 74%)",
        }}
      />
      {/* Glow do miolo — atrás da grade de projetos */}
      <div
        className="orb-a absolute"
        style={{
          top: "44%",
          left: "52%",
          width: "1000px",
          height: "700px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(151,111,204,0.24) 0%, rgba(151,111,204,0) 70%)",
        }}
      />
      {/* Glow inferior — antes do footer */}
      <div
        className="orb-b absolute"
        style={{
          bottom: "2%",
          left: "-10%",
          width: "1000px",
          height: "760px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(151,111,204,0.30) 0%, rgba(151,111,204,0) 70%)",
        }}
      />

      {/* Anéis */}
      {RINGS.map((ring, i) => (
        <div
          key={`ring-${i}`}
          className="absolute rounded-full"
          style={{
            left: ring.left,
            top: ring.top,
            width: "495px",
            height: "495px",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        />
      ))}

      {/* Partículas */}
      {PARTICLES.map((p, i) => (
        <div
          key={`p-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.s}px`,
            height: `${p.s}px`,
            background: "rgba(255,255,255,0.55)",
            opacity: p.s > 5 ? 0.5 : 0.35,
          }}
        />
      ))}

      {/* Textura de ruído */}
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{ backgroundImage: NOISE_URL, opacity: 0.32 }}
      />
    </div>
  )
}
