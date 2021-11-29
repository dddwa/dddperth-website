import React from 'react'
import { render, screen } from 'test/test-util'
import { ActionBar } from './ActionBar'
import conference from 'config/conference'
import { add } from 'date-fns'
import { axe } from 'jest-axe'
import { TicketPurchasingOptions } from 'config/types'

function renderActionBar(date?: Date) {
  if (date) {
    jest.setSystemTime(date)
  }

  const utils = render(<ActionBar />)

  return {
    date,
    ...utils,
  }
}

describe('<ActionBar />', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  test('renders', () => {
    renderActionBar()

    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  test('Show link when accepting presentations', () => {
    renderActionBar(add(conference.PresentationSubmissionsOpenFrom, { days: 1 }))

    expect(screen.getByText(/submit presentation/i)).toBeInTheDocument()
  })

  test('Show link when voting opens', () => {
    renderActionBar(add(conference.VotingOpenFrom, { minutes: 1 }))

    expect(screen.getByText(/vote for/i)).toBeInTheDocument()
  })

  test('Show link when registration opens', () => {
    const originalValue = conference.TicketPurchasingOptions
    conference.TicketPurchasingOptions = TicketPurchasingOptions.OnSale
    renderActionBar(add(conference.RegistrationOpenFrom, { minutes: 1 }))

    expect(screen.getByText(/purchase/i)).toBeInTheDocument()

    conference.TicketPurchasingOptions = originalValue
  })
})

describe('<ActionBar/> a11y', () => {
  test('Has no violations', async () => {
    const { container } = renderActionBar()

    expect(await axe(container)).toHaveNoViolations()
  })
})
