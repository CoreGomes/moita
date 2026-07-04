import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'
import ChaleAOrigemClient from './ChaleAOrigemClient'

const title = 'Chalé A Origem — A Moita | Refúgio Natural'
const description =
  'Chalé exclusivo no Cerrado. 4 hóspedes, 2 quartos, vista para a natureza preservada. Reserve direto.'
const url = `${SITE_URL}/chaleAOrigem`
const ogImage = `${SITE_URL}/assets/branding/og-image.jpg`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'A Moita',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Chalé A Origem — Refúgio Natural no Cerrado',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
}

export default function ChaleAOrigemPage() {
  return <ChaleAOrigemClient />
}
