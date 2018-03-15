import { Moment } from 'moment'

export function orderBy<T>(input: T[], propertyToOrderBy: (a: T) => Moment) {
  const output = [...input]

  return output.sort(
    (a, b) => propertyToOrderBy(a).valueOf() - propertyToOrderBy(b).valueOf(),
  )
}
