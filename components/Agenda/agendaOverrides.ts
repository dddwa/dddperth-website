import { AgendaForDisplay } from 'config/types'
import { with2022Overrides } from 'pages/agenda/2022'

export function withOverrides(agenda: AgendaForDisplay, instance: string): AgendaForDisplay {
  switch (instance) {
    case '2022':
      return with2022Overrides(agenda)
    default:
      return agenda
  }
}
