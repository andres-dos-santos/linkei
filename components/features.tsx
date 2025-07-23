import { DollarSign, Lightbulb, Link, Lock } from 'lucide-react'

import { features } from '@/constants/features'

const Icons = {
	Curto: <Link className="size-3.5 text-cyan-500" />,
	Grátis: <DollarSign className="size-3.5 text-orange-500" />,
	Seguro: <Lock className="size-3.5 text-purple-500" />,
	Confiável: <Lightbulb className="size-3.5 text-pink-500" />,
} as const

export function Features() {
	return (
		<ul className="w-full lg:w-[90%] grid grid-cols-2 gap-3 lg:gap-0">
			{features.map((item) => (
				<li
					key={item}
					className="lg:col-span-2 col-span-1 border-b border-zinc-100 dark:border-zinc-700 h-12 flex items-center gap-2.5 lg:last:border-none"
				>
					{Icons[item]}
					<p className="text-sm font-barlow">{item}</p>
				</li>
			))}
		</ul>
	)
}
