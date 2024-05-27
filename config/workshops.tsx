import { ImportantDate } from './types'

export const workshops: {
  bookingLink?: string
  dates: ImportantDate[]
} = {
  bookingLink: 'https://ti.to/dddperth/virtual-cfp-workshop-2024',
  dates: [
    {
      Type: 'cfp-workshop',
      Date: new Date('2024-06-13T17:30:00+08:00'),
      Description: 'CFP & Bio Workshop - (Online & In Person)',
    },
  ],
}
