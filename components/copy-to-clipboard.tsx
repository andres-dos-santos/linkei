'use client'

import { Copy } from 'lucide-react'

type Props = {
	shortUrl: string
}

export function CopyToClipboard({ shortUrl }: Props) {
	async function handleCopyToClipboard() {
		if (navigator.clipboard) {
			await navigator.clipboard.writeText(
				'https://lkei.vercel.app/api/url/shortUrl'
			)
		}

		// toast('✅ Link copied!')
	}

	return (
		<button type="button" onClick={handleCopyToClipboard}>
			<Copy className="size-4 text-zinc-500 dark:text-zinc-300" />
		</button>
	)
}
