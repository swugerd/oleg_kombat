import { ICompanyListItemProps } from '@/types/props'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import s from './CompanyListItem.module.scss'

const CompanyListItem: FC<ICompanyListItemProps> = ({ isVisible, item }) => {
  const { t } = useTranslation()

  return (
    <motion.li
      initial={{ opacity: 0, transform: 'translateY(30px)' }}
      animate={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : '30px'})`,
      }}
      exit={{ opacity: 0 }}
      transition={
        isVisible
          ? {
              duration: 0.5,
              delay: 0.5,
            }
          : {}
      }
      className='mt-10'
    >
      <div className='flex sm:justify-between sm:flex-row flex-col sm:mb-[30px] mb-[15px] lg:ps-[0] ps-[50px]'>
        <h5
          className={`${s.title} text-white sm:text-[30px] text-[20px] leading-[36px] font-semibold`}
        >
          {t(item.tKeyName)}
        </h5>
        <span className='text-gray sm:text-[24px] text-[18px] leading-[29px] font-semibold'>
          {item.hireDate} - {item?.dismissalDate || t('workExperience.presentDate')}
        </span>
      </div>
      <div className='sm:mb-[50px] mb-[30px] lg:ps-[0] ps-[50px]'>
        <p className='text-gray sm:text-[18px] text-[16px] font-normal leading-[27px]'>
          {t(item.tKeyPost)}
        </p>
      </div>
      <div className={`${s.line} ${isVisible ? s.animation : ''}`}></div>
    </motion.li>
  )
}

export default CompanyListItem
