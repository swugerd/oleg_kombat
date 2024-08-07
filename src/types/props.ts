import { HTMLAttributeAnchorTarget } from 'react'

export interface IHeadingWithBracketsProps {
  text: string
  className?: string
}

export interface ILinkProps {
  text: string
  hasIcon?: boolean
  className?: string
  link: string
  target?: HTMLAttributeAnchorTarget
}

export interface IBackgroundTextProps {
  text: string
  className?: string
}

export interface IDotsAnimationProps {
  color?: string
}
