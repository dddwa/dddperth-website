import Link from 'next/link'
import React, { Fragment, StatelessComponent } from 'react'
import { Sponsor, SponsorType } from '../config/types'
import { SafeLink } from './global/safeLink'

interface SponsorsProps {
  sponsors: Sponsor[]
  show: boolean
  hideUpsell?: boolean
}

const serviceProviderStyle = {
  display: 'block',
  marginBottom: 20,
}

const Sponsors: StatelessComponent<SponsorsProps> = ({ sponsors, show, hideUpsell }) =>
  show && sponsors.length ? (
    <Fragment>
      <section className="sponsors">
        {sponsors.find(s => s.type === SponsorType.Platinum) && (
          <Fragment>
            <h2>Platinum Partner</h2>
            {sponsors
              .filter(s => s.type === SponsorType.Platinum)
              .map(s => (
                <SafeLink href={s.url} target="_blank" key={s.name} title={s.name}>
                  <img src={s.imageUrl} alt={s.name} className="platinum" />
                </SafeLink>
              ))}
          </Fragment>
        )}

        {sponsors.find(s => s.type === SponsorType.Gold) && (
          <Fragment>
            <h2>Gold Sponsors</h2>
            {sponsors
              .filter(s => s.type === SponsorType.Gold)
              .map(s => (
                <SafeLink href={s.url} target="_blank" key={s.name} title={s.name}>
                  <img src={s.imageUrl} alt={s.name} />
                </SafeLink>
              ))}
          </Fragment>
        )}

        {sponsors.find(s => s.type === SponsorType.Silver) && (
          <Fragment>
            <h2>Silver Sponsors</h2>
            {sponsors
              .filter(s => s.type === SponsorType.Silver)
              .map(s => (
                <SafeLink href={s.url} target="_blank" key={s.name} title={s.name}>
                  <img src={s.imageUrl} alt={s.name} />
                </SafeLink>
              ))}
          </Fragment>
        )}

        <br />

        {sponsors.find(s => s.type === SponsorType.Service) && (
          <Fragment>
            {sponsors
              .filter(s => s.type === SponsorType.Service)
              .map(s => (
                <SafeLink href={s.url} target="_blank" key={s.name} title={s.name} style={serviceProviderStyle}>
                  <small>{s.serviceProvided} by:</small>
                  <img src={s.imageUrl} alt={s.name} />
                </SafeLink>
              ))}
          </Fragment>
        )}

        {sponsors.find(s => s.type === SponsorType.Community) && (
          <Fragment>
            <h2>Community Partners</h2>
            {sponsors
              .filter(s => s.type === SponsorType.Community)
              .map(s => (
                <SafeLink href={s.url} target="_blank" key={s.name} title={s.name}>
                  <img src={s.imageUrl} alt={s.name} />
                </SafeLink>
              ))}
          </Fragment>
        )}

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

      {sponsors.find(s => s.type === SponsorType.Standard) && (
        <section className="sponsors standard">
          <h2>Prize Sponsors</h2>
          {sponsors
            .filter(s => s.type === SponsorType.Standard)
            .map(s => (
              <SafeLink href={s.url} target="_blank" key={s.name} title={s.name}>
                <img src={s.imageUrl} alt={s.name} />
              </SafeLink>
            ))}
        </section>
      )}
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
