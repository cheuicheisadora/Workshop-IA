"use client"

import { useEffect } from "react"

export function ScrollAnimateProvider() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.12 }
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    // Timeline stagger animation
    const tlObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".timeline-item")
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add("visible"), i * 120)
            })
            tlObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const timelines = document.querySelectorAll(".timeline")
    timelines.forEach((tl) => tlObserver.observe(tl))

    return () => {
      observer.disconnect()
      tlObserver.disconnect()
    }
  }, [])

  return null
}
