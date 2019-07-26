import { Moment } from 'moment'
import React from 'react'
import { Session } from '../../config/types'
import dateTimeProvider from './dateTimeProvider'

type SessionId = string // UUID

export interface SessionGroup {
  timeStart: Moment
  timeEnd: Moment
  sessions: Session[]
}

interface SessionGroups {
  allSessionGroups: SessionGroup[]
  currentSessionGroup?: SessionGroup
  previousSessionGroup?: SessionGroup
  nextSessionGroup?: SessionGroup
  pastSessionGroups?: SessionGroup[]
  futureSessionGroups?: SessionGroup[]
}

function getSessionById(sessions: Session[], ids: SessionId[]) {
  return sessions.filter(session => ids.includes(session.Id))
}

// Creates the session groups.
// Important: Order is assumed to be correct.
function createSessionGroups(conferenceDate: Moment, sessions: Session[]): SessionGroup[] {
  return [
    {
      sessions: getSessionById(sessions, ['112b54cc-df00-40fd-ad5e-4b0714329821']),
      timeEnd: conferenceDate.clone().set({ hour: 9, minutes: 55 }),
      timeStart: conferenceDate.clone().set({ hour: 9, minutes: 10 }),
    },
    {
      sessions: getSessionById(sessions, [
        'ae58057e-2cea-4300-bdb7-f51d57476179',
        '8cd14aaa-89cb-4886-9649-ceb0cd4b27d1',
        '385e78cf-b12a-466c-9fb8-e29c7fd627fb',
        'c044309e-e859-4b5c-adad-7534a36284e0',
        'b73abc43-7634-40d3-a38b-696bdb844cc0',
        'cc740103-612c-4673-b293-97487787f093',
      ]),
      timeEnd: conferenceDate.clone().set({ hour: 10, minute: 25 }),
      timeStart: conferenceDate.clone().set({ hour: 10, minutes: 5 }),
    },
    {
      sessions: getSessionById(sessions, [
        'f8967843-c437-4a90-9242-fac45c4ea1a6',
        'cea40511-0eeb-4ac8-8c1e-098a966f7314',
        '643434fc-64d5-49ba-a1d8-848a7570b6fa',
        'df03352d-b177-420d-b66a-b1c174e3e0a3',
        'b446c945-6210-4b56-bc78-772347060a5b',
        '2fff2f0e-7f55-4a26-bf15-7537a6c3f700',
      ]),
      timeEnd: conferenceDate.clone().set({ hour: 11, minute: 40 }),
      timeStart: conferenceDate.clone().set({ hour: 10, minute: 55 }),
    },
    {
      sessions: getSessionById(sessions, [
        '7bb9859c-ed23-4569-b863-7b4c440b2b88',
        '9c81bbdb-8898-4259-afac-0dc73ff363b5',
        '24ad37da-2c0b-4f5c-afde-3266217e6d80',
        '3c2badde-1534-494b-a084-8ca5857d648d',
        'f3a57e6c-0325-4898-bffd-2d3040f5dee9',
        'adbcf783-1ab2-456b-ba41-1041f139e3f2',
      ]),
      timeEnd: conferenceDate.clone().set({ hour: 12, minute: 10 }),
      timeStart: conferenceDate.clone().set({ hour: 11, minute: 50 }),
    },
    {
      sessions: getSessionById(sessions, [
        '9b7efb7a-64e0-41ac-9439-f65a662147da',
        '6d6553c0-b678-434d-b94e-c46fe77c86eb',
        '0bcae524-eb87-4080-b189-ab5c7d5ad5fa',
        '5aba6e83-cfd9-4114-af80-f28de931d8c2',
        'fd0518e0-a52c-44dd-84fb-61ce59c3cdb5',
        '70537fd7-4e49-4100-97ee-ce79c71545d6',
      ]),
      timeEnd: conferenceDate.clone().set({ hour: 13, minute: 5 }),
      timeStart: conferenceDate.clone().set({ hour: 12, minute: 20 }),
    },
    {
      sessions: getSessionById(sessions, [
        'a6eb8bb3-6086-4cb3-b024-d0a6c4dd3de3',
        'a577e148-b1d7-42e1-a424-5d0db3107ae2',
        '2fcea05c-96dc-4802-b8a9-14bcfee01a64',
        '97792db7-0c73-4fee-91c3-00d7fe002540',
        'fa861d2a-9597-4a98-8510-fc0dc0b400e6',
        '83b6a640-935b-4e5e-b251-81c3d69c0129',
      ]),
      timeEnd: conferenceDate.clone().set({ hour: 14, minute: 25 }),
      timeStart: conferenceDate.clone().set({ hour: 14, minute: 5 }),
    },
    {
      sessions: getSessionById(sessions, [
        'b2795175-d14d-4090-a62e-153d4534b916',
        '80721e7b-b082-4b50-9a9d-136d3054b7b0',
        '94a2f4b3-bd6e-4eb6-9917-baa3bcb3d41f',
        'f548e402-d04d-4318-a8c6-d879b3f11d37',
        '00311b92-6c21-47a8-b8d2-af325581d6f9',
        '35e1174f-8d50-48db-a410-d53c3c8ddf73',
      ]),
      timeEnd: conferenceDate.clone().set({ hour: 15, minute: 20 }),
      timeStart: conferenceDate.clone().set({ hour: 14, minute: 35 }),
    },
    {
      sessions: getSessionById(sessions, ['4c019f6f-c312-4bb9-8024-3352f6034d6e']),
      timeEnd: conferenceDate.clone().set({ hour: 17, minute: 5 }),
      timeStart: conferenceDate.clone().set({ hour: 16, minute: 20 }),
    },
  ]
}

