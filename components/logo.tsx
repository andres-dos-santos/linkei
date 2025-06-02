import { Poiret_One } from 'next/font/google'

const font = Poiret_One({
	weight: ['400'],
	subsets: ['latin'],
})

export function Logo() {
	return <h1 className={`${font.className} text-3xl`}>L I N K E I</h1>
}
