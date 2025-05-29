'use client'

import { ArrowRight, ArrowUpRight, Loader } from 'lucide-react'
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
			className="relative flex flex-col items-center gap-2.5 w-full"
		>
			<input
				type="text"
				name="url"
				className="h-20 w-full dark:border-zinc-600 border-b -tracking-wider dark:focus:border-zinc-600 focus:border-zinc-500 bg-transparent outline-none text-2xl text-zinc-700 dark:text-white"
				placeholder="https://www.pudim.com.br"
			/>

			<button
				type="submit"
				className="h-12 group hover:bg-zinc-900 w-[200px] transition-all duration-300 border-zinc-900 border-2 bg-white ml-auto mt-1.5 flex items-center justify-center outline-none"
			>
				{loading ? (
					<Loader className="size-4 text-white animate-spin" />
				) : (
					<>
						<ArrowUpRight className="size-4 mr-0.5 group-hover:translate-x-10 transition-all duration-500" />
						<p className="group-hover:opacity-0 font-medium -tracking-wide transition-all duration-500 text-[13px] flex items-center">
							Encurtar
						</p>
					</>
				)}
			</button>
		</form>
	)
}
