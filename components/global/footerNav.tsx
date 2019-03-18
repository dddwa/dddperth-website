import Link from 'next/link'
import React from 'react'
import { StatelessComponent } from 'react'
import { MenuItem } from '../../config/types'

interface FooterNavArgs {
  menu: MenuItem[]
}

const FooterNav: StatelessComponent<FooterNavArgs> = ({ menu }) => (
  <nav className="foot-nav">
    <ul>
      {menu.map(item => (
        <li key={item.href}>
          {!item.external && (
            <Link href={item.href} replace={!item.external}>
              <a>{item.name}</a>
            </Link>
          )}
          {item.external && (
            <a href={item.href} target="_blank">
              <span aria-hidden="true">
                {item.name}
                &nbsp;
                <i className="fa fa-external-link" />
              </span>
              <span className="sr-only">{item.name}, will open in a new window</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  </nav>
)

export default FooterNav
