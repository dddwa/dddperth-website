import Link from 'next/link'
import React from 'react'
import { MenuItem } from '../../../config/types'
import { SafeLink } from '../safeLink'
import { StyledFooterNav } from './Footer.styled'

interface FooterNavArgs {
  menu: MenuItem[]
}

export const FooterNav: React.FC<FooterNavArgs> = ({ menu }) => (
  <StyledFooterNav>
    <ul>
      {menu.map(item => (
        <li key={item.href}>
          {!item.external && (
            <Link href={item.href} replace={!item.external}>
              <a>{item.name}</a>
            </Link>
          )}
          {item.external && (
            <SafeLink href={item.href} target="_blank">
              <span aria-hidden="true">
                {item.name}
                &nbsp;
                <i className="fa fa-external-link" />
              </span>
              <span className="sr-only">{item.name}, will open in a new window</span>
            </SafeLink>
          )}
        </li>
      ))}
    </ul>
  </StyledFooterNav>
)
FooterNav.displayName = 'FooterNav'
