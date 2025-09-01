async function getLength() {
	const response = await fetch(
		process.env.NODE_ENV === 'production'
			? 'https://lkei.site/api/length'
			: 'http://localhost:3000/api/length'
	)

	if (response.ok) {
		const data = await response.json()

		return data.length
	}

	console.log(JSON.stringify(response, null, 2))

	return 0
}

export async function Footer() {
	const length = await getLength()
	console.log(length)

	return (
		<footer className="flex items-center absolute bottom-8 gap-1.5">
			<p className="text-2xl text-zinc-500 font-barlow font-bold -tracking-wider leading-0">
				+{length - 1}
			</p>
			<p className="font-sans -tracking-wide text-lg mt-1 italic text-zinc-500 font-normal leading-0">
				Links encurtados
			</p>
		</footer>
	)
}
