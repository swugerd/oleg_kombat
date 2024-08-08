'use client'

import AnimatedLine from '@/components/ui/AnimatedLine/AnimatedLine'
import BackgroundText from '@/components/ui/BackgroundText/BackgroundText'
import { bgFunctionsTexts } from '@/components/ui/BackgroundText/bgFunctionText.data'
import CompanyListItem from '@/components/ui/CompanyListItem/CompanyListItem'
import DotsAnimation from '@/components/ui/DotsAnimation/DotsAnimation'
import HeadingWithBrackets from '@/components/ui/HeadingWithBrackets/HeadingWithBrackets'
import WaveBackground from '@/components/ui/WaveBackground/WaveBackground'
import { useObserver } from '@/hooks/useObserver'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const ExperienceSection = () => {
  const { t } = useTranslation()

  const sectionRef = useRef<HTMLElement>(null)
  const { isVisible } = useObserver(sectionRef)

  return (
    <section
      className={`py-[85px] h-[100vh] relative overflow-x-hidden`}
      id='workExperience'
      ref={sectionRef}
    >
      <div className='container mx-auto h-full'>
        <HeadingWithBrackets
          text={t('workExperience.title')}
          isSectionTitle
          className='mb-[150px] block text-center'
        />

        <AnimatePresence>
          <motion.ul
            className='max-w-[900px] mx-auto'
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <CompanyListItem isVisible={isVisible} />
          </motion.ul>
        </AnimatePresence>

        <div className='h-full w-[3px] bg-white absolute top-0 bottom-0'></div>

        <AnimatedLine className={isVisible ? 'line4' : ''} />

        {isVisible && (
          <BackgroundText
            text={bgFunctionsTexts[3]}
            className='absolute top-[100px] right-[150px] max-h-[150px] overflow-y-auto'
          />
        )}

        <WaveBackground isVisible={isVisible} isLeftSide />

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={isVisible ? { duration: 1, delay: 1 } : {}}
          >
            <DotsAnimation className='bottom-[50px] right-[-20px]' />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ExperienceSection
