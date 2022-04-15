import { useConfig } from 'Context/Config'
import { Main } from 'layouts/main'
import { GetServerSideProps } from 'next'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'
import { Text } from 'components/global/text'
import { useRouter } from 'next/router'
import { PRIVACY_ACCEPTED } from './VoteConst'
import Cookies from 'js-cookie'
import { StyledButton, StyledHeader, StyledIntro, StyledLandingContainer } from './landing.styled'

type VoteLandingProps = {
  instance: string
}

export default function VoteLanding({ instance }: VoteLandingProps): JSX.Element {
  const { conference } = useConfig()
  const router = useRouter()

  function onClickHandler() {
    Cookies.set(PRIVACY_ACCEPTED, 'true', { expires: 90 })
    router.push(`/vote/voting`)
  }

  return (
    <Main title="Vote" description={`${conference.Name} voting page.`}>
      <StyledLandingContainer>
        <StyledHeader tag="h1">{`${instance} Conference Voting`}</StyledHeader>
        <StyledIntro>Here's how voting works:</StyledIntro>
        <Text>
          You'll be presented with a couple of talk options. Have a read of the abstract and simply select the talk
          which sounds the best to you based on your interests. We'll keep showing you talks based on what you select,
          and possibly throw some surve calls at you to keep things interesting.
        </Text>
        <Text>You can vote for as many or as little talks as you'd like. Every vote counts.</Text>
        <Text>You'll be able to continuously vote through the voting period. Voting closes on X date.</Text>
        <Text>Happy Voting!</Text>

        <Text>
          By selecting 'Start voting' I have read and accepted the <a href="/privacy">DDDPerth Privacy statement</a>.
        </Text>

        <StyledButton kind="primary" onClick={onClickHandler}>
          Start Voting!
        </StyledButton>
      </StyledLandingContainer>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dates, conference } = getCommonServerSideProps(context)
  const isPrivacyAccepted = Boolean(context.req.cookies[PRIVACY_ACCEPTED])

  if (!dates.VotingOpen) {
    return { notFound: true }
  }

  if (isPrivacyAccepted) {
    return {
      redirect: {
        destination: '/vote/voting',
        permanent: false,
      },
    }
  }

  return {
    props: {
      instance: conference.Instance,
    },
  }
}
