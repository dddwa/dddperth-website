import { withCurrentDate, WithCurrentDateProps } from 'components/withCurrentDate'
import getConferenceDates from 'config/dates'
import * as React from 'react'
import FaqList from '../components/faqList'
import { withPageMetadata } from '../components/global/withPageMetadata'
import Conference from '../config/conference'
import getFaqs from '../config/faqs'
import Page from '../layouts/withSidebar'

const FaqPage: React.StatelessComponent<WithCurrentDateProps> = props => (
  <Page title="FAQs" description={'Frequently asked questions for the ' + Conference.Name + ' conference.'}>
    <h1>FAQs</h1>
    <FaqList faqs={getFaqs(getConferenceDates(Conference, props.currentDate))} />
  </Page>
)

export default withPageMetadata(withCurrentDate(FaqPage))
