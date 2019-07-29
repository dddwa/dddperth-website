import React from 'react'
import uuid from 'uuid'
import { storageKey, StorageKeys } from './storageKey'

export function useDeviceId(instance: string) {
  const [deviceId, setDeviceId] = React.useState<string>(() => {
    try {
      return localStorage.getItem(storageKey<StorageKeys>(instance, StorageKeys.DEVICE_ID))
    } catch {
      return undefined
    }
  })

  React.useEffect(() => {
    if (!deviceId) {
      const deviceUUID = uuid()
      try {
        localStorage.setItem(storageKey<StorageKeys>(instance, StorageKeys.DEVICE_ID), deviceUUID)
        setDeviceId(localStorage.getItem(storageKey<StorageKeys>(instance, StorageKeys.DEVICE_ID)))
      } catch {
        setDeviceId(deviceUUID)
      }
    }
  }, [deviceId])

  return {
    deviceId,
  }
}
