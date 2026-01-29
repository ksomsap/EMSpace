import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KM Dev Portfolio - Keittisak Phasomsap',
    short_name: 'KM Dev',
    description: 'Portfolio of Keittisak Phasomsap - AI Developer, Web3 Solana Expert, Game Developer & Udemy Instructor',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icons/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    categories: ['portfolio', 'developer', 'technology'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}