import * as configcat from 'configcat-js-ssr'
import { IConfigCatClient } from 'configcat-common'

// https://configcat.com/docs/sdk-reference/js-ssr#setting-log-levels
const logger = configcat.createConsoleLogger(process.env.NODE_ENV === 'development' ? 3 : -1)
let featureFlagClient: IConfigCatClient | undefined

export function getFlagClient() {
  if (!featureFlagClient) {
    logger.info('Creating ConfigCat client')
    featureFlagClient = configcat.createClient(process.env.NEXT_PUBLIC_CONFIGCAT_SDK_KEY, { logger })
  }

  return featureFlagClient
}
