export function storageKey<T>(instance: string, key: T) {
  return `${key}-${instance}`
}
