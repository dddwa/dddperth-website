import React, { Fragment } from 'react'
import { FAQ } from 'config/types'
import { StyledDetails, StyledDetailsBody, StyledSummary } from './FaqDetail.styled'
import { StyledPara } from 'components/global/text'

export interface FaqDetailProps {
  faq: FAQ
}

export const FaqDetail: React.FC<FaqDetailProps> = ({ faq }) => (
  <StyledDetails>
    <StyledSummary>
      <span>{faq.Question}</span>
    </StyledSummary>
    <StyledDetailsBody>
      {faq.Answer ? <StyledPara>{faq.Answer}</StyledPara> : <Fragment>{faq.AnswerWithoutParagraph}</Fragment>}
    </StyledDetailsBody>
  </StyledDetails>
)
