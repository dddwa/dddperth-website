import React from 'react'
import { VolunteerOpportunity } from 'config/types'
import { StyledDetails, StyledDescriptionBody, StyledRoleTitle } from './VolunteerOpportunityDetail.styled'
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
      <div className='btn'>
        <ActionButton action={{ Title: "Sign Up", Url: "#volunteer_form", Category: null }} />
      </div>
    </StyledDescriptionBody>
  </StyledDetails>
)
