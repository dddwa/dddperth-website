import { CurrentDate } from '../components/utils/dateTimeProvider'
import { Conference, Dates as IDates } from './types'

export default function getConferenceDates(conference: Conference, currentDate: CurrentDate): IDates {
  const now = currentDate.Value
  const isComplete = now > conference.Date.clone().add(1, 'd')
  const isInProgress = now > conference.Date
  const dateDisplayFormat = 'ddd Do MMM YYYY'
  const registrationClosed = conference.RegistrationOpenUntil !== null && now > conference.RegistrationOpenUntil

  // tslint:disable:object-literal-sort-keys
  return {
    Display: conference.HideDate ? 'TBA' : `${conference.Date.format(dateDisplayFormat)}`,
    DateDisplayFormat: dateDisplayFormat,
    TimeDisplayFormat: 'h:mma',
    IsComplete: isComplete,
    IsInProgress: isInProgress && !isComplete,
    HasNotStarted: !isInProgress && !isComplete,
    RegistrationOpen: now > conference.RegistrationOpenFrom && !conference.IsSoldOut && !registrationClosed,
    RegistrationClosed: registrationClosed,
    AcceptingPresentations:
      now > conference.PresentationSubmissionsOpenFrom && now < conference.PresentationSubmissionsOpenUntil,
    VotingOpen: now > conference.VotingOpenFrom && now < conference.VotingOpenUntil,
    AgendaPublished: now > conference.AgendaPublishedFrom,
    AcceptingFeedback: now > conference.FeedbackOpenFrom && now < conference.FeedbackOpenUntil,
  }
}
