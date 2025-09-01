import Image from 'next/image'

import { Form } from '@/components/form'
import { Background } from '@/components/background'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'

export default async function _page() {
	return (
		<Container>
			<Background />
			<header className="flex flex-col items-center gap-2.5">
				<div className="flex items-center gap-2.5">
					<Image
						src="/logo.png"
						alt=""
						width={500}
						height={500}
						className="w-20 h-20 -rotate-45"
					/>
					<h1 className="font-barlow text-4xl -tracking-wide">Linkei</h1>
				</div>

				<p className="text-sm text-zinc-600 text-balance text-center">
					Transforme links longos em URLs curtas, rápidas e <br /> fáceis de
					compartilhar.
				</p>
			</header>

			<Form />

			<Footer />
			{/* <Background />

			<Content>
				<Header />

				<div className="grid grid-cols-10 grid-rows-10 mx-auto sm:w-[70%] lg:w-[80%] xl:w-[50%] gap-10 h-full relative">
					<Logo />

					<div className="col-span-10 lg:col-span-4 row-span-8 relative flex flex-col items-start justify-start">
						<Title />

						<Description />

						<Features />
					</div>

					<Form />
				</div>
			</Content>

			<Footer /> */}
		</Container>
	)
}
