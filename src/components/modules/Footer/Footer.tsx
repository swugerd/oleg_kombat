import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='py-[30px] flex sm:flex-row flex-col items-center justify-center text-white sm:text-[18px] text-[16px] leading-[22px] font-semibold'>
      <span className='inline-block mr-[10px]'>{t('footer.design')} </span>
      <Link
        href='https://t.me/one_klerics'
        target='_blank'
        className='underline hover:no-underline'
      >
        {t('footer.designAuthor')}
      </Link>
    </footer>
  )
}

export default Footer
