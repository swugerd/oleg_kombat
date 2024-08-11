'use client'
import AnimatedLine from '@/components/ui/AnimatedLine/AnimatedLine'
import BackgroundText from '@/components/ui/BackgroundText/BackgroundText'
import { bgFunctionsTexts } from '@/components/ui/BackgroundText/bgFunctionText.data'
import DotsAnimation from '@/components/ui/DotsAnimation/DotsAnimation'
import Link from '@/components/ui/Link/Link'
import MainTitle from '@/components/ui/MainTitle/MainTitle'
import SocialsList from '@/components/ui/SocialsList/SocialsList'
import WaveBackground from '@/components/ui/WaveBackground/WaveBackground'
import { useObserver } from '@/hooks/useObserver'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const MainSection = () => {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const { isVisible } = useObserver(sectionRef)
  const [resumeLink, setResumeLink] = useState('/files/ru/resume.pdf')

  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'ru'
    setResumeLink(`/files/${lang}/resume.pdf`)
  }, [t])

  return (
    <section
      className={`h-[100vh] container m-auto`}
      ref={sectionRef}
      id='main'
    >
      <SocialsList isVisible={isVisible} />
      <div className='lg:pt-[240px] pt-[15vh] lg:pl-[200px] sm:pl-[150px] pl-[50px]'>
        <MainTitle isVisible={isVisible} />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={isVisible ? { duration: 1, delay: 1 } : {}}
          >
            <h2 className='text-gray font-normal leading-[26px] tracking-[1px] sm:text-[18px] text-[14px] max-w-[500px] sm:mb-[75px] mb-[30px]'>
              {t('main.description')}
            </h2>
            <Link
              text={t('main.resumeBtn')}
              link={resumeLink}
              className='sm:ms-0 mx-auto'
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatedLine className={isVisible ? 'line1' : ''} />
      <AnimatedLine className={isVisible ? 'line2' : ''} />
      <AnimatedLine className={isVisible ? 'line3' : ''} />

      <WaveBackground isVisible={isVisible} />

      {isVisible && (
        <>
          <BackgroundText
            text={bgFunctionsTexts[0]}
            className='absolute top-[80px] left-[20vw] z-[-1] lg:block hidden'
          />

          <BackgroundText
            text={bgFunctionsTexts[1]}
            className='absolute bottom-[50px] lg:left-[15vw] left-[12vw] z-[-1] md:max-w-none max-w-[400px] overflow-x-hidden sm:block hidden'
          />
        </>
      )}

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={isVisible ? { duration: 1, delay: 1 } : {}}
        >
          <DotsAnimation className='bottom-[20px] right-[180px]' />
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default MainSection
