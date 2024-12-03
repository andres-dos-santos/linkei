'use client'

import { api } from '@/lib/api'
import { Url } from '@prisma/client'
import { revalidatePath } from 'next/cache'

type Props = {
  id: string
  shortUrl: string
}

export function OpenUrl({ id, shortUrl }: Props) {
  async function handleOpenUrl(id: string) {
    const response = await api('shorten/' + id)

    if (response.ok) {
      const data = (await response.json()) as Url

      window.open(data.originalUrl, '__blank')

      revalidatePath('/')
    }
  }

  return (
    <button
      onClick={() => handleOpenUrl(id)}
      className="underline text-zinc-700 hover:text-zinc-900"
    >
      <p className="text-[13px] font-medium">{shortUrl}</p>
    </button>
  )
}
