import { Theme } from './theme'

export function Header() {
	return (
		<header className="w-full h-14 bg-gray-100 dark:bg-zinc-700/50 flex items-center sm:mb-10">
			<section className="flex items-center justify-between mx-auto w-[85%] lg:w-[50%]">
				<p className="text-[13px] font-jost">+ de 1k de links encurtados</p>

				<Theme />
			</section>
		</header>
	)
}
