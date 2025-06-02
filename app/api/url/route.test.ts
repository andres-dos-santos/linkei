import { expect, test } from 'vitest'

const url = 'https://www.notion.so/asba/1-15c3ce0317be80da8f89d1938cb67034'

test.skip('must create a short url', async () => {
	const response = await fetch('http://localhost:3000/api/url', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ url }),
	})

	expect(response.ok).toBe(true)

	const { data, shortUrl } = await response.json()

	expect(data).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ id: expect.any(String) }),
		])
	)

	expect(typeof shortUrl).toBe('string')
})
