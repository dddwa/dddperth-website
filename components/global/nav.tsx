import * as React from 'react';
import { StatelessComponent } from 'react';
import Link from 'next/link';
import Menu from '../../config/menu';

interface NavArgs {
  pagePath : string;
}

const Nav : StatelessComponent<NavArgs> = ({pagePath}) =>
  <nav className="main">
    <div className="container">
      <a href="#" className="pull hidden-sm hidden-md hidden-lg"><span></span><span></span><span></span></a>
      <ul>
        {Menu.Top.map(item =>
        <li>
          <Link href={item.href}>
            <a className={item.href === pagePath ? "active" : ""}>{item.name}</a>
          </Link>
        </li>)}
      </ul>
    </div>
  </nav>;

export default Nav;