import React, { FC } from 'react'
import { Conference, Socials } from 'config/types'
import { SocialLinks } from './socialLinks'
import { StyledFooter, StyledFooterContainer, StyledArrowIcon, StyledTopAnchor } from './Footer.styled'

interface FooterArgs {
  socials: Socials
  conference: Conference
}

export const Footer: FC<FooterArgs> = ({ socials, conference }) => (
  <StyledFooter>
    <SocialLinks socials={socials} />
    <StyledFooterContainer>
      <StyledTopAnchor href="#">
        <span>Pop to the top</span> <StyledArrowIcon />
      </StyledTopAnchor>
      <p>
        Copyright &copy; {new Date().getFullYear()} {conference.Organiser.Name}
      </p>
    </StyledFooterContainer>
  </StyledFooter>
)
