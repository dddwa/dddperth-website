import React from 'react'
import { PageMetadata } from 'components/global/withPageMetadata'
import { StyledHeader, StyledAnchor } from './Header.styled'
import Link from 'next/link'
import { DDDLogo } from 'components/global/Icons/DDDLogo'
import { HeaderSocials } from './components/HeaderSocials'
import { NavToggle } from 'components/global/Nav/components/NavToggle'

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
