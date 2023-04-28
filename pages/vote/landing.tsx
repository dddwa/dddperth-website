import { useConfig } from 'Context/Config'
import { Main } from 'layouts/main'
import { GetServerSideProps } from 'next'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'
import { Text } from 'components/global/text'
import { useRouter } from 'next/router'
import { PRIVACY_ACCEPTED } from '../../components/Voting/VoteConst'
import Cookies from 'js-cookie'
import { StyledButton, StyledHeader, StyledIntro, StyledLandingContainer } from '../../components/Voting/landing.styled'
import { formatInTimeZone } from 'date-fns-tz'

type VoteLandingProps = {
  instance: string
  votingFinished: string
}

const BUTTON_LABEL = 'Start Voting!'

export default function VoteLanding({ instance, votingFinished }: VoteLandingProps): JSX.Element {
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
          which sounds the best to you based on your interests. If you really can't pick between the two, simply choose
          "It's a draw!".
        </Text>
        <Text>
          Once you've made your selection, two new options will appear. You can continue to vote on the options
          presented for as long as you like - every vote will count towards formulating the best agenda possible for
          this year.
        </Text>
        <Text>
          Voting closes on {votingFinished}, so you have between now and then to have your say. You can leave and come
          back any time until the closing day to get your votes in.
        </Text>
        <Text>Happy Voting!</Text>

        <Text>
          By selecting <em>'{BUTTON_LABEL}'</em> I have read and accepted the{' '}
          <a href="/privacy">DDDPerth Privacy statement</a>.
        </Text>

        <StyledButton kind="primary" onClick={onClickHandler}>
          {BUTTON_LABEL}
        </StyledButton>
      </StyledLandingContainer>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dates, conference } = getCommonServerSideProps(context)
  const isPrivacyAccepted = context.req.cookies[PRIVACY_ACCEPTED] === 'true'

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
      votingFinished: formatInTimeZone(conference.VotingOpenUntil, conference.TimeZone, dates.DateDisplayFormat),
    },
  }
}
