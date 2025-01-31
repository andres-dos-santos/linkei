'use client'

import { ArrowRight, Loader } from 'lucide-react'
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
		<form action={submit} className="relative flex flex-col">
			<input
				type="text"
				name="url"
				className="h-10 rounded-md w-80 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-600 p-2 border focus:ring-4 focus:ring-cyan-500/20 dark:focus:border-cyan-600 focus:border-cyan-500 bg-transparent outline-none text-[13px] -tracking-wider text-zinc-700 dark:text-white font-medium"
				placeholder="https://meulinkaqui.com"
			/>

			<button
				type="submit"
				className="h-10 group rounded-md bg-cyan-500 transition-all duration-300 hover:bg-cyan-500/90 w-full mt-1.5 flex items-center justify-center outline-none"
			>
				{loading ? (
					<Loader className="size-4 text-white animate-spin" />
				) : (
					<>
						<ArrowRight className="size-4 mr-2 text-white group-hover:translate-x-10 transition-all duration-500" />
						<p className="group-hover:opacity-0 font-medium -tracking-wide transition-all duration-500 text-[13px] flex items-center text-white">
							Faça isso!
						</p>
					</>
				)}
			</button>
		</form>
	)
}
