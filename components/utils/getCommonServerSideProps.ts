import { TestingControlCookie } from 'components/TestingControl/TestingControlConsts'
import Conference from 'config/conference'
import getConferenceDates from 'config/dates'
import { GetServerSidePropsContext, PreviewData } from 'next/types'
import { ParsedUrlQuery } from 'querystring'
import dateTimeProvider from './dateTimeProvider'

export function getCommonServerSideProps(context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
  const testingDateCookie = context.req.cookies[TestingControlCookie]

  if (testingDateCookie) {
    dateTimeProvider.setDateTo(new Date(testingDateCookie))
  }

  const dates = getConferenceDates(Conference, dateTimeProvider.now())

  return {
    dates,
    conference: Conference,
  }
}
