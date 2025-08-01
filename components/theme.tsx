'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function Theme() {
	const { setTheme, theme } = useTheme()

	return (
		<button
			type="button"
			data-testid="theme-button"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? (
				<Sun className="size-3.5" />
			) : (
				<Moon className="size-3.5" />
			)}
		</button>
	)
}
