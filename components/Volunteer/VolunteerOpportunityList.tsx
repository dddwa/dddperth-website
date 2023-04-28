import React from 'react'
import { VolunteerOpportunity } from 'config/types'
import { VolunteerOpportunityDetail } from './VolunteerOpportunityDetail'

interface VolunteerOpportunityListProps {
  opportunities: VolunteerOpportunity[]
}

export const VolunteerOpportunityList = ({ opportunities }: VolunteerOpportunityListProps) => (
  <div>
    {opportunities.map((opportunity, i) => {
      return <VolunteerOpportunityDetail key={i} opportunity={opportunity} />
    })}
  </div>
)
