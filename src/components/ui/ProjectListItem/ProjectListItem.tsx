import { projects } from '@/components/modules/ProjectsSection/projects.data'
import { useObserver } from '@/hooks/useObserver'
import { IProjectItemProps } from '@/types/props'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import DotsAnimation from '../DotsAnimation/DotsAnimation'
import Link from '../Link/Link'
import s from './ProjectListItem.module.scss'

const ProjectListItem: FC<IProjectItemProps> = ({ item, index }) => {
  const { t } = useTranslation()

  const ref = useRef<HTMLDivElement>(null)
  const { isVisible } = useObserver(ref)

  const isOdd = index % 2 !== 0
  const isNotLastItem = index + 1 < projects.length

  const dotsClass = `${isOdd ? 'right-[400px]' : 'left-[400px]'}`

  return (
    <li className={`relative ${isNotLastItem ? 'mb-[230px]' : ''}`}>
      <motion.div
        className={`flex flex-wrap 2xl:justify-around justify-center  ${isOdd ? 'flex-row-reverse' : ''}`}
        ref={ref}
        initial={{ opacity: 0, y: 75 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 75,
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`max-w-[530px] mb-[50px] max-h-[400px] ${s.corner} ${isOdd ? s.odd : s.even}`}
        >
          <Image
            src={item.img}
            alt={t(item.tKeyName)}
            className='rounded-[20px] h-full w-full object-cover'
          />
        </div>
        <div>
          <h4 className='text-white text-[30px] leading-[36px] font-semibold mb-[20px]'>
            <span className='inline-block mr-[30px]'>0{index + 1}</span>
            <span>{t(item.tKeyName)}</span>
          </h4>

          <p className='text-gray-secondary text-[16px] leading-[19px] font-normal max-w-[430px] mb-[30px] text-wrap'>
            {t(item.tKeyDesc)}.
          </p>

          <div className='mb-[50px] flex items-baseline'>
            <span className='text-white text-[14px] leading-[17px] font-normal mr-[15px]'>
              {t('projects.stack')}:
            </span>
            <ul className='flex'>
              {item.stack.map((item, index, arr) => (
                <li
                  key={item}
                  className='inline-block mr-[10px]'
                >{`${item} ${index + 1 < arr.length ? ',' : ''}`}</li>
              ))}
            </ul>
          </div>

          <Link
            link={item.link}
            text={t('projects.moreBtn')}
            hasIcon
            target='_blank'
            className='pl-[30px]'
          />
        </div>
      </motion.div>
      {isNotLastItem && (
        <DotsAnimation
          className={`2xl:bottom-[-100px] bottom-[-150px] ${dotsClass}`}
        />
      )}
    </li>
  )
}

export default ProjectListItem
