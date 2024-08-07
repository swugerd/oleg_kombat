'use client'
import BackgroundText from '@/components/ui/BackgroundText/BackgroundText'
import { bgFunctionsTexts } from '@/components/ui/BackgroundText/bgFunctionText.data'
import DotsAnimation from '@/components/ui/DotsAnimation/DotsAnimation'
import HeadingWithBrackets from '@/components/ui/HeadingWithBrackets/HeadingWithBrackets'
import Link from '@/components/ui/Link/Link'
import ScrollArrow from '@/components/ui/ScrollArrow/ScrollArrow'
import WaveBackground from '@/components/ui/WaveBackground/WaveBackground'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import s from './MainSection.module.scss'
import { socialItems } from './socials.data'

const MainSection = () => {
  const { t } = useTranslation()

  return (
    <section className={`h-[100vh] container m-auto`}>
      <div className='relative'>
        <AnimatePresence>
          <motion.ul
            className={`absolute flex gap-[30px] flex-col pt-[240px]`}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            {socialItems.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
              >
                <a href={item.link} target='_blank'>
                  <Image
                    width={32}
                    height={32}
                    src={item.icon}
                    alt={item.title}
                    className='hover:opacity-70 transition-opacity'
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>

      <div className='pt-[240px] pl-[200px]'>
        <h1 className='text-white text-[54px]'>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, transform: 'translateY(-30px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <HeadingWithBrackets
                text={t('main.title')}
                className='text-[54px] font-extrabold leading-[65px]'
              />
              <br />
              <HeadingWithBrackets
                text={t('main.subTitle')}
                className='text-[54px] font-extrabold leading-[65px]'
              />
            </motion.div>
          </AnimatePresence>
        </h1>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className='text-gray font-normal leading-[22px] text-[18px] max-w-[500px] mb-[75px]'>
              {t('main.description')}
            </h2>
            <Link text={t('main.resumeBtn')} link='/files/resume.pdf' />
          </motion.div>
        </AnimatePresence>
      </div>

      <span
        className={`absolute top-0 w-[3px] bg-white block ml-[15px] ${s.line1}`}
      ></span>
      <span
        className={`absolute bottom-0 w-[3px] bg-white block ml-[15px] ${s.line3}`}
      ></span>
      <span
        className={`absolute bottom-[202px] left-[-20px] h-[3px] bg-white block ml-[15px] ${s.line2}`}
      ></span>

      <WaveBackground />

      <BackgroundText
        text={bgFunctionsTexts[0]}
        className='absolute top-[80px] left-[20vw] max-h-[150px] overflow-y-auto'
      />

      <BackgroundText
        text={bgFunctionsTexts[1]}
        className='absolute bottom-[60px] left-[15vw]'
      />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <ScrollArrow />
          <DotsAnimation />
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default MainSection
