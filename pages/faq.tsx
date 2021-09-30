import React from 'react'
import { FaqList } from 'components/FAQList/FaqList'
import getFaqs from 'config/faqs'
import { PageWithSidebar } from 'layouts/withSidebar'
import { useConfig } from 'Context/Config'

const FaqPage = (): JSX.Element => {
  const { conference, dates } = useConfig()

  return (
    <PageWithSidebar title="FAQs" description={`Frequently asked questions for the ${conference.Name} conference.`}>
      <h1>FAQs</h1>
      <FaqList faqs={getFaqs(dates)} />
    </PageWithSidebar>
  )
}

export default FaqPage
