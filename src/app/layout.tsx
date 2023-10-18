import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import Navbar from './components/navigation/navbar'

const ibm = IBM_Plex_Mono({
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  weight: ['300', '400', '700']
})
export const metadata: Metadata = {
  title: 'Apedul',
  description: 'I will guess your NFT!.',
  icons: {
    icon: '/icon.ico'
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
