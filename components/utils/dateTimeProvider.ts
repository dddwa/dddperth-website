import { Moment } from 'moment'
import * as moment from 'moment'

export interface CurrentDate {
  Value: Moment
}

export default {
  now(): CurrentDate {
    return { Value: moment(new Date()) }
  },
}
