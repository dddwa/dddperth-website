import React, { useState } from 'react'
import From2017 from 'config/2017'
import SponsorData from 'config/sponsors'
import { Conference, TicketPurchasingOptions } from 'config/types'
import { Button } from 'components/global/Button/Button'
import dateTimeProvider, { CurrentDate } from 'components/utils/dateTimeProvider'
import { StyledButton, StyledTestingControl, StyledTestingHeading, StyledTestingPanel } from './TestingControl.styled'
import { add, sub, format } from 'date-fns'

interface TestingControlProps {
  currentDate: CurrentDate
  conference: Conference
}

export const TestingControl: React.FC<TestingControlProps> = ({ currentDate, conference }) => {
  const [show, setShow] = useState(false)

  const resetVote = () => {
    localStorage.removeItem('ddd-voting-submitted')
    localStorage.removeItem('ddd-voting-id')
  }

  const reset = () => {
    dateTimeProvider.reset();

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
            onClick={() => dateTimeProvider.setDateTo(sub(conference.PresentationSubmissionsOpenFrom, { days: 1 }))}
          >
            Pre-CFP
          </StyledButton>
          <StyledButton kind="secondary" onClick={() => dateTimeProvider.setDateTo(conference.PresentationSubmissionsOpenFrom)}>
            CFP open
          </StyledButton>
          <StyledButton kind="tertiary" onClick={() => dateTimeProvider.setDateTo(conference.VotingOpenFrom)}>
            Voting open
          </StyledButton>
          <StyledButton kind="tertiary" onClick={() => dateTimeProvider.setDateTo(conference.VotingOpenUntil)}>
            Voting closed
          </StyledButton>
          <StyledButton kind="inverse" onClick={() => dateTimeProvider.setDateTo(conference.AgendaPublishedFrom)}>
            Agenda published
          </StyledButton>
          <StyledButton kind="primary" onClick={() => dateTimeProvider.setDateTo(conference.Date)}>
            On the day
          </StyledButton>
          <StyledButton kind="primary" onClick={() => dateTimeProvider.setDateTo(conference.EndDate)}>
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
