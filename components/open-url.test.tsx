import { expect, test, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { OpenUrl } from './open-url'
import userEvent from '@testing-library/user-event'

const originalurl = 'https://open.spotify.com/search/dream%20on'
const shorturl = 'jZA8H'

vi.mock('next/navigation', () => ({
	useRouter: () => ({
		push: vi.fn(),
	}),
}))

test.skip('must call the function after clicked', async () => {
	const openUrlButton = screen.getByTestId('open-url-btn')

	await userEvent.click(openUrlButton)

	await waitFor(() => {
		expect(openUrlButton).toHaveBeenCalled()
	})
})

test('should render correctly with the properties', async () => {
	render(<OpenUrl shorturl={shorturl} originalurl={originalurl} id="" />)

	const originalUrlParagraph = screen.getByTestId('original-url-p')
	const shortUrlParagraph = screen.getByTestId('short-url-p')

	expect(originalUrlParagraph.textContent).toBe(originalurl)
	expect(shortUrlParagraph.textContent).toBe(`https://linkei/${shorturl}`)
})
