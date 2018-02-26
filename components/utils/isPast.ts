import { Moment } from "moment";
import * as moment from "moment";

export default function isPast(date: Moment) {

  return date < moment(new Date());
}
