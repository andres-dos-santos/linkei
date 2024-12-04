'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function Theme() {
  const { setTheme, theme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </button>
  )
}
