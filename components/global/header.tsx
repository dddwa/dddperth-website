import Link from 'next/link'
import * as React from 'react'
import { Fragment, StatelessComponent } from 'react'
import { Conference, Dates } from '../../config/types'

interface HeaderArgs {
  isHome?: boolean
  hideBanner?: boolean
  conference: Conference
  dates: Dates
}

const Header: StatelessComponent<HeaderArgs> = ({ isHome, hideBanner, conference, dates }) => (
  <Fragment>
    <header>
      {isHome ? (
        <h1 className="logo">
          <a href="/">{conference.Name}</a>
        </h1>
      ) : (
        <div className="logo">
          <a href="/">{conference.Name}</a>
        </div>
      )}
    </header>

    {isHome && (
      <Fragment>
        <section className="fader" />
        <section className="intro">
          <div className="container">
            <p>
              {conference.TagLine}
              {!conference.HideDate && !dates.IsComplete && ' & will be held on ' + dates.Display}.<br />
              <br />
              {conference.Goal} See our{' '}
              <Link href="/code-of-conduct">
                <a>Code of Conduct</a>
              </Link>.
            </p>
          </div>
        </section>
      </Fragment>
    )}

    {!isHome && !hideBanner && <section className="banner" />}
  </Fragment>
)

export default Header
