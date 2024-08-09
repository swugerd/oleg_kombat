import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Олег Киреев - веб-разработчик',
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: '/',
    background_color: '#000',
    theme_color: '#000',
    display: 'standalone',
  }
}
