import React from 'react'
import { VolunteerOpportunity } from 'config/types'
import { StyledDetails, StyledDescriptionBody, StyledRoleTitle } from './VolunteerOpportunityDetail.styled'

export interface VolunteerOpportunityProps {
  opportunity: VolunteerOpportunity
}

export const VolunteerOpportunityDetail = ({ opportunity }: VolunteerOpportunityProps) => (
  <StyledDetails>
    <StyledRoleTitle>
      {opportunity.RoleTitle}
    </StyledRoleTitle>
    <StyledDescriptionBody>
      {opportunity.Description}
    </StyledDescriptionBody>
  </StyledDetails>
)
