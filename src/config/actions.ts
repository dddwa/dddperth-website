import { Action, Conference, Dates } from './types'

export default function getConferenceActions(conference: Conference, dates: Dates): Action[] {
  const actions: Action[] = []

  if (dates.AcceptingPresentations) {
    actions.push({
      Category: 'content',
      Title: 'Submit presentation',
      Url: '/cfp',
    })
  }

  if (dates.VotingOpen) {
    actions.push({
      Category: 'voting',
      Title: 'Vote for agenda',
      Url: '/vote',
    })
  }

  if (dates.RegistrationOpen) {
    actions.push({
      Category: 'tickets',
      Title: 'Purchase a ticket',
      Url: '/tickets',
    })
  }

  if (dates.AcceptingFeedback) {
    actions.push({
      Category: 'conference',
      Title: 'Give feedback',
      Url: '/feedback',
    })
  }

  actions.push({
    Category: 'agenda',
    Title: `${conference.Instance} agenda`,
    Url: '/agenda',
  })

  if (conference.Handbook) {
    actions.push({
      Category: 'conference',
      Title: 'Download handbook',
      Url: '/static/docs/' + conference.Handbook,
    })
  }

  return actions
}
