'use client'

import { api } from '@/lib/api'
import { Url } from '@prisma/client'

type Props = {
  id: string
  shortUrl: string
}

export function OpenUrl({ id, shortUrl }: Props) {
  async function handleOpenUrl(id: string) {
    const response = await api('shorten/' + id)

    if (response.ok) {
      const data = (await response.json()) as Url
      console.log('data', data)

      // window.open(data.originalUrl, '__blank')
    }
  }

  return (
    <button
      onClick={() => handleOpenUrl(id)}
      className="underline text-blue-500"
    >
      <p className="text-[15px]">{shortUrl}</p>
    </button>
  )
}
