import { handleSmoothScroll } from '@/utils'
import { useEffect, useState } from 'react'

export const useScroll = () => {
  const [arrowReversed, setArrowReversed] = useState(false)

  const [lastScrollY, setLastScrollY] = useState(0)

  const handleArrowClick = () => {
    handleSmoothScroll(!arrowReversed ? '#about' : '#main')
    setArrowReversed((prev) => !prev)
  }

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY) {
      setArrowReversed(true)
    } else {
      setArrowReversed(false)
    }

    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    if (window.scrollY > 0) {
      setArrowReversed(true)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return { arrowReversed, handleArrowClick }
}
