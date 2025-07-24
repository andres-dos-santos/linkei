'use client'

import { z } from 'zod'
import { useEffect, useState, type FormEvent } from 'react'
import { baseUrl } from '@/constants/base-url'
import { useToast } from '@/hooks/use-toast'
import { LoaderCircle } from 'lucide-react'
import { copyToClipboard } from '@/lib/copy-to-clipboard'

const LinkSchema = z.object({
	url: z
		.url({ error: 'Deve ter um formato válido.' })
		.min(7, 'Deve ter no mínimo 8 caracteres.'),
})

function useField() {
	const [field, setField] = useState<string>('')

	return { field, setField }
}

function useFieldError(field: string) {
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fieldValidation = LinkSchema.safeParse({ url: field })

		if (field.length > 0 && fieldValidation.error) {
			setError(fieldValidation.error.issues[0].message)
		} else {
			setError(null)
		}
	}, [field])

	return {
		error,
	}
}

export function Form() {
	const { field, setField } = useField()
	const { error } = useFieldError(field)

	const { toast } = useToast()

	const [loading, setLoading] = useState(false)

	const hasError = !!error

	async function onSubmit(form: FormEvent) {
		form.preventDefault()

		setLoading(true)

		try {
			const response = await fetch(baseUrl, {
				method: 'POST',
				body: JSON.stringify({ original_url: field }),
			})

			if (!response.ok) {
				toast({
					title: 'Ocorreu um erro.',
					description:
						'Parece que não foi possível encurtar seu link agora :/.',
				})
			}

			const data = await response.json()

			if (data.url) {
				console.log('data.url', data.url)

				toast({
					title: 'Criado com sucesso.',
					description: 'Seu link curto está copiado no seu clipboard.',
				})

				await copyToClipboard(data.url)
			}
		} catch (error) {
			console.log(error)
		}

		setLoading(false)
	}

	const buttonText = loading ? 'Quase lá...' : 'Encurtar'

	return (
		<div className="col-span-10 lg:col-span-6 row-span-8 lg:pl-10 xl:pl-20 flex flex-col items-start justify-start mt-2.5">
			<form
				onSubmit={onSubmit}
				className="w-full gap-2.5 flex flex-col items-center relative"
			>
				<input
					type="text"
					data-error={hasError}
					className="w-full border h-14 px-4 bg-inherit outline-none font-geist pb-0.5 text-sm rounded focus-within:ring-4 data-[error=true]:bg-red-50/20 dark:data-[error=true]:bg-red-700/20 data-[error=true]:border-red-500 dark:data-[error=true]:border-red-500 data-[error=true]:ring-red-200/50 dark:data-[error=true]:ring-red-700/50 focus-within:ring-zinc-200/70 focus-within:border-zinc-500 dark:focus-within:ring-zinc-500/70 dark:focus-within:border-zinc-400/50 dark:border-zinc-500"
					placeholder="http://mercado.com.br/1234567890"
					onChange={(e) => setField(e.target.value)}
				/>

				<p
					data-show={hasError}
					className="data-[show=false]:hidden text-xs block text-left w-full my-0.5 text-red-500 font-jost"
				>
					{error}
				</p>

				<button
					data-error={hasError}
					className="data-[error=true]:disabled gap-2.5 disabled:cursor-not-allowed h-14 w-full bg-zinc-800 dark:bg-white hover:bg-zinc-900 dark:hover:bg-zinc-100 rounded flex items-center justify-center"
					type="submit"
				>
					{loading && (
						<LoaderCircle className="animate-spin text-background size-4" />
					)}
					<p className="text-white dark:text-zinc-900 font-barlow font-medium text-sm">
						{buttonText}
					</p>
				</button>
			</form>
		</div>
	)
}
