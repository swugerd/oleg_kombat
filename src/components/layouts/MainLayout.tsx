'use client'
import '@/i18n'
import { FC, PropsWithChildren } from 'react'
import Footer from '../modules/Footer/Footer'
import Header from '../modules/Header/Header'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
