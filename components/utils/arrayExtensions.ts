import { Array } from 'global'

declare global {
  interface Array<T> {
    unique(): T[]
    selectMany<TInner>(propertyToSelect: (a: T) => TInner[]): TInner[]
  }
}

Array.prototype.unique = function() {
  return this.filter((v, i, a) => a.indexOf(v) === i)
}

Array.prototype.selectMany = function<T, TInner>(propertyToSelect: (a: T) => TInner[]): TInner[] {
  return (this as T[]).map(propertyToSelect).reduce((a, b) => a.concat(b))
}
