import { useAnimateText } from '@/hooks/useAnimateText'
import { IBackgroundTextProps } from '@/types/props'
import { FC, useEffect, useRef } from 'react'
import s from './BackgroundText.module.scss'

const BackgroundText: FC<IBackgroundTextProps> = ({ text, className }) => {
  const { animatedText } = useAnimateText(text)
  const ref = useRef<HTMLPreElement>(null)

  console.log('da')

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [animatedText])

  return (
    <pre ref={ref} className={`${className} ${s.scroll}`}>
      {animatedText}
    </pre>
  )
}

export default BackgroundText
