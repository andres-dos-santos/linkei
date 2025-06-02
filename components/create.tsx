'use client'

import {
	ArrowRight,
	ArrowUpRight,
	Copy,
	ExternalLink,
	Link,
	Loader,
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { revalidate } from '@/app/actions'

export function Create() {
	const [loading, setLoading] = useState(false)

	async function submit(formData: FormData) {
		const url = formData.get('url')

		setLoading(true)

		if (url) {
			if (process.env.NEXT_PUBLIC_BASE_URL) {
				const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL, {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					next: { tags: ['create'] },
					body: JSON.stringify({ url: url.toString() }),
				})

				if (response.ok) {
					const { shortUrl } = await response.json()

					await revalidate('create')

					await navigator.clipboard.writeText(
						`https://lkei.vercel.app/api/url/${shortUrl}`
					)

					toast('✅ Link criado!')
				}
			} else {
				throw new Error('Could not find environment variable')
			}
		}

		setLoading(false)
	}

	return (
		<form
			action={submit}
			className="relative flex flex-col items-center gap-2.5 w-full mt-10"
		>
			<label
				htmlFor=""
				className="flex items-center gap-2.5 dark:border-yellow-600 border-b-2 dark:focus-within:border-yellow-600 focus-within:border-yellow-500 w-full"
			>
				<ExternalLink size={16} />
				<input
					type="text"
					name="url"
					className="bg-zinc-50 rounded-md my-2 px-2.5 h-10 w-full bg-transparent outline-none text-sm text-zinc-700 dark:text-white"
					placeholder="https://www.pudim.com.br"
				/>
			</label>

			<button
				type="submit"
				className="h-10 group bg-yellow-400 hover:bg-yellow-500/80 hover:border-yellow-500 px-10 transition-all duration-300 border-yellow-400 border-2 ml-auto mt-1.5 flex items-center justify-center outline-none"
			>
				{loading ? (
					<Loader className="size-4 text-white animate-spin" />
				) : (
					<>
						<Copy className="size-4 mr-1" />
						<p className="-tracking-wide text-[13px]">Copiar link curto</p>
					</>
				)}
			</button>
		</form>
	)
}
