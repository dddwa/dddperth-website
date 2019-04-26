import React, { Fragment } from 'react'
import { FAQ } from '../../config/types'
import { FaqDetail } from './FaqDetail'

interface FaqListProps {
  faqs: FAQ[]
}

export const FaqList: React.FC<FaqListProps> = ({ faqs }) => (
  <Fragment>
    {faqs.map((faq, i) => (
      <FaqDetail key={i} faq={faq} />
    ))}
  </Fragment>
)
