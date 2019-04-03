import React, { Fragment } from 'react'
import { FAQ } from '../../config/types'
import { StyledDetails, StyledDetailsBody, StyledSummary } from './FaqDetail.styled'

export interface FaqDetailProps {
  faq: FAQ
}

export const FaqDetail: React.FC<FaqDetailProps> = ({ faq }) => (
  <StyledDetails>
    <StyledSummary>{faq.Question}</StyledSummary>
    <StyledDetailsBody>
      {faq.Answer ? <p>{faq.Answer}</p> : <Fragment>{faq.AnswerWithoutParagraph}</Fragment>}
    </StyledDetailsBody>
  </StyledDetails>
)
