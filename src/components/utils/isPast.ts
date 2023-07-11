import { Moment } from 'moment'
import { CurrentDate } from './dateTimeProvider'

export default function isPast(date: Moment, currentDate: CurrentDate) {
  return date < currentDate.Value
}
