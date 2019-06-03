import React from 'react'
import { Session } from '../../config/types'
import { Button } from '../global/Button/Button'
import SessionDetails from '../sessionDetails'
import {
  StyledBadge,
  StyledButtons,
  StyledDetails,
  StyledHeader,
  StyledIcon,
  StyledPanel,
  StyledSummary,
  StyledTitle,
} from './sessionPanel.styled'

interface SessionPanelProps {
  session: Session
  anonymousVoting: boolean
  isVoting: boolean
  isVotedFor: boolean
  isVotingDisabled: boolean
  hideVotingButtons: boolean
  isInShortlist: boolean
  expandAll: boolean
  index: number
  preferentialVoting: boolean
  toggleVote: () => void
  toggleShortlist: () => void
}

export const SessionPanel: React.FC<SessionPanelProps> = ({
  session: s,
  anonymousVoting,
  isVoting,
  isVotedFor,
  isVotingDisabled,
  hideVotingButtons,
  isInShortlist,
  expandAll,
  index,
  preferentialVoting,
  toggleVote,
  toggleShortlist,
}) => {
  return (
    <StyledPanel key={s.Id}>
      {isVotedFor && !isVoting && <StyledIcon className="fa fa-check" aria-label="Voted" role="status" title="Voted" />}
      {isInShortlist && !isVoting && (
        <StyledIcon className="fa fa-list-ol" aria-label="Shortlisted" role="status" title="Shortlisted" />
      )}
      <StyledHeader>
        <StyledTitle>{s.Title}</StyledTitle>
        {preferentialVoting && isVoting && (
          <span className="status" title="Voting position">
            #{index + 1}
          </span>
        )}
      </StyledHeader>
      <ul>
        {(s.Tags || []).map((tag, n) => (
          <StyledBadge key={n + tag}>{tag}</StyledBadge>
        ))}
      </ul>
      {!hideVotingButtons && (
        <StyledButtons>
          {!isVoting && (
            <Button
              kind="secondary"
              size="small"
              onClick={_ => {
                toggleShortlist()
              }}
            >
              {!isInShortlist ? 'Shortlist' : 'Un-shortlist'}
            </Button>
          )}
          <Button
            kind="primary"
            size="small"
            onClick={_ => {
              toggleVote()
            }}
            disabled={isVotingDisabled && !isVotedFor}
          >
            {!isVotedFor ? 'Vote' : 'Un-vote'}
          </Button>
        </StyledButtons>
      )}
      <StyledDetails open={expandAll}>
        <StyledSummary>
          <span className="fa fa-plus" title="More details" /> Tap for session details
        </StyledSummary>
        <SessionDetails
          session={s}
          showPresenter={!anonymousVoting}
          hideTags={true}
          showBio={false}
          hideLevelAndFormat={false}
        />
      </StyledDetails>
    </StyledPanel>
  )
}
