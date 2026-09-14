"use client"

import { ChaleAtelier } from "@/components/sections/chale-atelier"

/**
 * Rota da página de growth. Fina de propósito: a composição inteira mora no
 * componente, como nas páginas de case.
 *
 * Não exporta `metadata` porque é client component — o idioma vem do provider
 * e o conteúdo troca em tempo de execução. Vale o metadata da raiz, como nas
 * outras páginas do site.
 */
export default function ChaleAtelierPage() {
  return <ChaleAtelier />
}
