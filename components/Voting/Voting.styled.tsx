import { breakpoint } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'
import styled from '@emotion/styled'
import { zIndex } from 'components/utils/styles/zindex'

export const StyledVotingPanel = styled('div')({
  position: 'sticky',
  top: 60,
  zIndex: zIndex.votingPanel,

  [breakpoint('sm')]: {
    top: 80,
  },
})

export const StyledVoteHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: calcRem(theme.metrics.md),
  backgroundColor: '#f5f5f5',
  color: '#333',
  borderBottom: '1px solid #ddd',
}))
