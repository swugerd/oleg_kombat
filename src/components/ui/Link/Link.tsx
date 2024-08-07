import { ILinkProps } from '@/types/props'
import NextLink from 'next/link'
import { FC } from 'react'
import s from './Link.module.scss'

const Link: FC<ILinkProps> = ({
  text,
  className,
  hasIcon = false,
  link,
  target = '_blank',
}) => {
  return (
    <NextLink
      href={link}
      target={target}
      className={`${className || ''} ${
        hasIcon ? s.icon : ''
      } text-black bg-white py-[15px] px-[45px] rounded-[10px] block w-fit text-[16px] leading-[20px]
       font-semibold hover:opacity-70 transition-opacity`}
      rel='noopener noreferrer'
    >
      {text}
    </NextLink>
  )
}

export default Link
