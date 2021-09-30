export function orderBy<T>(input: T[], propertyToOrderBy: (a: T) => Date): T[] {
  const output = [...input]

  return output.sort((a, b) => propertyToOrderBy(a).valueOf() - propertyToOrderBy(b).valueOf())
}
