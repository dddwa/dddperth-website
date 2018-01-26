import * as React from 'react';
import { StatelessComponent } from 'react';
import Link from 'next/link';
import Menu from '../../config/menu';

const FooterNav : StatelessComponent = () =>
  <nav className="foot-nav">
    <ul>
      {Menu.Footer.map(item =>
      <li key={item.href}>
        <Link href={item.href}>
          <a>{item.name}</a>
        </Link>
      </li>)}
    </ul>
  </nav>;

export default FooterNav;