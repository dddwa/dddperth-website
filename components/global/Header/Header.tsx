import React from 'react'
import { StyledHeader, StyledAnchor } from './Header.styled'
import Link from 'next/link'
import { DDDLogo } from 'components/global/Icons/DDDLogo'
import { HeaderSocials } from './components/HeaderSocials'
import { NavToggle } from 'components/global/Nav/components/NavToggle'
import { useConfig } from 'Context/Config'

export const Header = () => {
  const { conference } = useConfig()

  return (
    <StyledHeader>
      <NavToggle />
      <Link passHref={true} href="/">
        <StyledAnchor aria-label={conference.Name}>
          <DDDLogo />
        </StyledAnchor>
      </Link>
      <HeaderSocials />
    </StyledHeader>
  )
}
