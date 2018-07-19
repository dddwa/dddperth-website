import * as React from 'react'
import { Conference } from '../config/types'
import SessionDetails from './sessionDetails'

export interface KeynotesProps {
  conference: Conference
}

export default ({ conference }: KeynotesProps) => (
  <React.Fragment>
    {conference.Keynotes.length > 0 && (
      <section className="grey">
        <div className="container">
          <h2>Keynote speakers</h2>
          {conference.Keynotes.map(keynote => (
            <article id={keynote.Id} className="keynote" key={keynote.Title.replace(/ /g, '-')}>
              <h3>{keynote.Title}</h3>
              <img src={keynote.Presenters[0].ProfilePhotoUrl} alt={keynote.Presenters[0].Name} />
              <h4>
                {keynote.Presenters[0].Name}
                <br />
                <small>{keynote.Presenters[0].Tagline}</small>
                {keynote.Presenters[0].TwitterHandle || keynote.Presenters[0].WebsiteUrl ? (
                  <small>
                    <br />
                    ({keynote.Presenters[0].TwitterHandle ? (
                      <React.Fragment>
                        <a href={'https://twitter.com/' + keynote.Presenters[0].TwitterHandle} target="_blank">
                          @{keynote.Presenters[0].TwitterHandle}
                        </a>
                        {keynote.Presenters[0].WebsiteUrl ? ' | ' : null}
                      </React.Fragment>
                    ) : null}
                    {keynote.Presenters[0].WebsiteUrl ? (
                      <React.Fragment>
                        <a href={keynote.Presenters[0].WebsiteUrl} target="_blank">
                          {keynote.Presenters[0].WebsiteUrl}
                        </a>
                      </React.Fragment>
                    ) : null}
                    )
                  </small>
                ) : null}
              </h4>
              <SessionDetails
                session={keynote}
                hideTags={false}
                showPresenter={false}
                hideLevelAndFormat={true}
                showBio={true}
              />
            </article>
          ))}
        </div>
      </section>
    )}
  </React.Fragment>
)
