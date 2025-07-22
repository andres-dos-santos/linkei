import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function Content(props: Props) {
	return (
		<div className="bg-white dark:bg-zinc-700/50 h-full lg:h-[80%] w-full lg:w-[80%] relative lg:rounded-md lg:border border-zinc-200 dark:border-zinc-700/50 shadow-[0_0_8px_rgba(0,0,0,0.05)] flex flex-col items-center justify-between overflow-hidden">
			{props.children}
		</div>
	)
}
