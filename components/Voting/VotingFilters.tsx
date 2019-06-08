import React, { useRef } from 'react'
import ReactResponsiveSelect from 'react-responsive-select/dist/ReactResponsiveSelect'
import { logEvent } from '../global/analytics'
import { StyledTagCloudInput, StyledTagCloudLabel, StyledTagCloudList } from './VotingFilters.styled'

interface VotingFiltersProps {
  tags: string[]
  levels: string[]
  levelFilters: string[]
  onTagFilter: (tags: string[]) => void
  onLevelsFilter: (levels: string[]) => void
}

const OptionItem = text => (
  <div>
    <span className="fa fa-check-circle-o selected-marker" />
    <span className="fa fa-circle-o not-selected-marker" />
    <span> {text}</span>
  </div>
)

export const VotingFilters: React.FC<VotingFiltersProps> = ({
  tags,
  levels,
  levelFilters,
  onTagFilter,
  onLevelsFilter,
}) => {
  const tagCloudRef = useRef<HTMLFieldSetElement | null>(null)
  const filterCloudRef = useRef<HTMLFieldSetElement | null>(null)

  return (
    <div className="filters">
      <em>Filter by tag:</em>{' '}
      <fieldset ref={tagCloudRef} className="tag-cloud">
        <StyledTagCloudList>
          {tags.map(tag => (
            <li key={tag}>
              <StyledTagCloudInput
                type="checkbox"
                value={tag}
                id={tag}
                name={tag}
                onChange={() => {
                  const filteredTags = Array.from<HTMLInputElement>(
                    tagCloudRef.current.querySelectorAll('input:checked'),
                  ).map(input => input.value)

                  if (filteredTags.length > 0) {
                    logEvent('voting', 'tagFilter', { filter: filteredTags.join(',') })
                  }

                  onTagFilter(filteredTags)
                }}
              />
              <StyledTagCloudLabel htmlFor={tag}>{tag}</StyledTagCloudLabel>
            </li>
          ))}
        </StyledTagCloudList>
      </fieldset>
      <em>Filter by level:</em>{' '}
      <fieldset ref={filterCloudRef} className="tag-cloud">
        <StyledTagCloudList>
          {levels.map(level => (
            <li key={level}>
              <StyledTagCloudInput
                type="checkbox"
                value={level}
                id={level}
                name={level}
                onChange={() => {
                  const filteredTags = Array.from<HTMLInputElement>(
                    filterCloudRef.current.querySelectorAll('input:checked'),
                  ).map(input => input.value)

                  if (filteredTags.length > 0) {
                    logEvent('voting', 'levelFilter', { filter: filteredTags.join(',') })
                  }

                  onLevelsFilter(filteredTags)
                }}
              />
              <StyledTagCloudLabel htmlFor={level}>{level}</StyledTagCloudLabel>
            </li>
          ))}
        </StyledTagCloudList>
      </fieldset>
    </div>
  )
}
