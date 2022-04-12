import { NextApiRequestCookies } from 'next/dist/server/api-utils'
import { TestingControlCookie } from './TestingControlConsts'

export function getTestingControlDate(cookies: NextApiRequestCookies) {
  return cookies[TestingControlCookie]
}
