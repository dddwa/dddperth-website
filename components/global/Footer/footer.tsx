import React, { FC } from 'react'
import { Conference, MenuItem, Socials } from '../../../config/types'
import SocialLinks from '../socialLinks'
import { StyledFooterCopyright } from './Footer.styled'
import FooterNav from './footerNav'

interface FooterArgs {
  menu: MenuItem[]
  socials: Socials
  conference: Conference
}

export const Footer: FC<FooterArgs> = ({ menu, socials, conference }) => (
  <footer>
    <FooterNav menu={menu} />
    <SocialLinks socials={socials} />
    <StyledFooterCopyright>
      Copyright &copy; {new Date().getFullYear()} {conference.Organiser.Name}
    </StyledFooterCopyright>
  </footer>
)
