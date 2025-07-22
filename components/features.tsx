import { DollarSign, Lightbulb, Link, Lock } from 'lucide-react'

const FEATURES = [
	{
		icon: <Link className="size-3.5 text-cyan-500" />,
		title: 'Curto',
	},
	{
		icon: <DollarSign className="size-3.5 text-orange-500" />,
		title: 'Grátis',
	},
	{
		icon: <Lock className="size-3.5 text-purple-500" />,
		title: 'Seguro',
	},
	{
		icon: <Lightbulb className="size-3.5 text-pink-500" />,
		title: 'Confiável',
	},
]

export function Features() {
	return (
		<ul className="w-full lg:w-[90%] grid grid-cols-2 gap-3 lg:gap-0">
			{FEATURES.map((item) => (
				<li
					key={item.title}
					className="lg:col-span-2 col-span-1 border-b border-zinc-100 dark:border-zinc-700 h-12 flex items-center gap-2.5 lg:last:border-none"
				>
					{item.icon}
					<p className="text-sm font-barlow">{item.title}</p>
				</li>
			))}
		</ul>
	)
}
