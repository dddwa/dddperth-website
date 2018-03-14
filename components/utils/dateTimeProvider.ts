import { Moment } from "moment";
import * as moment from "moment";

export default {
  now: function() : Moment {
    return moment(new Date());
  }
}