import React from 'react'
import { render, screen } from 'test/test-util'
import { ActionBar } from './ActionBar'

describe('<ActionBar />', () => {
  it('renders correctly', () => {
    render(<ActionBar />)

    expect(screen.getByRole('list')).toBeInTheDocument()
  })
})
