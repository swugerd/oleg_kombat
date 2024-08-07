import { useEffect, useState } from 'react'

export const useAnimateText = (text: string) => {
  const [animatedText, setAnimatedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setInterval(() => {
        setAnimatedText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, 100)

      return () => clearInterval(timer)
    } else {
      setIndex(0)
      setAnimatedText('')
    }
  }, [index, text])

  return { animatedText }
}
