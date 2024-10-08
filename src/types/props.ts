import { skills } from '@/components/modules/AboutSection/skills.data'
import { companies } from '@/components/modules/ExperienceSection/companies.data'
import { projects } from '@/components/modules/ProjectsSection/projects.data'
import { HTMLAttributeAnchorTarget } from 'react'

export interface IHeadingWithBracketsProps {
  text: string
  className?: string
  isSectionTitle?: boolean
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
  className?: string
  dotColor?: string
}

export interface ISkillProps {
  item: (typeof skills)[0]
}

export interface IAnimatedLineProps {
  className?: string
}

export interface IWaveBackgroundProps extends IObserverProps {
  isLeftSide?: boolean
}

export interface IObserverProps {
  isVisible: boolean
}

export interface IProjectItemProps {
  item: (typeof projects)[0]
  index: number
}

export interface ICompanyListItemProps extends IObserverProps {
  item: (typeof companies)[0]
}
