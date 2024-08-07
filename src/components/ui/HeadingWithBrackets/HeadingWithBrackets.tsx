import { IHeadingWithBracketsProps } from '@/types/props'
import { FC } from 'react'
import s from './HeadingWithBrackets.module.scss'

const HeadingWithBrackets: FC<IHeadingWithBracketsProps> = ({
  text,
  className,
}) => {
  return <span className={`${className || ''} ${s.title} `}>{text}</span>
}

export default HeadingWithBrackets
