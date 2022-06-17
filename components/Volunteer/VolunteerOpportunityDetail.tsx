import React from 'react'
import { VolunteerOpportunity } from 'config/types'
import {
  StyledDetails,
  StyledDescriptionBody,
  StyledRoleTitle,
  StyledSignUpButtonContainer,
} from './VolunteerOpportunityDetail.styled'
import { ActionButton } from 'components/actionButton'

export interface VolunteerOpportunityProps {
  opportunity: VolunteerOpportunity
}

export const VolunteerOpportunityDetail = ({ opportunity }: VolunteerOpportunityProps) => (
  <StyledDetails>
    <StyledRoleTitle>
      <span>{opportunity.RoleTitle}</span>
    </StyledRoleTitle>
    <StyledDescriptionBody>
      {opportunity.Description}
      <StyledSignUpButtonContainer>
        <ActionButton action={{ Title: 'Sign Up', Url: '#volunteer_form', Category: null }} />
      </StyledSignUpButtonContainer>
    </StyledDescriptionBody>
  </StyledDetails>
)
