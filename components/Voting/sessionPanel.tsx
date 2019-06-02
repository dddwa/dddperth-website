import React from 'react'
import { Badge, Buttons, Details, Icon, Panel, Title } from './sessionPanel.styled'

import { Session } from '../../config/types'
import SessionDetails from '../sessionDetails'

interface SessionPanelProps {
  session: Session
  anonymousVoting: boolean
  isVotedFor: boolean
  isVotingDisabled: boolean
  hideVotingButtons: boolean
  isInShortlist: boolean
  expandAll: boolean
  toggleVote: (Session) => void
  toggleShortlist: (Session) => void
}

export const SessionPanel: React.FC<SessionPanelProps> = ({
  session: s,
  anonymousVoting,
  isVotedFor,
  isVotingDisabled,
  hideVotingButtons,
  isInShortlist,
  expandAll,
  toggleVote,
  toggleShortlist,
}) => {
  return (
    <Panel class="panel" key={s.Id}>
      {isVotedFor && <Icon className="fa fa-check status" aria-label="Voted" role="status" title="Voted" />}
      {isInShortlist && (
        <Icon className="fa fa-list-ol status" aria-label="Shortlisted" role="status" title="Shortlisted" />
      )}
      <Title>{s.Title}</Title>
      <ul>
        {(s.Tags || []).map(tag => (
          <Badge>{tag}</Badge>
        ))}
      </ul>
      <div className="controls">
        {!hideVotingButtons && (
          <Buttons>
            <button
              onClick={_ => {
                toggleShortlist(s)
              }}
              type="button"
              className="btn btn-secondary btn-sm"
            >
              {!isInShortlist ? 'Shortlist' : 'Un-shortlist'}
            </button>{' '}
            <button
              onClick={_ => {
                toggleVote(s)
              }}
              type="button"
              className="btn btn-primary btn-sm"
              disabled={isVotingDisabled && !isVotedFor}
            >
              {!isVotedFor ? 'Vote' : 'Un-vote'}
            </button>
          </Buttons>
        )}
      </div>
      <Details open={expandAll}>
        <summary>
          <span class="fa fa-plus" title="More details" /> Tap for session details
        </summary>
        <SessionDetails
          session={s}
          showPresenter={!anonymousVoting}
          hideTags={true}
          showBio={false}
          hideLevelAndFormat={false}
        />
      </Details>
    </Panel>
  )
}
