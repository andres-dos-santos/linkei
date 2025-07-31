import { Logo } from '@/components/logo'

import { Description } from '@/components/description'
import { Form } from '@/components/form'
import { Content } from '@/components/content'
import { Features } from '@/components/features'
import { Title } from '@/components/title'
import { Background } from '@/components/background'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default async function _page() {
	return (
		<Container>
			<Background />

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

			<Footer />
		</Container>
	)
}
