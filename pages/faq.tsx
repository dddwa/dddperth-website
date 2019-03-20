import React from 'react'
import FaqList from '../components/faqList'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import getFaqs from '../config/faqs'
import Page from '../layouts/withSidebar'

const FaqPage: React.StatelessComponent<WithPageMetadataProps> = props => (
  <Page
    pageMetadata={props.pageMetadata}
    title="FAQs"
    description={'Frequently asked questions for the ' + props.pageMetadata.conference.Name + ' conference.'}
  >
    <h1>FAQs</h1>
    <FaqList faqs={getFaqs(props.pageMetadata.dates)} />
  </Page>
)

export default withPageMetadata(FaqPage)
