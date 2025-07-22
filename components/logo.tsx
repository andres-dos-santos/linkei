import { Poiret_One } from 'next/font/google'

const font = Poiret_One({
	weight: ['400'],
	subsets: ['latin'],
})

export function Logo() {
	return (
		<div className="col-span-10 row-span-2 flex items-center justify-start">
			<h1 className={`${font.className} text-2xl`}>L I N K E I</h1>
		</div>
	)
}
