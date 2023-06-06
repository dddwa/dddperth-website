import React, { useState } from 'react'
import From2017 from 'config/2017'
import SponsorData from 'config/sponsors'
import { TicketPurchasingOptions } from 'config/types'
import { Button } from 'components/global/Button/Button'
import dateTimeProvider from 'components/utils/dateTimeProvider'
import { StyledButton, StyledTestingControl, StyledTestingHeading, StyledTestingPanel } from './TestingControl.styled'
import { sub, format, set } from 'date-fns'
import { useConfig } from 'Context/Config'
import Cookies from 'js-cookie'
import { TestingControlCookie } from './TestingControlConsts'

export const TestingControl = (): JSX.Element => {
  const { conference, currentDate } = useConfig()
  const [show, setShow] = useState(false)

  function storeTime(dateOverride: Date) {
    dateTimeProvider.setDateTo(dateOverride)
    Cookies.set(TestingControlCookie, dateOverride.toISOString())
  }

  const resetVote = () => {
    localStorage.removeItem('ddd-voting-submitted')
    localStorage.removeItem('ddd-voting-id')
  }

  const reset = () => {
    dateTimeProvider.reset()
    Cookies.remove(TestingControlCookie)

    conference.Sponsors = SponsorData
    conference.TicketPurchasingOptions = TicketPurchasingOptions.SoldOut
  }

  return (
    <StyledTestingControl>
      <StyledTestingHeading>
        Testing [
        <Button kind="link" onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'}
        </Button>
        ]
      </StyledTestingHeading>
      {show && (
        <StyledTestingPanel>
          <StyledButton
            kind="primary"
            onClick={() => {
              storeTime(sub(conference.PresentationSubmissionsOpenFrom, { days: 1 }))
            }}
          >
            Pre-CFP
          </StyledButton>
          <StyledButton kind="secondary" onClick={() => storeTime(conference.PresentationSubmissionsOpenFrom)}>
            CFP open
          </StyledButton>
          <StyledButton kind="tertiary" onClick={() => storeTime(conference.VotingOpenFrom)}>
            Voting open
          </StyledButton>
          <StyledButton kind="tertiary" onClick={() => storeTime(conference.VotingOpenUntil)}>
            Voting closed
          </StyledButton>
          <StyledButton kind="inverse" onClick={() => storeTime(conference.AgendaPublishedFrom)}>
            Agenda published
          </StyledButton>
          <StyledButton kind="inverse" onClick={() => storeTime(conference.RegistrationOpenFrom)}>
            Registration opened
          </StyledButton>
          <StyledButton kind="primary" onClick={() => storeTime(conference.Date)}>
            On the day
          </StyledButton>
          <StyledButton kind="primary" onClick={() => storeTime(set(conference.Date, { hours: 11, minutes: 30 }))}>
            During the day
          </StyledButton>
          <StyledButton kind="primary" onClick={() => storeTime(conference.EndDate)}>
            Conference over
          </StyledButton>
          <StyledButton
            kind="inverse"
            onClick={() =>
              (conference.TicketPurchasingOptions =
                conference.TicketPurchasingOptions === TicketPurchasingOptions.OnSale
                  ? TicketPurchasingOptions.SoldOut
                  : conference.TicketPurchasingOptions === TicketPurchasingOptions.SoldOut
                  ? TicketPurchasingOptions.WaitListOpen
                  : TicketPurchasingOptions.OnSale)
            }
          >
            Tickets sold out
          </StyledButton>
          <StyledButton kind="inverse" onClick={() => (conference.Sponsors = From2017.Sponsors)}>
            Add sponsors
          </StyledButton>
          <StyledButton kind="secondary" onClick={resetVote}>
            Reset Vote
          </StyledButton>
          <StyledButton kind="secondary" onClick={reset}>
            Reset
          </StyledButton>
          <p>
            Now: <code>{format(currentDate.Value, 'dd/MM/yyyy h:mma')}</code>
          </p>
        </StyledTestingPanel>
      )}
    </StyledTestingControl>
  )
}
