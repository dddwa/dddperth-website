import React from 'react'
import { VolunteerOpportunity } from 'config/types'
import { VolunteerOpportunityDetail } from './VolunteerOpportunityDetail'
import { StyledList } from './VolunteerOpportunityDetail.styled'

interface VolunteerOpportunityListProps {
  opportunities: VolunteerOpportunity[]
}

export const VolunteerOpportunityList = ({ opportunities }: VolunteerOpportunityListProps) => (
  <StyledList>
    {opportunities.map((opportunity, i) => {
      return <li key={i}><VolunteerOpportunityDetail opportunity={opportunity} /></li>
    })}
  </StyledList>
)