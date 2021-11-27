export enum StorageKeys {
  DEVICE_ID = 'ddd-device-id',
  FEEDBACK_GIVER = 'ddd-feedback-name',
}

export function storageKey<T>(instance: string, key: T): string {
  return `${key}-${instance}`
}

export function getLocalStoredName(instance: string): string {
  try {
    return localStorage.getItem(storageKey<StorageKeys>(instance, StorageKeys.FEEDBACK_GIVER))
  } catch (err) {
    return ''
  }
}
