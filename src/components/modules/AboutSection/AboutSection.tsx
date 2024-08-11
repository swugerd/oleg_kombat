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
      className={`sm:py-[85px] py-[50px] bg-black-secondary relative overflow-hidden`}
      id='about'
      ref={sectionRef}
    >
      <div className='container mx-auto'>
        <HeadingWithBrackets
          isSectionTitle
          text={t('titles.about')}
          className='lg:mb-[150px] sm:mb-[100px] mb-[50px] block text-center'
        />
        <div className='flex justify-between lg:items-start items-center lg:flex-row flex-col-reverse mb-[50px]'>
          <Image
            src={photo}
            alt='My photo'
            width={470}
            height={550}
            className='rounded-[20px] lg:mr-[75px] mt-[50px] relative z-[1000] md:h-[550px] h-[400px] object-cover'
          />
          <div className='max-w-[850px]'>
            <h3
              className={`text-white font-extrabold sm:text-[30px] text-[20px] leading-[36px] mb-[30px] ${s.quote}`}
            >
              {t('about.title')}
            </h3>
            <p className='sm:text-[18px] text-[16px] leading-[27px] mb-[30px] text-gray font-normal'>
              {t('about.description')}.
            </p>
            <p className='sm:text-[18px] text-[16px] leading-[27px] text-gray font-normal'>
              {t('about.subDescription')}.
            </p>
          </div>
        </div>
        <div>
          <p className='sm:text-[18px] text-[16px] leading-[27px] sm:mb-[50px] mb-[30px] text-gray font-normal'>
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
          className='absolute top-[110px] left-[120px] max-h-[150px] overflow-y-auto lg:block hidden'
        />
      )}
      <DotsAnimation
        className='bottom-[50%] right-[-100px] sm:block hidden'
        dotColor='bg-gray-secondary'
      />
    </section>
  )
}

export default AboutSection
