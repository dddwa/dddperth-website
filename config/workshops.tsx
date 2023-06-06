import { ImportantDate } from './types'

export const workshops: {
  bookingLink: string
  dates: ImportantDate[]
} = {
  bookingLink: 'https://ti.to/dddperth/prep-workshops-2023',
  dates: [
    { Type: 'cfp-workshop', Date: new Date('2023-05-04T17:30:00+08:00'), Description: 'CFP Workshop - (In Person)' },
    {
      Type: 'bio-workshop',
      Date: new Date('2023-05-10T17:30:00+08:00'),
      Description: 'Bio Writing Workshop - (Online)',
    },
    { Type: 'cfp-workshop', Date: new Date('2023-05-16T17:30:00+08:00'), Description: 'CFP Workshop - (In Person)' },
    { Type: 'cfp-workshop', Date: new Date('2023-06-08T17:30:00+08:00'), Description: 'CFP Workshop - (Online)' },
    {
      Type: 'bio-workshop',
      Date: new Date('2023-06-13T17:30:00+08:00'),
      Description: 'Bio Writing Workshop - (In Person)',
    },
  ],
}
