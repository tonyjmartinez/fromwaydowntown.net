import { render, cleanup } from '@testing-library/react'

import Toggle from './Toggle'

describe('Toggle', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Toggle />)
    }).not.toThrow()
  })
})
