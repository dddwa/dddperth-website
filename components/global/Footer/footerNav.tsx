import Link from 'next/link'
import React, { StatelessComponent } from 'react'
import { MenuItem } from '../../../config/types'
import { SafeLink } from '../safeLink'
import { StyledFooterNav } from './Footer.styled'

interface FooterNavArgs {
  menu: MenuItem[]
}

export const FooterNav: StatelessComponent<FooterNavArgs> = ({ menu }) => (
  <StyledFooterNav>
    <ul>
      {menu.map((item) => (
        <li key={item.href}>
          {!item.external && (
            <Link href={item.href}>
              <a>{item.name}</a>
            </Link>
          )}
          {item.external && (
            <SafeLink href={item.href} target="_blank" aria-label={`${item.name}, will open in a new window`}>
              {item.name}
            </SafeLink>
          )}
        </li>
      ))}
    </ul>
  </StyledFooterNav>
)
