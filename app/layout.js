import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kursat Keskin | Home Page',
  description: "This website is Kursat Keskin's portfolio website.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body suppressHydrationWarning={true}>
      <Navbar />
        {children}
        </body>
    </html>
  )
}
