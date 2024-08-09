'use client'

import photo from '@/../public/img/my-photo.jpg'
import BackgroundText from '@/components/ui/BackgroundText/BackgroundText'
import { bgFunctionsTexts } from '@/components/ui/BackgroundText/bgFunctionText.data'
import DotsAnimation from '@/components/ui/DotsAnimation/DotsAnimation'
import HeadingWithBrackets from '@/components/ui/HeadingWithBrackets/HeadingWithBrackets'
import Skill from '@/components/ui/Skill/Skill'
import { useObserver } from '@/hooks/useObserver'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import s from './AboutSection.module.scss'
import { skills } from './skills.data'

const AboutSection = () => {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const { isVisible } = useObserver(sectionRef)

  return (
    <section
      className={`py-[85px] bg-black-secondary relative overflow-x-hidden`}
      id='about'
      ref={sectionRef}
    >
      <div className='container mx-auto'>
        <HeadingWithBrackets
          isSectionTitle
          text={t('titles.about')}
          className='mb-[150px] block text-center'
        />
        <div className='flex justify-around mb-[50px]'>
          <Image
            src={photo}
            alt='My photo'
            width={470}
            height={550}
            className='rounded-[20px]'
          />
          <div className='max-w-[580px]'>
            <h3
              className={`text-white font-extrabold text-[30px] leading-[36px] mb-[30px] ${s.quote}`}
            >
              {t('about.title')}
            </h3>
            <p className='text-[18px] leading-[27px] mb-[30px] text-gray font-normal'>
              {t('about.description')}.
            </p>
            <p className='text-[18px] leading-[27px] text-gray font-normal'>
              {t('about.subDescription')}.
            </p>
          </div>
        </div>
        <div>
          <p className='text-[18px] leading-[27px] mb-[50px] text-gray font-normal'>
            {t('about.skills')}.
          </p>
          <AnimatePresence>
            <motion.ul
              transition={{ duration: 0.5 }}
              className='flex flex-wrap justify-center'
            >
              {skills.map((item) => (
                <Skill item={item} key={item.title} />
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
      {isVisible && (
        <BackgroundText
          text={bgFunctionsTexts[2]}
          className='absolute top-[110px] left-[120px] max-h-[150px] overflow-y-auto'
        />
      )}
      <DotsAnimation
        className='bottom-[50%] right-[-100px]'
        dotColor='bg-gray-secondary'
      />
    </section>
  )
}

export default AboutSection
