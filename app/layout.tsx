import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from 'next-themes'

const inter = Inter({
  variable: '--font-inter-sans',
  weight: ['900', '400', '600', '500', '200'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Linkei',
  description: 'Encurte suas URLs de forma simples, rápida e segura.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <ClerkProvider>
          <body className={`${inter.variable} antialiased`}>{children}</body>
        </ClerkProvider>
      </ThemeProvider>

      <Toaster />
    </html>
  )
}
