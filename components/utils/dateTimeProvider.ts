import { add } from 'date-fns'

export interface CurrentDate {
  Value: Date
}

export default {
  setDateTo(date: Date): void {
    this.now = () => {
      return {
        Value: add(date, { minutes: 1 }),
      }
    }
  },

  now(): CurrentDate {
    return { Value: new Date() }
  },
}
