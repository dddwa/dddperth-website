import { Moment } from "moment";
import * as moment from "moment";
import dateTimeProvider from "./dateTimeProvider";

export default function isPast(date: Moment) {

  return date < dateTimeProvider.now();
}
