import React from 'react'
import { Session, Sponsor } from 'config/types'
import { onSelectCallback } from 'components/Agenda/Agenda'

interface AgendaContextProps {
  onSelect: onSelectCallback
  getSession: (id: string) => Session
  getSponsor: (id: string) => Sponsor
  getRoom: (roomId: number | string) => string
  getLivestream: (roomId: number | string) => string
}

interface AgendaProviderProps
  extends Partial<Omit<AgendaContextProps, 'onSelect'>>,
    Pick<AgendaContextProps, 'onSelect'> {
  children: React.ReactNode
  sessions: Session[]
  sponsors: Sponsor[]
  rooms: string[]
  livestreams: string[]
}

const AgendaContext = React.createContext<AgendaContextProps | undefined>(undefined)

export const AgendaProvider = ({
  children,
  sessions,
  sponsors,
  rooms,
  livestreams,
  onSelect,
  getRoom = (roomId) => (typeof roomId === 'string' ? roomId : rooms[roomId]),
  getSession = (id) => sessions.find((session) => session.Id === id),
  getSponsor = (id) => sponsors.find((sponsor) => sponsor.id === id),
  getLivestream = (roomId) => (typeof roomId === 'number' ? livestreams[roomId] : ''),
}: AgendaProviderProps) => {
  return (
    <AgendaContext.Provider
      value={{
        getRoom,
        getSession,
        getSponsor,
        onSelect,
        getLivestream,
      }}
    >
      {children}
    </AgendaContext.Provider>
  )
}

export function useAgendaContext(): AgendaContextProps {
  const context = React.useContext(AgendaContext)
  if (context === undefined) {
    throw new Error('useAgendaContext must be used within an AgendaProvider')
  }
  return context
}
