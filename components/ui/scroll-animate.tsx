"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Revelação no scroll + gestão de animações em loop.
 *
 * - Marca [data-animate] com data-observed só depois que o JS assume, para que
 *   sem JS (ou antes da hidratação) o conteúdo continue visível.
 * - Pausa as animações decorativas fora da viewport e com a aba oculta.
 * - Não faz nada se o usuário pediu movimento reduzido.
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

    // ── Pausa de animações em loop ──────────────────────────────
    const looping = Array.from(
      document.querySelectorAll<HTMLElement>(".orb-a, .orb-b, .scroll-hint")
    )

    const visibility = new WeakMap<HTMLElement, boolean>()

    const applyPause = () => {
      const hidden = document.hidden
      looping.forEach((el) => {
        const onScreen = visibility.get(el) ?? true
        el.classList.toggle("is-paused", hidden || !onScreen)
      })
    }

    const loopObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target as HTMLElement, entry.isIntersecting)
        })
        applyPause()
      },
      { threshold: 0 }
    )

    looping.forEach((el) => loopObserver.observe(el))
    document.addEventListener("visibilitychange", applyPause)
    applyPause()

    return () => {
      revealObserver?.disconnect()
      loopObserver.disconnect()
      document.removeEventListener("visibilitychange", applyPause)
    }
  }, [pathname])

  return null
}
