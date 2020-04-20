import React from 'react'
import { StyledHero, StyledCredit } from './Hero.styled'
import { SafeLink } from '../global/safeLink'

export const Hero: React.FC = () => (
  <StyledHero>
    <StyledCredit>
      Photo by{' '}
      <SafeLink href="https://unsplash.com/@drone_nr" target="_blank">
        Josh Spires
      </SafeLink>{' '}
      - dronenr on Unsplash
    </StyledCredit>
  </StyledHero>
)
