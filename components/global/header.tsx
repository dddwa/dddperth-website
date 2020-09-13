import Link from 'next/link'
import React, { Fragment, StatelessComponent } from 'react'
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
              <a href="https://www.andrew-best.com/posts/ddd-adelaide-2020/" target="_blank">
                There will not be a DDD Adelaide 2020.
              </a>{' '}
              We very much hope to host the next event in late 2021!
              <br />
              <br />
              {conference.Goal} See our{' '}
              <Link href="/code-of-conduct">
                <a>Code of Conduct</a>
              </Link>
              .
            </p>
          </div>
        </section>
      </Fragment>
    )}

    {!isHome && !hideBanner && <section className="banner" />}
  </Fragment>
)

export default Header
