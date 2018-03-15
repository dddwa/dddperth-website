import Link from 'next/link'
import * as React from 'react'
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
          <Link href={item.href}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default FooterNav
