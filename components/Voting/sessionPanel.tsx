import React from 'react'

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
    <li class="panel" key={s}>
      <a href="#">
        {isVotedFor && <span className="fa fa-check status" aria-label="Voted" role="status" title="Voted" />}
        {isInShortlist && (
          <span className="fa fa-list-ol status" aria-label="Shortlisted" role="status" title="Shortlisted" />
        )}
        <h4>{s.Title}</h4>
        <ul>
          {(s.Tags || []).map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
        <div className="controls">
          {!submitted && (
            <div className="buttons">
              <button
                onClick={e => {
                  toggleShortlist(s)
                  e.stopPropagation()
                  e.preventDefault()
                }}
                className="btn btn-secondary btn-sm"
              >
                {!isInShortlist ? 'Shortlist' : 'Un-shortlist'}
              </button>{' '}
              <button
                onClick={e => {
                  toggleVote(s)
                  e.stopPropagation()
                  e.preventDefault()
                }}
                className="btn btn-primary btn-sm"
                disabled={votes.length >= maxVotes && !isVotedFor}
              >
                {!isVotedFor ? 'Vote' : 'Un-vote'}
              </button>
            </div>
          )}
        </div>
      </a>
      <details open={expandAll}>
        <summary>Tap for session details</summary>
        <SessionDetails
          session={s}
          showPresenter={!anonymousVoting}
          hideTags={true}
          showBio={false}
          hideLevelAndFormat={false}
        />
      </details>
    </li>
  )
}
