'use client'
import HeadingWithBrackets from '@/components/ui/HeadingWithBrackets/HeadingWithBrackets'
import { AllowedLangs } from '@/constants/langs'
import { handleSmoothScroll } from '@/utils'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { headerLinks } from './links.data'

const Header = () => {
  const { t, i18n } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem('lang')
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage)
    }
  }, [i18n])

  return (
    <header className='text-base absolute left-0 right-0 z-[10]'>
      <nav className='flex sm:justify-around justify-center py-[30px] container mx-auto'>
        <ul className='flex text-white gap-[30px]'>
          <li className='hover:opacity-70 transition-opacity'>
            <button onClick={() => handleChangeLang(AllowedLangs.RU)}>
              {AllowedLangs.RU.toUpperCase()}
            </button>
          </li>
          <li className='hover:opacity-70 transition-opacity'>
            <button onClick={() => handleChangeLang(AllowedLangs.EN)}>
              {AllowedLangs.EN.toUpperCase()}
            </button>
          </li>
        </ul>
        <ul className={`sm:flex gap-[50px] top-[50px] right-[10px] hidden`}>
          {headerLinks.map((item) => (
            <li key={item.key}>
              <a
                href={`#${item.key}`}
                onClick={(e) => handleSmoothScroll(`#${item.key}`, e)}
              >
                <HeadingWithBrackets
                  text={t(item.tKey)}
                  className='text-white hover:opacity-70'
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
