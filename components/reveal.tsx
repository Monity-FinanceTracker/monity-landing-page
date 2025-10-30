"use client"

import { HTMLAttributes, ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"

type Direction = "up" | "down" | "left" | "right" | "zoom"

type RevealProps = {
  children: ReactNode
  delayMs?: number
  direction?: Direction
  as?: keyof JSX.IntrinsicElements
} & HTMLAttributes<HTMLElement>

export function Reveal({
  children,
  delayMs = 0,
  direction = "up",
  as = "div",
  className = "",
  ...rest
}: RevealProps) {
  const { ref, isIntersecting } = useInView({ threshold: 0.15, once: true })

  const Tag = as as any

  const base = "reveal will-change-transform will-change-opacity"

  const dirClass =
    direction === "up"
      ? "reveal-up"
      : direction === "down"
      ? "reveal-down"
      : direction === "left"
      ? "reveal-left"
      : direction === "right"
      ? "reveal-right"
      : "reveal-zoom"

  return (
    <Tag
      ref={ref}
      className={`${base} ${dirClass} ${isIntersecting ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}


