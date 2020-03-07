import React from 'react'
import { PageMetadata } from '../withPageMetadata'
import { StyledHeader, StyledAnchor } from './Header.styled'
import Link from 'next/link'
import { DDDLogo } from '../Icons/DDDLogo'
import { HeaderSocials } from './components/HeaderSocials'
import { NavToggle } from '../Nav/components/NavToggle'

interface HeaderProps {
  metadata: PageMetadata
}

export const Header: React.FC<HeaderProps> = ({ metadata }) => (
  <StyledHeader>
    <NavToggle />
    <Link passHref={true} href="/">
      <StyledAnchor>
        <DDDLogo />
      </StyledAnchor>
    </Link>
    <HeaderSocials socials={metadata.conference.Socials} />
  </StyledHeader>
)
