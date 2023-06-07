import { CurrentDate } from 'components/utils/dateTimeProvider'
import { Conference, Dates as IDates, TicketPurchasingOptions } from './types'
import { formatInTimeZone } from 'date-fns-tz'
import { sub, subMinutes } from 'date-fns'

export default function getConferenceDates(conference: Conference, currentDate: CurrentDate): IDates {
  const now = currentDate.Value
  const isComplete = now > conference.EndDate
  const isInProgress = now > conference.Date
  const dateDisplayFormat = 'iiii do MMMM yyyy'
  const registrationClosed = conference.RegistrationOpenUntil !== null && now > conference.RegistrationOpenUntil

  return {
    Display: conference.HideDate
      ? 'TBA'
      : `${formatInTimeZone(conference.Date, conference.TimeZone, dateDisplayFormat)}`,
    DisplayFormatted: (dateFormat: string) =>
      conference.HideDate ? 'TBA' : `${formatInTimeZone(conference.Date, conference.TimeZone, dateFormat)}`,
    DateDisplayFormat: dateDisplayFormat,
    TimeDisplayFormat: 'h:mma',
    IsComplete: isComplete,
    IsInProgress: isInProgress && !isComplete,
    HasNotStarted: !isInProgress && !isComplete,
    RegistrationOpen:
      // Open the registration 15 minutes before the registration open from date
      // just to avoid any timing issues between social posts and the website
      now > subMinutes(conference.RegistrationOpenFrom, 15) &&
      conference.TicketPurchasingOptions === TicketPurchasingOptions.OnSale &&
      !registrationClosed,
    RegistrationClosed: registrationClosed,
    AcceptingPresentations:
      now > conference.PresentationSubmissionsOpenFrom && now < conference.PresentationSubmissionsOpenUntil,
    VotingOpen: now > conference.VotingOpenFrom && now < conference.VotingOpenUntil,
    VotingFinished: now > conference.VotingOpenUntil,
    AgendaPublished: now > conference.AgendaPublishedFrom,
    AcceptingFeedback: now > conference.FeedbackOpenFrom && now < conference.FeedbackOpenUntil,
    WeekBefore: now > sub(conference.Date, { days: 7 }),
  }
}
