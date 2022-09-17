import { zonedTimeToUtc } from 'date-fns-tz'

type RoomName = string

interface Room {
  name: RoomName
  livestreamUrl: string | null
}

export interface AgendaForDisplay {
  date: string
  rooms: Room[]
  slots: AgendaSlot[]
}

interface BaseSlot {
  type: string
  startTime: string
  endTime: string
}

export interface SessionSlot extends BaseSlot {
  type: 'sessions'
  sessionsByRoom: Record<RoomName, [SessionForDisplay, ...SessionForDisplay[]]>
}

export interface ServiceSlot extends BaseSlot {
  type: 'service'
  service: ServiceForDisplay
}

export type AgendaSlot = ServiceSlot | SessionSlot

export interface SessionForDisplay {
  roomName: RoomName
  sessionId: string | null
  title: string
  isKeynote: boolean
  isLocknote: boolean
  sponsorId: string | null
}

export interface ServiceForDisplay {
  title: string
  description: string | null
  roomName: RoomName | null
  sponsorId: string | null
}

export type GridSmartJson = typeof import('public/static/agenda/2022_gridsmart.json')

export function mapGridSmartToAgendaDisplay(gridSmart: GridSmartJson): AgendaForDisplay {
  if (gridSmart.length === 0) {
    throw new Error('No sessions in gridsmart')
  }
  if (gridSmart.length > 1) {
    throw new Error('Multiple-day conferences not supported (yet)')
  }

  const dayOne = gridSmart[0]
  if (!dayOne) {
    throw new Error('No data in gridsmart')
  }

  const date = dayOne.date

  const rooms = dayOne.rooms.map<Room>((r) => ({
    name: r.name,
    livestreamUrl: null, // this can be added later
  }))

  const slots = dayOne.timeSlots.map<AgendaForDisplay['slots'][0]>((timeSlot) => {
    // ASSUMPTION: all talks in the slot start and end at the same time
    const startTime = zonedTimeToUtc(timeSlot.rooms[0].session.startsAt, '+08:00').toISOString()
    const endTime = zonedTimeToUtc(timeSlot.rooms[0].session.endsAt, '+08:00').toISOString()

    const isService = timeSlot.rooms.every((x) => x.session.isServiceSession)
    if (isService) {
      // ASSUMPTION: service slots will only ever have one session
      const title = timeSlot.rooms[0].session.title
      const description = timeSlot.rooms[0].session.description
      let roomName = timeSlot.rooms[0].name
      const isChangeover = title === 'Changeover'
      if (isChangeover) {
        roomName = null // we don't display rooms for changeover
      }
      return {
        type: 'service',
        startTime,
        endTime,
        service: {
          roomName,
          title,
          description,
          sponsorId: null, // can be fudged if we want sponsors for particular sessions
        },
      }
    }

    return {
      type: 'sessions',
      startTime,
      endTime,

      sessionsByRoom: timeSlot.rooms.reduce<SessionSlot['sessionsByRoom']>((map, room) => {
        const session: SessionForDisplay = {
          roomName: room.name,
          sessionId: room.session.id,
          title: room.session.title,
          // HACK: we can't differentiate between keynote and locknote except by position in the day
          // so assume anything near the start is keynote and anything after that is locknote.
          // review if we add lunchnote talks again
          isKeynote: room.session.isPlenumSession, //&& timeSlotIndex <= dayOne.timeSlots.length / 2,
          isLocknote: room.session.isPlenumSession, //&& timeSlotIndex > dayOne.timeSlots.length / 2,
          sponsorId: null, // can be fudged if we want sponsors for particular sessions
        }
        return {
          ...map,
          // we return an array because we could have multiple sessions per slot,
          // however sessionize will treat them as different slots
          // we will call another function to merge the two slots, on a per-conference basis
          // (which will also allow other changes like fudging room names)
          [room.name]: [session],
        }
      }, {}),
    }
  })

  return {
    date,
    rooms,
    slots,
  }
}