// so manual - ideally there would be a better way to achieve this or expand it to handle the agenda too
// e.g. on the agenda page show next sessions up top then the whole list
export function useSessionGroups(
  conferenceDate: Moment,
  conferenceEndDate: Moment,
  sessions: Session[],
): SessionGroups {
  const allSessionGroups: SessionGroup[] = React.useMemo(() => createSessionGroups(conferenceDate, sessions), [
    conferenceDate.toString(),
  ])
  const isConferenceDay = dateTimeProvider.now().Value.isBetween(conferenceDate, conferenceEndDate)

  let pastSessionsIndex: number = -1
  let previousSessionIndex: number = -1
  let nextSessionIndex: number = -1
  let currentSessionIndex: number = -1
  let futureSessionIndex: number = -1

  for (let i = 0; i < allSessionGroups.length; i++) {
    const session = allSessionGroups[i]
    const isCurrentSession = dateTimeProvider.now().Value.isBetween(session.timeStart, session.timeEnd)
    const isNextSession = dateTimeProvider.now().Value.isBefore(session.timeStart)
    const isAfterSession = dateTimeProvider.now().Value.isAfter(session.timeEnd)

    if (!isConferenceDay) {
      break
    }

    if (isCurrentSession) {
      pastSessionsIndex = i - 2 >= 0 ? i - 1 : -1
      previousSessionIndex = i - 1 >= 0 ? i - 1 : -1
      currentSessionIndex = i
      nextSessionIndex = i + 1 < allSessionGroups.length ? i + 1 : -1
      futureSessionIndex = i + 2 < allSessionGroups.length ? i + 2 : -1
      break
    } else if (isNextSession) {
      pastSessionsIndex = i - 2 >= 0 ? i - 1 : -1
      previousSessionIndex = i - 1 >= 0 ? i - 1 : -1
      currentSessionIndex = -1
      nextSessionIndex = i
      futureSessionIndex = i + 1 < allSessionGroups.length ? i + 1 : -1
      break
    } else if (i === allSessionGroups.length - 1 && isAfterSession) {
      // after the last talk
      pastSessionsIndex = i - 1
      previousSessionIndex = i
      break
    }
  }

  const calculatedSessionGroups = React.useMemo<Omit<SessionGroups, 'allSessionGroups'>>(
    () => ({
      ...(pastSessionsIndex !== -1 ? { pastSessionGroups: allSessionGroups.slice(0, pastSessionsIndex) } : {}),
      ...(previousSessionIndex !== -1 ? { previousSessionGroup: allSessionGroups[previousSessionIndex] } : {}),
      ...(currentSessionIndex !== -1 ? { currentSessionGroup: allSessionGroups[currentSessionIndex] } : {}),
      ...(nextSessionIndex !== -1 ? { nextSessionGroup: allSessionGroups[nextSessionIndex] } : {}),
      ...(futureSessionIndex !== -1 ? { futureSessionGroups: allSessionGroups.slice(futureSessionIndex) } : {}),
    }),
    [pastSessionsIndex, previousSessionIndex, nextSessionIndex, currentSessionIndex, futureSessionIndex],
  )

  return {
    ...calculatedSessionGroups,
    allSessionGroups,
  }
}
