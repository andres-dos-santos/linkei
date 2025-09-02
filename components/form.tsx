'use client'

import { z } from 'zod'
import { useEffect, useState, type ClipboardEvent, type FormEvent } from 'react'
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
				toast({
					title: 'Criado com sucesso.',
					description: 'Seu link curto está copiado no seu clipboard.',
				})

				await copyToClipboard(data.url)

				setField('')
			}
		} catch (error) {
			console.log(error)
		}

		setLoading(false)
	}

	function handlePaste(event: ClipboardEvent<HTMLInputElement>) {
		const pastedText = event.clipboardData.getData('text/plain')

		setField(pastedText)
	}

	return (
		<form
			action=""
			className="mt-5 w-full px-10 sm:px-0 sm:w-[480px]"
			onSubmit={onSubmit}
		>
			<input
				type="text"
				data-error={hasError}
				onChange={(e) => setField(e.target.value)}
				onPaste={handlePaste}
				placeholder="Cole sua URL aqui"
				className="data-[error=true]:border-red-500 data-[error=true]:ring-4 data-[error=true]:ring-red-500/20 transition-all duration-300 hover:border-orange-500 focus:ring-4 focus:ring-orange-200/50 focus:border-orange-500 h-12 sm:h-14 w-full text-sm outline-none px-2.5 sm:px-5 rounded-md border"
			/>

			<footer className="w-full flex items-center">
				<div className="w-full">
					<p className="text-xs font-medium text-zinc-400">
						Todos os direitos reservados <br /> para Andres.com
					</p>
				</div>

				<button
					type="submit"
					data-error={error}
					disabled={!!error}
					className="disabled:cursor-not-allowed h-12 sm:h-14 w-1/2 rounded-md flex items-center justify-center mt-2.5 bg-orange-500 hover:bg-orange-600 transition-all duration-300"
				>
					{loading ? (
						<LoaderCircle className="animate-spin text-background size-4" />
					) : (
						<p className="font-bold text-sm text-white">ENCURTAR</p>
					)}
				</button>
			</footer>
		</form>
	)
}
