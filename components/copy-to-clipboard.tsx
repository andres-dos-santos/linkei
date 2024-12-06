'use client'

import { Copy } from 'lucide-react'
import { toast } from 'sonner'

type Props = {
  shortUrl: string
}

export function CopyToClipboard({ shortUrl }: Props) {
  async function handleCopyToClipboard() {
    await navigator.clipboard.writeText('https://lkei.vercel.app/' + shortUrl)

    toast('✅ Link copied!')
  }

  return (
    <button onClick={handleCopyToClipboard}>
      <Copy className="size-4 text-zinc-500" />
    </button>
  )
}
