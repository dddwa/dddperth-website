import Link from 'next/link'
import * as React from 'react'
import { Fragment, StatelessComponent } from 'react'
import { Sponsor, SponsorType } from '../config/types'

interface SponsorsProps {
  sponsors: Sponsor[]
  show: boolean
  hideUpsell?: boolean
}

const Sponsors: StatelessComponent<SponsorsProps> = ({ sponsors, show, hideUpsell }) =>
  show && sponsors.length ? (
    <Fragment>
      <section className="sponsors">
        {sponsors.find(s => s.type === SponsorType.Platinum) ? (
          <Fragment>
            <h2>Platinum Partner</h2>
            {sponsors.filter(s => s.type === SponsorType.Platinum).map(s => (
              <a href={s.url} target="_blank" key={s.name} title={s.name}>
                <img src={s.imageUrl} alt={s.name} className="platinum" />
              </a>
            ))}
          </Fragment>
        ) : null}

        {sponsors.find(s => s.type === SponsorType.Gold) ? (
          <Fragment>
            <h2>Gold Sponsors</h2>
            {sponsors.filter(s => s.type === SponsorType.Gold).map(s => (
              <a href={s.url} target="_blank" key={s.name} title={s.name}>
                <img src={s.imageUrl} alt={s.name} />
              </a>
            ))}
          </Fragment>
        ) : null}

        {sponsors.find(s => s.type === SponsorType.Silver) ? (
          <Fragment>
            <h2>Silver Sponsors</h2>
            {sponsors.filter(s => s.type === SponsorType.Silver).map(s => (
              <a href={s.url} target="_blank" key={s.name} title={s.name}>
                <img src={s.imageUrl} alt={s.name} />
              </a>
            ))}
          </Fragment>
        ) : null}

        {sponsors.find(s => s.type === SponsorType.Service) ? (
          <Fragment>
            <br />
            <br />
            <br />
            <br />
            {sponsors.filter(s => s.type === SponsorType.Service).map(s => (
              <a href={s.url} target="_blank" key={s.name} title={s.name}>
                <small>{s.serviceProvided} by:</small>
                <img src={s.imageUrl} alt={s.name} />
              </a>
            ))}
          </Fragment>
        ) : null}

        {sponsors.find(s => s.type === SponsorType.Community) ? (
          <Fragment>
            <h2>Community Partners</h2>
            {sponsors.filter(s => s.type === SponsorType.Community).map(s => (
              <a href={s.url} target="_blank" key={s.name} title={s.name}>
                <img src={s.imageUrl} alt={s.name} />
              </a>
            ))}
          </Fragment>
        ) : null}

        {!hideUpsell && (
          <p>
            If you'd like to explore sponsorship opportunities, please check out our{' '}
            <Link href="/sponsorship">
              <a>sponsorship page</a>
            </Link>{' '}
            for more information.
          </p>
        )}
      </section>

      {sponsors.find(s => s.type === SponsorType.Standard) ? (
        <section className="sponsors standard">
          <h2>Standard Sponsors</h2>
          {sponsors.filter(s => s.type === SponsorType.Standard).map(s => (
            <a href={s.url} target="_blank" key={s.name} title={s.name}>
              <img src={s.imageUrl} alt={s.name} />
            </a>
          ))}
        </section>
      ) : null}
    </Fragment>
  ) : (
    <Fragment>
      <section className="sponsors">
        <h2>Sponsors</h2>
        <p>
          We are currently looking for sponsors! If you'd like to explore sponsorship opportunities, please check out
          our{' '}
          <Link href="/sponsorship">
            <a>sponsorship page</a>
          </Link>{' '}
          for more information.
        </p>
      </section>
    </Fragment>
  )

export default Sponsors
