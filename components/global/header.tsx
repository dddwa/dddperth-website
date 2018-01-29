import * as React from 'react';
import { StatelessComponent, Fragment } from 'react';
import { Conference, Dates } from '../../config/types';

interface HeaderArgs {
  isHome? : boolean;
  conference : Conference;
  dates : Dates;
}

const Header : StatelessComponent<HeaderArgs> = ({isHome, conference, dates}) =>
  <Fragment>
    <header>
      <div className="logo">
          <a href="/">{ conference.Name }</a>
      </div>
    </header>

    {isHome && <Fragment>
      <section className="fader">
      </section>

      <section className="intro">
          <div className="container">
          <h1>{conference.TagLine}{!conference.HideDate && !dates.IsComplete && ' & will be held on ' + dates.Display}.<br /><br />{conference.Goal}</h1>
          </div>
      </section>
    </Fragment>}

    {!isHome && <section className="banner">
    </section>}
  </Fragment>;

export default Header;