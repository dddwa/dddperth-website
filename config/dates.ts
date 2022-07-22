import { CurrentDate } from 'components/utils/dateTimeProvider'
import { Conference, Dates as IDates, TicketPurchasingOptions } from './types'
import { formatInTimeZone } from 'date-fns-tz'

export default function getConferenceDates(conference: Conference, currentDate: CurrentDate): IDates {
  const now = currentDate.Value
  const isComplete = now > conference.EndDate
  const isInProgress = now > conference.Date
  const dateDisplayFormat = 'iiii do MMMM yyyy'
  const registrationClosed = conference.RegistrationOpenUntil !== null && now > conference.RegistrationOpenUntil

  return {
    Display: conference.HideDate ? 'TBA' : `${formatInTimeZone(conference.Date, conference.TimeZone, dateDisplayFormat)}`,
    DisplayFormatted: (dateFormat: string) => (conference.HideDate ? 'TBA' : `${formatInTimeZone(conference.Date, conference.TimeZone, dateFormat)}`),
    DateDisplayFormat: dateDisplayFormat,
    TimeDisplayFormat: 'h:mma',
    IsComplete: isComplete,
    IsInProgress: isInProgress && !isComplete,
    HasNotStarted: !isInProgress && !isComplete,
    RegistrationOpen:
      now > conference.RegistrationOpenFrom &&
      conference.TicketPurchasingOptions === TicketPurchasingOptions.OnSale &&
      !registrationClosed,
    RegistrationClosed: registrationClosed,
    AcceptingPresentations:
      now > conference.PresentationSubmissionsOpenFrom && now < conference.PresentationSubmissionsOpenUntil,
    VotingOpen: now > conference.VotingOpenFrom && now < conference.VotingOpenUntil,
    VotingFinished: now > conference.VotingOpenUntil,
    AgendaPublished: now > conference.AgendaPublishedFrom,
    AcceptingFeedback: now > conference.FeedbackOpenFrom && now < conference.FeedbackOpenUntil,
  }
}
