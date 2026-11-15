import type { Metadata } from 'next'
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import { SITE_URL } from './lib/site'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SiteChrome from './components/SiteChrome'
import './globals.css'

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display-face',
  display: 'swap',
})

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body-face',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-face',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Lab Integrity Pro | Lab data integrity and automated compliance for GLP/GMP labs',
    template: '%s | Lab Integrity Pro',
  },
  description:
    'Lab Integrity Pro helps pharma and biotech labs get data review right and stay inspection-ready, through AI-supported QC review automation and expert GLP/GMP consulting.',
}

export const viewport = {
  themeColor: '#05080f',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <SiteChrome nav={<Navigation />} footer={<Footer />}>
          {children}
        </SiteChrome>
      </body>
    </html>
  )
}
