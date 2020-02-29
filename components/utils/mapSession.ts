import { Session } from '../../config/types'
import uuid from 'uuid'

export interface SessionV1 {
  SessionId: string
  SessionTitle: string
  SessionAbstract: string
  RecommendedAudience: string
  PresenterName: string
  PresenterEmail: string
  PresenterTwitterAlias: string
  PresenterWebsite: string | null
  PresenterBio: string
}

export function mapSessions(sessions: SessionV1[]): Session[] {
  return sessions.map(oldSession => {
    const mappedSession: Session = {
      Id: oldSession.SessionId,
      Title: oldSession.SessionTitle,
      Abstract: oldSession.SessionAbstract,
      Format: '',
      Level: oldSession.RecommendedAudience,
      Tags: [],
      Presenters: [
        {
          Id: uuid.v1(),
          Bio: oldSession.PresenterBio,
          Name: oldSession.PresenterName,
          ProfilePhotoUrl: '',
          Tagline: '',
          TwitterHandle: oldSession.PresenterTwitterAlias,
          WebsiteUrl: oldSession.PresenterWebsite,
        },
      ],
    }
    return mappedSession
  })
}
