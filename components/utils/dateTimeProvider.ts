import moment, { Moment } from 'moment'

export interface CurrentDate {
  Value: Moment
}

export default {
  setDateTo(date: Moment): void {
    this.now = () => {
      return {
        Value: date.clone().add(1, 'minute'),
      }
    }
  },

  now(): CurrentDate {
    return { Value: moment(new Date()) }
  },
}
