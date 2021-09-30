import React from 'react'
import { useConfig } from 'Context/Config'
import { SocialLinks } from './socialLinks'
import { StyledFooter, StyledFooterContainer, StyledArrowIcon, StyledTopAnchor } from './Footer.styled'

export const Footer = (): JSX.Element => {
  const { conference } = useConfig()

  return (
    <StyledFooter>
      <SocialLinks socials={conference.Socials} />
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
}
