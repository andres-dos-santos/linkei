import { Poiret_One } from 'next/font/google'
import Image from 'next/image'

const font = Poiret_One({
	weight: ['400'],
	subsets: ['latin'],
})

export function Logo() {
	return (
		<div className="col-span-10 row-span-2 flex items-center justify-start gap-2.5">
			<Image alt='logo do linkei' src="/logo.svg" width={80} height={80} />
			
			<h1 className={`${font.className} text-2xl`}>L I N K E I</h1>
		</div>
	)
}
