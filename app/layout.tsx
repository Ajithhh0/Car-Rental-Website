import { Footer, NavBar } from '@/components'
import './globals.css'

import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Car Pro',
  description: 'Find your ride easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
