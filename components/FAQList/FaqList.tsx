import React from 'react'
import { FAQ } from '../../config/types'
import { FaqDetail } from './FaqDetail'

interface FaqListProps {
  faqs: FAQ[]
}

export const FaqList: React.FC<FaqListProps> = ({ faqs }) => (
  <div>
    {faqs.map((faq, i) => (
      <FaqDetail key={i} faq={faq} />
    ))}
  </div>
)
