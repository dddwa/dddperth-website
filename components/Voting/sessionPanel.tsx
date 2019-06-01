import React from 'react'
import { Panel, Icon, Title, Badge, Details, Buttons } from './sessionPanel.styled'

import SessionDetails from '../sessionDetails'

export const SessionPanel: React.FC = ({
  s,
  i,
  anonymousVoting,
  isVotedFor,
  votes,
  maxVotes,
  submitted,
  isInShortlist,
  expandAll,
  toggleVote,
  toggleShortlist,
}) => {
  return (
    <Panel class="panel" key={s}>
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
        {!submitted && (
          <Buttons>
            <button
              onClick={e => {
                toggleShortlist(s)
              }}
              type="button"
              className="btn btn-secondary btn-sm"
            >
              {!isInShortlist ? 'Shortlist' : 'Un-shortlist'}
            </button>{' '}
            <button
              onClick={e => {
                toggleVote(s)
              }}
              type="button"
              className="btn btn-primary btn-sm"
              disabled={votes.length >= maxVotes && !isVotedFor}
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
