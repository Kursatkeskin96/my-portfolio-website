import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Analytics } from '@vercel/analytics/react';
import Providers from '../components/providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kursat Keskin | Home Page',
  description: "This website is Kursat Keskin's portfolio website.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark' style={{ colorScheme: 'dark'}}>
     <body suppressHydrationWarning={true}>
     <Providers>
      <Navbar />
        {children}
        <Analytics />
        </Providers>
        </body>
    </html>
  )
}
