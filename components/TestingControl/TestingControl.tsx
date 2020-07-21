import moment, { Moment } from 'moment'
import React, { useState } from 'react'
import From2017 from 'config/2017'
import SponsorData from 'config/sponsors'
import { Conference, TicketPurchasingOptions } from 'config/types'
import { Button } from 'components/global/Button/Button'
import dateTimeProvider, { CurrentDate } from 'components/utils/dateTimeProvider'
import { StyledButton, StyledTestingControl, StyledTestingHeading, StyledTestingPanel } from './TestingControl.styled'

interface TestingControlProps {
  currentDate: CurrentDate
  conference: Conference
}

export const TestingControl: React.FC<TestingControlProps> = ({ currentDate, conference }) => {
  const [show, setShow] = useState(false)

  const setDateTo = (date: Moment) => {
    dateTimeProvider.now = () => {
      return {
        Value: date.clone().add(1, 'minute'),
      }
    }
  }

  const resetVote = () => {
    localStorage.removeItem('ddd-voting-submitted')
    localStorage.removeItem('ddd-voting-id')
  }

  const reset = () => {
    dateTimeProvider.now = () => {
      return {
        Value: moment(new Date()),
      }
    }

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
            onClick={() => setDateTo(conference.PresentationSubmissionsOpenFrom.clone().add(-1, 'd'))}
          >
            Pre-CFP
          </StyledButton>
          <StyledButton kind="secondary" onClick={() => setDateTo(conference.PresentationSubmissionsOpenFrom)}>
            CFP open
          </StyledButton>
          <StyledButton kind="tertiary" onClick={() => setDateTo(conference.VotingOpenFrom)}>
            Voting open
          </StyledButton>
          <StyledButton kind="tertiary" onClick={() => setDateTo(conference.VotingOpenUntil)}>
            Voting closed
          </StyledButton>
          <StyledButton kind="inverse" onClick={() => setDateTo(conference.AgendaPublishedFrom)}>
            Agenda published
          </StyledButton>
          <StyledButton kind="primary" onClick={() => setDateTo(conference.Date)}>
            On the day
          </StyledButton>
          <StyledButton kind="primary" onClick={() => setDateTo(conference.EndDate)}>
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
          <p className="text-center">
            Now: <code>{currentDate.Value.format('DD/MM/YYYY h:mma')}</code>
          </p>
        </StyledTestingPanel>
      )}
    </StyledTestingControl>
  )
}
