import { IAnimatedLineProps } from '@/types/props'
import { FC } from 'react'
import s from './AnimatedLine.module.scss'

const AnimatedLine: FC<IAnimatedLineProps> = ({ className }) => {
  return (
    <div
      className={`absolute z-[15] bg-white block ${className ? s[className] : ''}`}
    ></div>
  )
}

export default AnimatedLine
