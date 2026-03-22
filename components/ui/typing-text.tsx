"use client"

import { useEffect, useRef, useState } from "react"

export type TextSegment = { text: string; bold?: boolean }

interface TypingTextProps {
  paragraphs: TextSegment[][]
  speed?: number   // ms per tick
  step?: number    // chars per tick
  className?: string
  paragraphClassName?: string
}

function computeCursor(paragraphs: TextSegment[][], count: number) {
  let remaining = count
  for (let pi = 0; pi < paragraphs.length; pi++) {
    for (let si = 0; si < paragraphs[pi].length; si++) {
      const len = paragraphs[pi][si].text.length
      if (remaining <= len) return { pi, si, charIndex: remaining }
      remaining -= len
    }
  }
  return null
}

export function TypingText({
  paragraphs,
  speed = 16,
  step = 3,
  className,
  paragraphClassName = "mb-6 last:mb-0",
}: TypingTextProps) {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const total = paragraphs.flat().reduce((s, seg) => s + seg.text.length, 0)
  const done = count >= total

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!active || done) return
    const id = setTimeout(() => setCount(c => Math.min(c + step, total)), speed)
    return () => clearTimeout(id)
  }, [active, count, done, speed, step, total])

  const cursor = done ? null : computeCursor(paragraphs, count)

  let charsLeft = count

  return (
    <div ref={ref} className={className}>
      {paragraphs.map((para, pi) => {
        const paraTotal = para.reduce((s, seg) => s + seg.text.length, 0)
        if (charsLeft <= 0) return null

        const paraVisible = Math.min(charsLeft, paraTotal)
        charsLeft -= paraVisible
        let segBudget = paraVisible

        return (
          <p key={pi} className={paragraphClassName}>
            {para.map((seg, si) => {
              if (segBudget <= 0) return null
              const visible = Math.min(segBudget, seg.text.length)
              segBudget -= visible
              const text = seg.text.slice(0, visible)
              const isCursorHere = cursor?.pi === pi && cursor?.si === si

              return (
                <span key={si}>
                  {seg.bold
                    ? <strong className="font-semibold text-foreground">{text}</strong>
                    : text}
                  {isCursorHere && (
                    <span
                      aria-hidden
                      style={{
                        display: "inline-block",
                        width: "2px",
                        height: "1em",
                        background: "var(--primary-deep)",
                        marginLeft: "1px",
                        verticalAlign: "text-bottom",
                        animation: "typing-blink 0.75s step-end infinite",
                      }}
                    />
                  )}
                </span>
              )
            })}
          </p>
        )
      })}
    </div>
  )
}
