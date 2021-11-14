import React from 'react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { Button } from './Button'
import { render, screen } from 'test/test-util'

describe('<Button/>', () => {
  test('It should render a button', () => {
    const spy = jest.fn()
    render(
      <Button kind="primary" onClick={spy}>
        CFP
      </Button>,
    )

    const buttonEl = screen.getByText(/cfp/i)
    expect(buttonEl).toBeInTheDocument()
    expect(buttonEl).toHaveAttribute('type', 'button')

    userEvent.click(buttonEl)
    expect(spy).toHaveBeenCalled()
  })
})

describe('<Button/> a11y testing', () => {
  test('Button should not have warnings', async () => {
    const { container } = render(<Button kind="primary">Buy tickets</Button>)
    const { container: linkContainer } = render(<Button kind="link">Link</Button>)

    expect(await axe(container)).toHaveNoViolations()
    expect(await axe(linkContainer)).toHaveNoViolations()
  })

  test('Button should accept an aria-label property', () => {
    render(<Button kind="primary" aria-label="Download" />)

    expect(screen.getByLabelText(/download/i)).toBeInTheDocument()
  })
})
