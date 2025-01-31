'use client'
import { useClerk } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

declare global {
	interface Window {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		google: any
	}
}

export function CustomGoogleOneTap({
	children,
}: { children: React.ReactNode }) {
	const clerk = useClerk()
	const router = useRouter()

	useEffect(() => {
		const timeout = setTimeout(() => oneTap(), 2000)
		return () => {
			clearTimeout(timeout)
		}
	}, [])

	const oneTap = () => {
		const { google } = window

		if (google) {
			google.accounts.id.initialize({
				client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
				callback: async (response: { credential: string }) => {
					call(response.credential)
				},
			})

			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			return google.accounts.id.prompt((notification: any) => {
				console.log('Notification ::', notification)
				if (notification.isNotDisplayed()) {
					console.log(
						'getNotDisplayedReason ::',
						notification.getNotDisplayedReason()
					)
				} else if (notification.isSkippedMoment()) {
					console.log('getSkippedReason  ::', notification.getSkippedReason())
				} else if (notification.isDismissedMoment()) {
					console.log(
						'getDismissedReason ::',
						notification.getDismissedReason()
					)
				}
			})
		}
	}

	const call = async (token: string) => {
		try {
			const res = await clerk.authenticateWithGoogleOneTap({
				token,
			})

			await clerk.handleGoogleOneTapCallback(res, {
				signInFallbackRedirectUrl:
					process.env.NODE_ENV === 'development'
						? 'http://localhost:3000'
						: 'https://lkei.vercel.app',
			})
		} catch (error) {
			console.log('error -> ', error)

			router.push('/')
		}
	}

	return (
		<>
			<Script
				src="https://accounts.google.com/gsi/client"
				strategy="beforeInteractive"
			>
				{children}
			</Script>
		</>
	)
}
