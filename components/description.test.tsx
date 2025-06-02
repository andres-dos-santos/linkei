import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Description } from './description'

test.skip('must has a text as a children', async () => {
	render(<Description />)

	const component = screen.getByText(
		'Encurte seus links por aqui ou use a nossa extensão.'
	)

	expect(component).toBeTruthy()
})
