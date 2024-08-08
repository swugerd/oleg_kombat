import { RefObject, useEffect, useState } from 'react'

export const useObserver = <T>(ref: RefObject<T>) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current as unknown as Element)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current as unknown as Element)
      }
    }
  }, [ref])

  return { isVisible }
}
