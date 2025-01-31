'use client'

import { setUser } from '@/app/actions'
import { SignIn, SignInButton, SignOutButton, useSession } from '@clerk/nextjs'
import { useEffect } from 'react'

export function Profile() {
	const { session, isSignedIn } = useSession()

	useEffect(() => {
		async function set() {
			if (session?.user.id) await setUser(session.user.id)
		}

		set()
	}, [session])

	if (!isSignedIn) {
		return (
			<div className="flex flex-col pt-5">
				<span className="text-[13px] font-medium text-zinc-600 text-center -tracking-wide dark:text-zinc-300">
					Quer salvar seus links e verificar <br /> a quantidade de cliques?
				</span>
				<SignIn
					appearance={{
						elements: {
							headerTitle: 'hidden',
							headerSubtitle: 'hidden',
							card: 'bg-transparent rounded-none flex items-center justify-center pt-0 pb-6',
							socialButtonsBlockButton: 'border-0 ring-0',
							button: 'border-0 ring-0',
							cardBox: 'bg-transparent rounded-none shadow-none',
							footer: 'hidden',
						},
					}}
				/>
			</div>
		)

		// return (
		// 	<SignInButton mode="modal">
		// 		<div className="ml-3 mt-4 mb-2.5 flex items-center">
		// 			<p className="cursor-pointer text-[13px] font-medium text-zinc-600 -tracking-wide mt-2.5 dark:text-zinc-300">
		// 				Ainda não tem conta?{' '}
		// 				<span className="text-blue-500 underline">Clique aqui</span>.
		// 			</p>
		// 		</div>
		// 	</SignInButton>
		// )
	}

	return (
		<SignOutButton>
			<div className="mr-auto ml-3 mt-4 mb-2.5 w-full flex cursor-pointer items-center">
				<div className="h-8 w-8 bg-zinc-200 rounded-lg mr-2.5">
					<img
						alt="imagem de perfil"
						src={session.user.imageUrl}
						width={32}
						height={32}
						className="rounded-lg"
					/>
				</div>
				<p className="text-[13px] font-medium text-zinc-600 -tracking-wide dark:text-zinc-300">
					{session.user.fullName}
				</p>

				<p className="ml-auto mr-5 flex items-center text-xs font-medium text-zinc-700 -tracking-wide dark:text-zinc-300">
					Sair
				</p>
			</div>
		</SignOutButton>
	)
}
