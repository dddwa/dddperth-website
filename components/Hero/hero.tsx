import React from 'react'
import { StyledHero, StyledCredit, StyledConferenceDetails } from './Hero.styled'
import { SafeLink } from 'components/global/safeLink'
import { formatISO } from 'date-fns'
import { useConfig } from 'Context/Config'

export const Hero = (): JSX.Element => {
  const { conference, dates } = useConfig()
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
      {/*<StyledCredit>*/}
      {/*  Photo by{' '}*/}
      {/*  <SafeLink href="https://unsplash.com/@drone_nr" target="_blank">*/}
      {/*    Josh Spires*/}
      {/*  </SafeLink>{' '}*/}
      {/*  - dronenr on Unsplash*/}
      {/*</StyledCredit>*/}
    </StyledHero>
  )
}
