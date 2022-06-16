import React from 'react'
import { VolunteerOpportunity } from 'config/types'
import { StyledDetails, StyledDescriptionBody, StyledRoleTitle } from './VolunteerOpportunityDetail.styled'
import { Action } from 'config/types'
import { ActionButton } from 'components/actionButton'

export interface VolunteerOpportunityProps {
  opportunity: VolunteerOpportunity
}

{
  var volunteer_form: Action = {
    Title: "Sign Up",
    Url: "#volunteer_form",
    Category: null
  }
}

export const VolunteerOpportunityDetail = ({ opportunity }: VolunteerOpportunityProps) => (
  <StyledDetails>
    <StyledRoleTitle>
      <span>{opportunity.RoleTitle}</span>
    </StyledRoleTitle>
    <StyledDescriptionBody>
      {opportunity.Description}
      <div className='btn'>
        <ActionButton action={volunteer_form} />
      </div>
    </StyledDescriptionBody>
  </StyledDetails>
)
