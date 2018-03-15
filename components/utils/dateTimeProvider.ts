import { Moment } from 'moment'
import * as moment from 'moment'

export default {
    now(): Moment {
        return moment(new Date())
    },
}
