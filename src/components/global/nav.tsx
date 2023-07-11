import Link from 'next/link'
import React, { useState } from 'react'
import { Nav as BSNav, Navbar, NavItem } from 'react-bootstrap'
import { MenuItem } from '../../config/types'

interface NavArgs {
  pagePath: string
  menu: MenuItem[]
}

const isFirstBranchMatched = (pagePath: string, href: string) => {
  const last = pagePath.lastIndexOf('/')
  const sub = last > 0 ? pagePath.substring(0, last) : pagePath
  return href === sub
}

export const Nav: React.FC<NavArgs> = props => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar className="main" onToggle={(val: boolean) => setExpanded(val)}>
      <Navbar.Header>
        <Navbar.Toggle aria-expanded={expanded} />
      </Navbar.Header>
      <Navbar.Collapse>
        <BSNav>
          {props.menu.map(item => (
            <Link key={item.href} href={item.href} passHref>
              <NavItem active={isFirstBranchMatched(props.pagePath, item.href)}>
                {!item.external && item.name}
                {item.external && (
                  <span>
                    <span aria-hidden="true">
                      {item.name}
                      &nbsp;
                      <i className="fa fa-external-link" />
                    </span>
                    <span className="sr-only">{item.name}, will open in a new window</span>
                  </span>
                )}
              </NavItem>
            </Link>
          ))}
        </BSNav>
      </Navbar.Collapse>
    </Navbar>
  )
}
