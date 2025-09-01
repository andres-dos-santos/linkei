import type { Metadata } from 'next'
import { Barlow, Jost } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/toaster'

import './globals.css'

const geist = Jost({
	weight: ['400', '600', '500', '300', '700'],
	subsets: ['latin'],
	variable: '--font-sans',
})

const barlow = Barlow({
	weight: ['400', '600', '500', '300', '700'],
	subsets: ['latin'],
	variable: '--font-barlow',
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
				<body className={`${geist.variable} ${barlow.variable} antialiased`}>
					{children}
				</body>

				<Toaster />
			</ThemeProvider>
		</html>
	)
}
