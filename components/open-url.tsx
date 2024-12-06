'use client'

import { addVisit } from '@/app/actions'
import { useRouter } from 'next/navigation'

type Props = {
  shorturl: string
  originalurl: string
  id: string
}

export function OpenUrl(props: Props) {
  const { push } = useRouter()

  async function handleOpenUrl() {
    await addVisit(props.id)

    push(props.originalurl)
  }

  return (
    <button onClick={handleOpenUrl}>
      <p className="text-sm text-zinc-700 group-hover:underline font-medium text-left">
        {props.shorturl}
      </p>
      <p className="text-[11px] text-zinc-500 line-clamp-1 truncate">
        {props.originalurl}
      </p>
    </button>
  )
}
