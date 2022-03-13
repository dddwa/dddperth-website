import styled from '@emotion/styled'
import { calcRem } from 'components/utils/styles/calcRem'

export const StyledEloVoteContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${calcRem(200)}, 1fr))`,
  gap: theme.metrics.xxl,
}))
