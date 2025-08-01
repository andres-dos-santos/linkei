import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Description } from './description'

test('it should render the description correctly', () => {
  render(<Description />)

  const description = screen.getByText('Vamos encurtar seu link e deixar ele pronto para compartilhar.')
  
  expect(description).toBeTruthy()
})
