import MainLayout from '@/components/layouts/MainLayout'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Олег Киреев',
  description:
    'Добро пожаловать на мой личный сайт! Здесь вы найдете мое портфолио, а также информацию обо мне и моем профессиональном пути. Я стремлюсь к постоянному развитию и готов поделиться своими проектами и идеями. Надеюсь, вам будет интересно!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
