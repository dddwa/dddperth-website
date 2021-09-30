import React from 'react'
import { Conference } from 'config/types'
import { SafeLink } from 'components/global/safeLink'
import SessionDetails from 'components/sessionDetails'

export interface KeynotesProps {
  conference: Conference
}

const Keynotes = ({ conference }: KeynotesProps): JSX.Element => (
  <React.Fragment>
    {conference.Keynotes.length > 0 && (
      <section className="grey">
        <div className="container">
          <h2>Keynote speakers</h2>
          {conference.Keynotes.map((keynote) => (
            <article id={keynote.Id} className="keynote" key={keynote.Title.replace(/ /g, '-')}>
              <h3>{keynote.Title}</h3>
              <img src={keynote.Presenters[0].ProfilePhotoUrl} alt={keynote.Presenters[0].Name} />
              <h4>
                {keynote.Presenters[0].Name}
                <br />
                <small>{keynote.Presenters[0].Tagline}</small>
                {keynote.Presenters[0].TwitterHandle || keynote.Presenters[0].WebsiteUrl ? (
                  <small>
                    <br />(
                    {keynote.Presenters[0].TwitterHandle ? (
                      <React.Fragment>
                        <SafeLink href={'https://twitter.com/' + keynote.Presenters[0].TwitterHandle} target="_blank">
                          @{keynote.Presenters[0].TwitterHandle}
                        </SafeLink>
                        {keynote.Presenters[0].WebsiteUrl ? ' | ' : null}
                      </React.Fragment>
                    ) : null}
                    {keynote.Presenters[0].WebsiteUrl ? (
                      <SafeLink href={keynote.Presenters[0].WebsiteUrl} target="_blank">
                        {keynote.Presenters[0].WebsiteUrl}
                      </SafeLink>
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

export default Keynotes
