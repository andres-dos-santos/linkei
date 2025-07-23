'use client'

export async function copyToClipboard(url: string) {
	if (navigator.clipboard) {
		await navigator.clipboard.writeText(url)
	}
}
