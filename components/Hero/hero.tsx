import React from 'react'
import { StyledHero, StyledCredit, StyledConferenceDetails } from './Hero.styled'
import { SafeLink } from 'components/global/safeLink'
import { Conference, Dates } from 'config/types'
import { formatISO } from 'date-fns'

interface HeroProps {
  conference: Conference
  dates: Dates
}

export const Hero: React.FC<HeroProps> = ({ conference, dates }) => {
  const venue = !conference.HideVenue ? conference.Venue.Name : false
  const date = !conference.HideDate && !dates.IsComplete ? dates.DisplayFormatted('do MMMM yyyy') : false

  return (
    <StyledHero>
      {(venue || date) && (
        <StyledConferenceDetails>
          {date && <time dateTime={formatISO(conference.Date)}>{date}</time>}
          {venue && <span>{venue}</span>}
        </StyledConferenceDetails>
      )}
      <StyledCredit>
        Photo by{' '}
        <SafeLink href="https://unsplash.com/@drone_nr" target="_blank">
          Josh Spires
        </SafeLink>{' '}
        - dronenr on Unsplash
      </StyledCredit>
    </StyledHero>
  )
}
