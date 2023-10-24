import '../styles/globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Footer } from '@/app/(public)/components/footer'
import { Header } from './(public)/components/header'
import { ContactWidget } from '@/components/contact-widget'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Consulmagno & Assis | Início',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans relative text-gray-900 bg-gray-50 scroll-smooth scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-100`}
      >
        <Header />
        <ContactWidget />
        {children}
        <Footer />
      </body>
    </html>
  )
}
