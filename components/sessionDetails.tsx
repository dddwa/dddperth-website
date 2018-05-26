import * as React from 'react'
import { Fragment } from 'react'
import { Session } from '../config/types'

interface SessionProps {
  session: Session
  showPresenter: boolean
}

const SessionDetails: React.StatelessComponent<SessionProps> = ({ session, showPresenter }) => (
  <Fragment>
    {showPresenter &&
      session.Presenters.map(p => (
        <p>
          <em>{p.Name}</em>{' '}
          {p.TwitterHandle || p.WebsiteUrl ? (
            <small>
              ({p.TwitterHandle ? (
                <React.Fragment>
                  <a href={'https://twitter.com/' + p.TwitterHandle} target="_blank">
                    {p.TwitterHandle}
                  </a>
                  {p.WebsiteUrl ? ' | ' : null}
                </React.Fragment>
              ) : null}
              {p.WebsiteUrl ? (
                <React.Fragment>
                  <a href={p.WebsiteUrl} target="_blank">
                    {p.WebsiteUrl}
                  </a>
                </React.Fragment>
              ) : null}
              )
            </small>
          ) : null}
        </p>
      ))}
    <p className="preserve-whitespace">{session.Abstract}</p>
    <p>
      <span className="badge badge-primary">{session.Level}</span>{' '}
      <span className="badge badge-secondary">{session.Format}</span>{' '}
      {(session.Tags || []).map(tag => (
        <React.Fragment>
          <span className="badge badge-info" key={tag}>
            {tag}
          </span>{' '}
        </React.Fragment>
      ))}
    </p>
  </Fragment>
)

export default SessionDetails
