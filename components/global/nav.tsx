import Link from 'next/link'
import React, { Fragment } from 'react'
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

class Nav extends React.Component<NavArgs> {
  constructor(props: NavArgs) {
    super(props)
  }

  render() {
    return (
      <Navbar className="main">
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <BSNav>
            {this.props.menu.map(item => (
              <Fragment key={item.href}>
                <Link href={item.href} passHref>
                  <NavItem active={isFirstBranchMatched(this.props.pagePath, item.href)}>
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
              </Fragment>
            ))}
          </BSNav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Nav
