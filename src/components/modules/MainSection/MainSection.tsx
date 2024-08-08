'use client'
import AnimatedLine from '@/components/ui/AnimatedLine/AnimatedLine'
import BackgroundText from '@/components/ui/BackgroundText/BackgroundText'
import { bgFunctionsTexts } from '@/components/ui/BackgroundText/bgFunctionText.data'
import DotsAnimation from '@/components/ui/DotsAnimation/DotsAnimation'
import Link from '@/components/ui/Link/Link'
import MainTitle from '@/components/ui/MainTitle/MainTitle'
import ScrollArrow from '@/components/ui/ScrollArrow/ScrollArrow'
import SocialsList from '@/components/ui/SocialsList/SocialsList'
import WaveBackground from '@/components/ui/WaveBackground/WaveBackground'
import { useObserver } from '@/hooks/useObserver'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const MainSection = () => {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const { isVisible } = useObserver(sectionRef)

  return (
    <section className={`h-[100vh] container m-auto`} ref={sectionRef}>
      <div className='relative'></div>
      <SocialsList isVisible={isVisible} />
      <div className='pt-[240px] pl-[200px]'>
        <MainTitle isVisible={isVisible} />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={isVisible ? { duration: 1, delay: 1 } : {}}
          >
            <h2 className='text-gray font-normal leading-[22px] text-[18px] max-w-[500px] mb-[75px]'>
              {t('main.description')}
            </h2>
            <Link text={t('main.resumeBtn')} link='/files/resume.pdf' />
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
            className='absolute top-[80px] left-[20vw] max-h-[150px] overflow-y-auto'
          />

          <BackgroundText
            text={bgFunctionsTexts[1]}
            className='absolute bottom-[60px] left-[15vw]'
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
          <ScrollArrow />
          <DotsAnimation className='bottom-[20px] right-[180px]' />
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default MainSection
