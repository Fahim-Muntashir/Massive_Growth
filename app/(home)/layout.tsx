import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Footer from '@/components/Shared/Footer'
import Nav from '@/components/Shared/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Massive Growth',
  description: 'Unlock boundless online potential with Massive Growth - Your One-Stop Solution for Web Development, Video Editing, Google, and Facebook Ads Services. Elevate your digital presence with expert web development, captivating video editing, and targeted advertising on Google and Facebook. Achieve unprecedented visibility and growth with our comprehensive suite of services. Contact us now for a digital transformation that ensures your brand rises to the top',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
