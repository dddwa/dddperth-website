import * as React from 'react';
import Conference from '../../config/conference';
import Dates from '../../config/dates';
import { StatelessComponent, Fragment } from 'react';

interface HeaderArgs {
  isHome? : boolean;
}

const Header : StatelessComponent<HeaderArgs> = ({isHome}) =>
  <Fragment>
    <header>
      <div className="logo">
          <a href="/">{ Conference.Name }</a>
      </div>
    </header>

    {isHome && <Fragment>
      <section className="fader">
      </section>

      <section className="intro">
          <div className="container">
          <h1>{Conference.TagLine}{!Conference.HideDate && !Dates.IsComplete && ' & will be held on ' + Dates.Display}.</h1>
          </div>
      </section>
    </Fragment>}

    {!isHome && <section className="banner">
    </section>}
  </Fragment>;

export default Header;