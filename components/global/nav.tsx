import Link from "next/link";
import * as React from "react";
import { Fragment } from "react";
import * as Bootstrap from "react-bootstrap";
import { MenuItem } from "../../config/types";

interface NavArgs {
  pagePath: string;
  menu: MenuItem[];
}

class Nav extends React.Component<NavArgs> {

  constructor(props: NavArgs) {
    super(props);
  }

  render() {
    return (
      <Bootstrap.Navbar className="main">
        <Bootstrap.Navbar.Header>
          <Bootstrap.Navbar.Toggle />
        </Bootstrap.Navbar.Header>
        <Bootstrap.Navbar.Collapse>
          <Bootstrap.Nav>
            {this.props.menu.map((item) => <Fragment key={item.href}>
              <Link href={item.href} passHref>
                <Bootstrap.NavItem active={item.href === this.props.pagePath}>{item.name}</Bootstrap.NavItem>
              </Link>
            </Fragment>)}
          </Bootstrap.Nav>
        </Bootstrap.Navbar.Collapse>
      </Bootstrap.Navbar>
    );
  }
}

export default Nav;
