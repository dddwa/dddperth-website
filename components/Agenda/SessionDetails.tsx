import React, { Fragment } from 'react'
import { Session } from 'config/types'
import { Badge } from 'components/Badge/Badge'
import { SafeLink } from 'components/global/safeLink'
import {
  StyledBioFigure,
  StyledBioName,
  StyledBioProfile,
  StyledLinkList,
  StyledPreWrappedParagraph,
  StyledSessionTitle,
  StyledSpeakerBioHeader,
  StyledTagList,
} from './SessionDetails.styled'

interface SessionDetailsProps {
  session: Session
  showPresenters: boolean
  hideTags: boolean
  hideLevelAndFormat: boolean
  showBio: boolean
}

export const SessionDetails: React.FC<SessionDetailsProps> = ({
  session,
  showPresenters,
  hideTags = false,
  hideLevelAndFormat = false,
  showBio,
}) => {
  return (
    <Fragment>
      <StyledSessionTitle>{session.Title}</StyledSessionTitle>
      {showPresenters &&
        session.Presenters.map((presenter) => (
          <StyledBioFigure key={presenter.Name.replace(/\s/g, '-')}>
            <StyledBioProfile
              src={presenter.ProfilePhotoUrl || '/static/images/profile-image-blank.jpg'}
              alt={`${presenter.Name} profile photo`}
              loading="lazy"
            />
            <StyledBioName>{presenter.Name}</StyledBioName>
            {(presenter.TwitterHandle || presenter.WebsiteUrl) && (
              <StyledLinkList>
                {presenter.TwitterHandle && (
                  <li>
                    <SafeLink
                      href={
                        'https://twitter.com/' +
                        presenter.TwitterHandle.replace(/https?:\/\/(www\.)?twitter.com\//i, '').replace(/\?.+$/, '')
                      }
                      target="_blank"
                    >
                      @{presenter.TwitterHandle.replace(/https?:\/\/(www\.)?twitter.com\//i, '').replace(/\?.+$/, '')}
                    </SafeLink>
                  </li>
                )}
                {presenter.WebsiteUrl && (
                  <li>
                    <SafeLink href={presenter.WebsiteUrl} target="_blank">
                      {presenter.WebsiteUrl.includes('linkedin.com')
                        ? 'LinkedIn'
                        : presenter.WebsiteUrl.replace(/https?:\/\/(www\.)?/i, '')}
                    </SafeLink>
                  </li>
                )}
              </StyledLinkList>
            )}
          </StyledBioFigure>
        ))}
      <StyledPreWrappedParagraph>{session.Abstract}</StyledPreWrappedParagraph>

      {(!hideLevelAndFormat || !hideTags) && (
        <StyledTagList>
          {!hideLevelAndFormat && (
            <Fragment>
              <li>
                <Badge type="primary">{session.Level}</Badge>
              </li>
              <li>
                <Badge type="secondary">{session.Format}</Badge>
              </li>
            </Fragment>
          )}
          {!hideTags &&
            session.Tags &&
            session.Tags.map((tag) => (
              <li key={tag}>
                <Badge type={hideLevelAndFormat ? 'secondary' : 'info'}>{tag}</Badge>
              </li>
            ))}
        </StyledTagList>
      )}

      {showBio &&
        session.Presenters.map((presenter) => (
          <div key={`bio-${presenter.Name.replace(/ /g, '-')}`}>
            {session.Presenters.length > 1 && <StyledSpeakerBioHeader>{presenter.Name}</StyledSpeakerBioHeader>}
            <StyledPreWrappedParagraph>{presenter.Bio}</StyledPreWrappedParagraph>
          </div>
        ))}
    </Fragment>
  )
}
