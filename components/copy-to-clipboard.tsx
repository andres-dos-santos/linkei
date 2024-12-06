'use client'

import { Copy } from 'lucide-react'
import { toast } from 'sonner'

type Props = {
  originalUrl: string
}

export function CopyToClipboard({ originalUrl }: Props) {
  async function handleCopyToClipboard() {
    await navigator.clipboard.writeText(originalUrl)

    toast('✅ Link copied!')
  }

  return (
    <button onClick={handleCopyToClipboard}>
      <Copy className="size-4 text-zinc-500" />
    </button>
  )
}
