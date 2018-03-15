import * as React from 'react'
import FaqList from '../components/faqList'
import { withPageMetadata } from '../components/global/withPageMetadata'
import Conference from '../config/conference'
import Faqs from '../config/faqs'
import Page from '../layouts/withSidebar'

export default withPageMetadata(() => (
    <Page title="FAQs" description={'Frequently asked questions for the ' + Conference.Name + ' conference.'}>
        <h1>FAQs</h1>
        <FaqList faqs={Faqs} />
    </Page>
))
