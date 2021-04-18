import styled from 'components/utils/styles/theme'
import { calcRem } from 'components/utils/styles/calcRem'
import { SponsorType } from 'config/types'
import { SafeLink } from 'components/global/safeLink'

export const StyledSponsorsContainer = styled('section')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginBottom: calcRem(theme.metrics.md),

  h2: {
    width: '100%',
    marginTop: calcRem(theme.metrics.lg),
    textAlign: 'center',
  },
}))
StyledSponsorsContainer.displayName = 'StyledSponsorsContainer'

interface StyledSponsorLogoProps {
  level?: SponsorType
}

export const StyledSponsorLink = styled(SafeLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: calcRem(theme.metrics.md),
  transition: 'transform 0.3s ease',

  '&:hover, &:focus': {
    transform: 'scale(1.1)',
  },
}))
StyledSponsorLink.displayName = 'StyledSponsorLink'

export const StyledSponsorLogo = styled('img')<StyledSponsorLogoProps>(
  {
    maxWidth: calcRem(200),
    maxHeight: calcRem(150),
  },
  ({ level }) =>
    level === SponsorType.Platinum && {
      maxWidth: calcRem(300),
      maxHeight: calcRem(200),
    },
)
StyledSponsorLogo.displayName = 'StyledSponsorLogo'
