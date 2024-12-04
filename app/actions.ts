'use server'

import { api } from '@/lib/api'
import { revalidatePath } from 'next/cache'

export async function onCreateUrl(url: string) {
  try {
    if (url) {
      const response = await api('shorten', {
        method: 'POST',
        body: JSON.stringify({ url }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()

        revalidatePath('/')

        return data
      }
    }
  } catch (error) {
    console.log(error)
  }
}
