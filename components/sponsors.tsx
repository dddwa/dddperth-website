import * as React from 'react';
import { StatelessComponent, Fragment } from 'react';
import Conference, { Sponsor, SponsorType } from '../config/conference';

interface SponsorsProps {
  sponsors : Sponsor[];
  show : boolean
}

const Sponsors : StatelessComponent<SponsorsProps> = ({sponsors, show}) => (show && sponsors.length ? (
  <Fragment>
    <section className="sponsors">
      {sponsors.find(s => s.type === SponsorType.Platinum) ? (
        <Fragment>
          <h2>Platinum Partner</h2>
          {sponsors.filter(s => s.type === SponsorType.Platinum).map(s =>
            <a href={s.url} target="_blank" key={s.name} title={s.name}><img src={s.imageUrl} alt={s.name} className="platinum" /></a>
          )}
        </Fragment>
      ) : null}

      {sponsors.find(s => s.type === SponsorType.Gold) ? (
        <Fragment>
          <h2>Gold Sponsors</h2>
          {sponsors.filter(s => s.type === SponsorType.Gold).map(s =>
            <a href={s.url} target="_blank" key={s.name} title={s.name}><img src={s.imageUrl} alt={s.name} /></a>
          )}
        </Fragment>
      ) : null}

      {sponsors.find(s => s.type === SponsorType.Silver) ? (
        <Fragment>
          <h2>Silver Sponsors</h2>
          {sponsors.filter(s => s.type === SponsorType.Silver).map(s =>
            <a href={s.url} target="_blank" key={s.name} title={s.name}><img src={s.imageUrl} alt={s.name} /></a>
          )}
        </Fragment>
      ) : null}

      {sponsors.find(s => s.type === SponsorType.Service) ? (
        <Fragment>
          <br /><br /><br /><br />
          {sponsors.filter(s => s.type === SponsorType.Service).map(s =>
            <a href={s.url} target="_blank" key={s.name} title={s.name}>
              <small>{s.serviceProvided} by:</small>
              <img src={s.imageUrl} alt={s.name} />
            </a>
          )}
        </Fragment>
      ) : null}

      {sponsors.find(s => s.type === SponsorType.Community) ? (
        <Fragment>
          <h2>Community Partners</h2>
          {sponsors.filter(s => s.type === SponsorType.Community).map(s =>
            <a href={s.url} target="_blank" key={s.name} title={s.name}><img src={s.imageUrl} alt={s.name} /></a>
          )}
        </Fragment>
      ) : null}
    </section>

    {sponsors.find(s => s.type === SponsorType.Standard) ? (
      <section className="sponsors standard">
        {sponsors.filter(s => s.type === SponsorType.Standard).map(s =>
          <a href={s.url} target="_blank" key={s.name} title={s.name}><img src={s.imageUrl} alt={s.name} /></a>
        )}
      </section>
    ) : null}

  </Fragment>) : null
);

export default Sponsors;
