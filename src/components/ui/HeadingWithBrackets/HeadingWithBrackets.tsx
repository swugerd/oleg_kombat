import { IHeadingWithBracketsProps } from '@/types/props'
import { FC } from 'react'
import s from './HeadingWithBrackets.module.scss'

const HeadingWithBrackets: FC<IHeadingWithBracketsProps> = ({
  text,
  className,
  isSectionTitle = false,
}) => {
  return (
    <span
      className={`${className || ''} ${s.title} ${isSectionTitle ? 'font-semibold sm:text-[42px] text-[28px] leading-[51px] text-white' : ''} `}
    >
      {text}
    </span>
  )
}

export default HeadingWithBrackets
