import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { StyledList, Text } from 'components/global/text'
import { PageWithSidebar } from 'layouts/withSidebar'
import { ButtonAnchor } from 'components/global/Button/Button'
import { useConfig } from 'Context/Config'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'
import { formatInTimeZone } from 'date-fns-tz'

const CFPPage: NextPage = () => {
  const { conference, dates } = useConfig()

  return (
    <PageWithSidebar
      title="Call For Presentations (CFP)"
      description={conference.Name + ' Call For Presentations (CFP) page.'}
    >
      <h1>Call For Presentations (CFP)</h1>

      <Text>
        We welcome sessions from any software related topic and from anyone in the software industry (you don't have to
        be a developer!). Previously we have had a wide range of sessions including{' '}
        {conference.PreviouslySubmittedTopics}.
      </Text>

      <Text textAlign="center">
        <ButtonAnchor kind="primary" href={conference.SessionizeUrl} target="_blank" rel="noopener">
          Submit a session via Sessionize
        </ButtonAnchor>
      </Text>

      <Text>
        We want to encourage people that wouldn't normally speak at conferences to give it a go! We do this by:
      </Text>
      <StyledList>
        <li>
          Having an enforced{' '}
          <Link href="/code-of-conduct">
            <a>code of conduct</a>
          </Link>{' '}
          to create a friendly, welcoming atmosphere.
        </li>
        <li>
          Having <strong>anonymous session voting</strong>; we will only show the title, abstract and tags of a talk to
          voters to remove unconscious bias.
        </li>
        <li>
          Having <strong>long (45 mins) and short (20 mins)</strong> talk options.
        </li>
        <li>
          Accepting a <strong>broad range of technical and non-technical topics</strong> related to the software
          industry; if voters think your talk is interesting, it's in!{' '}
          <strong>You don't have to be a developer to submit a talk (or attend)</strong>; we welcome everyone in the
          software industry.
        </li>
        <li>
          Encouraging submissions from <strong>multiple presenters as well as solo presenters.</strong>
        </li>
        <li>
          Providing a{' '}
          <strong>
            <a href={`mailto:${conference.MentoringEmail}`}>free mentoring service</a>
          </strong>
          ; we have a bunch of experienced speakers who are happy to have a confidential chat with you to run through
          any ideas you have or give safe and constructive feedback.
        </li>
        <li>
          There will also be <strong>free speaker training and support</strong> for all speakers, so{' '}
          <strong>first timers, juniors, and everyone else</strong> are all encouraged to submit and will have support!
        </li>
        <li>
          Allowing speakers to opt out of question &amp; answer time at the end of their presentation if they don't feel
          comfortable doing it.
        </li>
      </StyledList>

      <Text>
        This year we are using Sessionize to track submissions - this provides a great experience for speakers since you
        can resubmit talks submitted to other conferences that use Sessionize (e.g. NDC Sydney and the other DDD
        conferences in Australia) and you can update your profile and session information at any time.
      </Text>

      <Text>Other things to note for presenters:</Text>
      <StyledList>
        <li>Speakers get free entry into the event</li>
        <li>You will likely be speaking to an audience of between 50-150 people.</li>
        <li>
          We are not interested in sales/vendor pitch presentations although you are welcome to have a slide or two
          about yourself and your company.
        </li>
        <li>You will probably have internet access, but you should have a backup plan in case it's unavailable.</li>
        <li>
          We will open voting at{' '}
          {formatInTimeZone(conference.VotingOpenFrom, conference.TimeZone, dates.DateDisplayFormat + ' ' + dates.TimeDisplayFormat)}; if your
          presentation gets voted in and you agree to present then this is a serious commitment.
        </li>
        <li>
          Questions? <a href={`mailto:${conference.ContactEmail}`}>Fire off an email</a> and we'll get right back to you
          :)
        </li>
      </StyledList>

      <Text textAlign="center">
        <ButtonAnchor href={conference.SessionizeUrl} kind="primary" target="_blank" rel="noopener">
          Submit a session via Sessionize
        </ButtonAnchor>
      </Text>

      <h2>Already submitted, but want to edit?</h2>
      <Text textAlign="center">
        <ButtonAnchor kind="secondary" target="_blank" href={conference.SessionizeEditUrl} rel="noopener">
          Edit your session(s) via Sessionize
        </ButtonAnchor>
      </Text>
    </PageWithSidebar>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dates } = getCommonServerSideProps(context)

  if (!dates.AcceptingPresentations) {
    return { redirect: { destination: '/', permanent: false } }
  }

  return {
    props: {},
  }
}

export default CFPPage
