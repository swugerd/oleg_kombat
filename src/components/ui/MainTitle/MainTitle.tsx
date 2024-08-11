import { IObserverProps } from '@/types/props'
import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import HeadingWithBrackets from '../HeadingWithBrackets/HeadingWithBrackets'

const MainTitle: FC<IObserverProps> = ({ isVisible }) => {
  const { t } = useTranslation()

  return (
    <h1 className='text-white md:text-[54px] sm:text-[34px] text-[20px] md:leading-[65px] leading-[36px]'>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(-30px)' }}
          animate={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : '-30px'})`,
          }}
          exit={{ opacity: 0 }}
          transition={isVisible ? { duration: 1, delay: 0.5 } : {}}
          className='mb-[30px]'
        >
          <HeadingWithBrackets
            text={t('main.title')}
            className=' font-extrabold '
          />
          <br />
          <HeadingWithBrackets
            text={t('main.subTitle')}
            className='font-extrabold'
          />
        </motion.div>
      </AnimatePresence>
    </h1>
  )
}

export default MainTitle
