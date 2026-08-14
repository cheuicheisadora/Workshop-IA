"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Revelação no scroll.
 *
 * Marca [data-animate] com data-observed só depois que o JS assume, para que
 * sem JS (ou antes da hidratação) o conteúdo continue visível. Não faz nada se
 * o usuário pediu movimento reduzido.
 *
 * Havia aqui um pausador de animações em loop, para não deixar nada girando
 * fora da viewport ou com a aba escondida. Ele observava as manchas do fundo,
 * que pararam de animar por custarem 35 fps, e depois só a seta do hero. Sem a
 * seta não sobrou nenhum loop na página, e o pausador saiu junto.
 */
export function ScrollAnimateProvider() {
  const pathname = usePathname()

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    )

    let revealObserver: IntersectionObserver | undefined

    if (!prefersReduced) {
      revealTargets.forEach((el) => el.setAttribute("data-observed", ""))

      revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible")
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      )

      revealTargets.forEach((el) => revealObserver?.observe(el))
    }

    return () => {
      revealObserver?.disconnect()
    }
  }, [pathname])

  return null
}
