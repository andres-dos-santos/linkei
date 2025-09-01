import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function Container(props: Props) {
	return (
		<div className="h-screen w-screen flex items-center justify-center font-sans flex-col dark:bg-zinc-800 relative">
			{props.children}
		</div>
	)
}
