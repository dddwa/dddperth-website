import { mapGridSmartToAgendaDisplay } from 'components/Agenda/gridSmartUtils'
import { AgendaForDisplay, Session } from 'config/types'
import { mapSessions } from './mapSession'

export async function fetchSessions(sessionsAPI: string): Promise<false | Session[]> {
  const response = await fetch(sessionsAPI)
  if (!response.ok) {
    return false
  }

  let body = await response.json()
  if (body.length > 0 && body[0].SessionId) {
    // Map old session structure to new session structure
    body = mapSessions(body)
  }
  return body as Session[]
}

export async function fetchAgenda(agendaAPI: string): Promise<false | AgendaForDisplay> {
  let agenda: false | AgendaForDisplay = false
  try {
    const resp = await fetch(agendaAPI)
    if (resp.ok) {
      const json = await resp.json()
      const parsed = JSON.parse(json)
      agenda = mapGridSmartToAgendaDisplay(parsed)
    }
  } catch (e) {
    // no dynamic agenda for this year
  }
  return agenda
}
