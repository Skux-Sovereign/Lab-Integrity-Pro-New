import type { Metadata } from 'next'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lab Integrity Pro - GLP/GMP Laboratory Consulting',
  description: 'Expert consulting services for bioanalytical laboratories. Data integrity, regulatory compliance, and operational excellence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
