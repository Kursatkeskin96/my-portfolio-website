'use client'

import { ThemeProvider } from 'next-themes'

export default function Providers({ children }) {
  return <ThemeProvider defaultTheme='dark' attribute='class'>{children}</ThemeProvider>
}