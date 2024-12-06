'use client'

import { addVisit } from '@/app/actions'
import { useRouter } from 'next/navigation'

type Props = {
  shorturl: string
  originalurl: string
  id: string
}

export function OpenUrl({ originalurl, shorturl }: Props) {
  const { push } = useRouter()

  async function handleOpenUrl() {
    await addVisit(shorturl)

    push(originalurl)
  }

  return (
    <button onClick={handleOpenUrl}>
      <p className="text-[13px] text-zinc-700 group-hover:underline font-medium text-left">
        https://linkei/{shorturl}
      </p>
      <p className="text-[11px] text-zinc-500 line-clamp-1 truncate">
        {originalurl}
      </p>
    </button>
  )
}
