'use client'

import { ThemeProvider } from 'next-themes'

export default function Providers({ children }) {
  return <ThemeProvider enableSystem={true} defaultTheme='dark' attribute='class'>{children}</ThemeProvider>
}