import Link from 'next/link'
import React from 'react'
import uuid from 'uuid'
import { MenuItem } from '../../../config/types'
import { StyledNav, StyledNavCollapse, StyledNavLink, StyledNavList, StyledToggle } from './Nav.styled'

interface NavProps {
  pagePath: string
  menu: MenuItem[]
}

const isFirstBranchMatched = (pagePath: string, href: string) => {
  const last = pagePath.lastIndexOf('/')
  const sub = last > 0 ? pagePath.substring(0, last) : pagePath
  return href === sub
}

export const Nav: React.FC<NavProps> = ({ pagePath, menu }) => {
  const [expanded, setExpanded] = React.useState(false)
  const componentId = React.useRef(`nav-${uuid()}`)
  const navRef = React.useRef<HTMLUListElement | undefined>(undefined)

  return (
    <StyledNav>
      <StyledToggle
        active={expanded}
        type="button"
        onClick={() => setExpanded(value => !value)}
        aria-controls={componentId.current}
      >
        <div aria-hidden />
        <span>Menu</span>
      </StyledToggle>
      <StyledNavCollapse height={expanded && navRef.current ? navRef.current.offsetHeight : 0}>
        <StyledNavList id={componentId.current} aria-expanded={expanded} ref={navRef}>
          {menu.map(item => (
            <li key={item.href}>
              <Link href={item.href} passHref>
                <StyledNavLink active={isFirstBranchMatched(pagePath, item.href)}>
                  {item.name}{' '}
                  {item.external && <i className="fa fa-external-link" aria-label="will open in a new window" />}
                </StyledNavLink>
              </Link>
            </li>
          ))}
        </StyledNavList>
      </StyledNavCollapse>
    </StyledNav>
  )
}
