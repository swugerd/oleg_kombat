import en from '@/../public/locales/en.json'
import ru from '@/../public/locales/ru.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: ru,
    },
    en: {
      translation: en,
    },
  },
  fallbackLng: 'ru',
  lng: 'ru',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
