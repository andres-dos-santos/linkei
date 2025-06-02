import { expect, test } from 'vitest'

const shortUrl = '79DHc'

test.skip('must update the database and redirect to the original url', async () => {
	const response = await fetch(`http://localhost:3000/api/${shortUrl}`)

	expect(response.ok).toBe(true)
})
