import { render, cleanup } from '@testing-library/react'

import BottomNav from './BottomNav'

describe('BottomNav', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BottomNav />)
    }).not.toThrow()
  })
})
