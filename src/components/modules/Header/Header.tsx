'use client'
import HeadingWithBrackets from '@/components/ui/HeadingWithBrackets/HeadingWithBrackets'
import { AllowedLangs } from '@/constants/langs'
import { useTranslation } from 'react-i18next'
import { headerLinks } from './links.data'

const Header = () => {
  const { t, i18n } = useTranslation()

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <header className='flex text-base container justify-around pt-[30px] absolute mx-auto left-0 right-0'>
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
      <ul className='flex gap-[50px]'>
        {headerLinks.map((item) => (
          <li key={item.key}>
            <a href={`#${item.key}`}>
              <HeadingWithBrackets
                text={t(item.tKey)}
                className='text-white hover:opacity-70'
              />
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
