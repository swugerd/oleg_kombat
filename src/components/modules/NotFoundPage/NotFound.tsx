'use client'
import Link from '@/components/ui/Link/Link'
import { useTranslation } from 'react-i18next'

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <div className='flex h-[100vh] justify-center items-center'>
      <Link link='/' text={t('notFoundBtn')} target='_self' className='' />
    </div>
  )
}

export default NotFoundPage
