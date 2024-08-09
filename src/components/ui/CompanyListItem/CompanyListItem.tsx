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
    >
      <div className='flex justify-between mb-[30px]'>
        <h5
          className={`${s.title} text-white text-[30px] leading-[36px] font-semibold`}
        >
          {t(item.tKeyName)}
        </h5>
        <span className='text-gray text-[24px] leading-[29px] font-semibold'>
          {item.hireDate} - {item.dismissalDate}
        </span>
      </div>
      <div className='mb-[50px]'>
        <p className='text-gray text-[18px] font-normal leading-[27px]'>
          {t(item.tKeyPost)}
        </p>
      </div>
      <div className={`${s.line} ${isVisible ? s.animation : ''}`}></div>
    </motion.li>
  )
}

export default CompanyListItem
