"use client"

import { useEffect, useRef, useState } from "react"

export type UseInViewOptions = {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
}

export function useInView<T extends HTMLElement>(options: UseInViewOptions = {}) {
  const { root = null, rootMargin = "0px", threshold = 0.2, once = true } = options
  const ref = useRef<T | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setIsIntersecting(false)
          }
        })
      },
      { root, rootMargin, threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [root, rootMargin, threshold, once])

  return { ref, isIntersecting }
}


