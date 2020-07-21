import React from 'react'
import { FaqList } from 'components/FAQList/FaqList'
import withPageMetadata, { WithPageMetadataProps } from 'components/global/withPageMetadata'
import getFaqs from 'config/faqs'
import { PageWithSidebar } from 'layouts/withSidebar'

const FaqPage: React.StatelessComponent<WithPageMetadataProps> = (props) => (
  <PageWithSidebar
    metadata={props.pageMetadata}
    title="FAQs"
    description={`Frequently asked questions for the ${props.pageMetadata.conference.Name} conference.`}
  >
    <h1>FAQs</h1>
    <FaqList faqs={getFaqs(props.pageMetadata.dates)} />
  </PageWithSidebar>
)

export default withPageMetadata(FaqPage)
