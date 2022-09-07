import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { format } from 'date-fns'
import { useConfig } from 'Context/Config'
import { Session } from 'config/types'
import { Main } from 'layouts/main'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'
import { fetchSessions } from 'components/utils/useSessions'
import { useSessionGroups } from 'components/utils/useSessionGroups'
import { StyledList, Text } from 'components/global/text'
import { SafeLink } from 'components/global/safeLink'
import { roomLocations } from 'components/venueMapData'
import Image from 'next/image'

const VenueMap = dynamic(() => import('components/venueMap'), { ssr: false })

interface ConferencePageProps {
  sessions?: Session[]
  sessionId?: string
}

const ConferenceDayPage: NextPage<ConferencePageProps> = ({ sessions }) => {
  const { conference, dates } = useConfig()
  if (dates.IsInProgress) {
    // dummy
  }

  const { currentSessionGroup } = useSessionGroups(sessions)

  if (currentSessionGroup && currentSessionGroup.sessions.length > 0) {
    // NB: This is quite brittle, as it assumes that the list of current sessions is returned in exactly the same order as the definition of rooms
    currentSessionGroup.sessions.map(function (session: Session, i) {
      const presenters = []
      if (typeof session.Presenters != 'undefined') {
        session.Presenters.map((p) => {
          presenters.push(p.Name)
        })
        if (!roomLocations.features[i]) return
        roomLocations.features[i].properties.currentEvent = {
          eventId: session.Id,
          eventName: session.Title,
          eventPresenters: presenters.join(', '),
        }
      }
    })
  }

  return (
    <Main title="Conference Day" description="Conference day information">
      <h1>
        {conference.Name} {format(conference.Date, 'y')} Conference Day Information
      </h1>
      {conference.Handbook && (
        <p>
          You can also download much of the information on this page as a PDF:&nbsp;
          <a className="btn btn-pdf" href={'/static/docs/' + conference.Handbook}>
            Download handbook (PDF)
          </a>
        </p>
      )}
      <h2>Getting There</h2>
      <Text>
        Our <SafeLink href="/venue">Venue</SafeLink> page has more information on how to get to the conference.
      </Text>
      <h2>Agenda</h2>
      <Text>
        {conference.Name} {format(conference.Date, 'y')} consists of nine tracks, which will be run out of the Riverside
        Theatre, and Meeting Rooms 1 through to 8. The Keynote and Locknote will take place in the Riverside Theatre.
        You can <SafeLink href="/agenda">view the full agenda</SafeLink> online.
      </Text>
      <Text>
        Rooms will be clearly marked on the day, as well as screens outside the rooms indicating upcoming sessions.
        Rooms have no particular theme, attend whichever sessions most interest you at each time slot. Note: We have a
        mix of 45 minute and 20 minute sessions. If you wish to move around while sessions are in progress then feel
        free to do so, however take care to be respectful towards our presenters.
      </Text>
      <h2>Around the Venue</h2>
      <Text>
        We are located on level 2 near the Riverside Theatre through to the Northern and Southern Foyers. We also have a
        treasure hunt running - get your checklist from the DDD Help Desk and complete the hunt for your chance to win a
        prize at the end of the day!
      </Text>
      <div style={{ zIndex: 200 }}>
        <VenueMap roomLocationData={roomLocations} />
      </div>

      <h3>Toilets</h3>
      <Text>
        The above floorplan shows where the toilets are located on level 2. They will be "Access all toilets", which
        means that they are open to anyone to use regardless of disability, gender identity or any other personal
        attribute. We encourage you to use the most appropriate and comfortable toilet for you and not to feel pressured
        to use the "Access all toilets" on level 2.
      </Text>
      <h3>Childcare</h3>
      <Text>
        Childcare is located in Meeting Room 11, opposite the DDD Perth Help Desk on Level 2. Please let us know during
        registration that you have a Childcare ticket and one of our organisers will help you. An email with more
        information is sent to all registered parents and guardians before the conference starts.
      </Text>
      <h3>Private baby-feeding and pumping area</h3>
      <Text>
        Level 1 has an optional baby changing and feeding room with all the facilities, close to the lifts. You are
        welcome to pump or feed your baby anywhere you feel comfortable, and if anyone makes you feel otherwise please
        let a volunteer or organiser know as per our code of conduct.
      </Text>
      <h3>WiFi</h3>
      <Text>
        PCEC has free wifi for all attendees limited to 512Kb download speed that needs to be renewed every hour. We
        make no guarantees about the quality or speed of the wifi.
      </Text>

      <h3>Food and Drink</h3>
      <Text>
        Tea and coffee will be available throughout the day at the Coffee Carts sponsored by Planit, MOQDigital and
        Bunnings.
      </Text>
      <div>
        <Image src="/static/images/sponsors/2021-moqdigital.png" width="100" height="100" />
        <Image src="/static/images/sponsors/planit_n.png" width="100" height="100" />
        <Image src="/static/images/sponsors/2022-bunnings.png" width="100" height="100" />
      </div>
      <Text>
        Morning Tea, Lunch, and Afternoon Tea will be provided and will be served in the Northern, Southern and
        Riverside Theatre Foyers. Special dietary requirements will be served at the station next to the Mantel Group
        Stand. Your name will be recorded and a Venue Staff member is available to help. Reach out to any Volunteer if
        you need more help and we'll find someone to talk to.
      </Text>
      <Text>
        <strong>Please bring appropriate precautions (epipen or other)</strong> as the Venue will have a lot of people
        and they can't guarantee against kitchen contaminants. This applies particularly to nut allergies.
      </Text>
      <h3>Afterparty</h3>
      <Text>
        After the event, we invite you to join us in the foyer adjoining the conference rooms for the afterparty. Some
        games, food and drink will be provided, while we enjoy the beautiful views over Elizabeth Quay and the Swan
        River.
      </Text>
      <h2>Code of Conduct</h2>
      <Text>
        Please familiarise yourself with the <Link href="/code-of-conduct">Conference Code of Conduct</Link>.
      </Text>
      <Text>
        All attendees, speakers, sponsors and volunteers at our conference are required to agree with the code of
        conduct. Organisers and volunteers will enforce this code throughout the event. We are expecting cooperation
        from all participants to help ensuring a safe, welcoming environment for everybody.
      </Text>
      <h3>What to do if someone makes a complaint about you?</h3>
      <StyledList>
        <li>DDD Perth organisers and volunteers will have a conversation with you, and listen to you.</li>
        <li>
          Listen to the complaint with an open mind and consider the effect rather than intent of the behaviour in
          question
        </li>
        <li>Don't be dismissive of the complainant</li>
        <li>Understand any advice given on how to act in the future</li>
        <li>Comply with the directions of the DDD Perth organisers and volunteers</li>
      </StyledList>
      <Text>
        We believe everyone here is coming from a good place, and so we expect that you're learning, just like we are.
      </Text>
      <h2>Getting Help</h2>
      <h3>Issues &amp; Questions</h3>
      <Text>
        Please feel free to speak to a member of the DDD Perth team who will be easily identifiable by their Volunteer
        DDD Perth t-shirts.
      </Text>
      <Text>
        We'll identify the organisers and volunteers during the Welcome, and there will also be a help desk next to
        registration, attended at all times by members from our wonderful team.
      </Text>
      <Text>
        You can also send a tweet to @dddperth or email <Link href="mailto:info@dddperth.com">info@dddperth.com</Link>.
      </Text>
      <Text>
        If you wish to report an issue anonymously, you can do so using{' '}
        <SafeLink href="https://forms.office.com/Pages/ResponsePage.aspx?id=8IU585acE0S9pvuDhIEiS3674sSFwiFHpg5usp1ihu5URDVGTks2N1VOQVBWWUU1VFJESDZMNlkxNSQlQCN0PWcu">
          this form
        </SafeLink>
        . We can't follow up an anonymous report, but we will fully investigate it and take whatever action we can to
        prevent a recurrence.
      </Text>
      <div>
        Emergency contact numbers:
        <StyledList>
          <li>Alex Colville - 0439 227 330</li>
          <li>Rebecca Waters - 0405 100 063</li>
          <li>Matt Ward - 0403 695 863</li>
        </StyledList>
      </div>
      <h2>COVID-19</h2>
      <Text>
        Our <SafeLink href="/covid-policy">COVID-19 Policy</SafeLink> explains how we're adhering to WA Government
        guidelines, and our expectations for attendees to enjoy the conference safely and responsibly.
      </Text>
      <h3>Feel Unwell During the Day?</h3>
      <StyledList>
        <li>
          If you don't feel well ahead of DDD Perth, please stay home and tune into the livestreams instead. Please see
          below for further details.
        </li>
        <li>
          If on the day you feel unwell, please mask up, inform the help desk and leave the event. Provide your details
          so we can check you're going okay and then seek medical assistance.
        </li>
      </StyledList>
      <h3>Be COVID Safe</h3>
      <StyledList>
        <li>Sanitiser will be available throughout the venue. If you need help, speak to a volunteer.</li>
        <li>
          During our prize draw, winners have the option of a high five, foot tap, elbow bump, high five “miss” or a
          wave.
        </li>
      </StyledList>
      <h2>Livestream</h2>
      <Text>
        In 2022, DDD Perth will be livestreamed for the first time ever, which will improve accessibility for those in
        WA regions or those who can't make it to the venue on the day. Each track of the agenda will have its own
        livestream, which you can access from each session description on the <SafeLink href="/agenda">Agenda</SafeLink>
        . We also have a{' '}
        <SafeLink href="https://www.youtube.com/playlist?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx">playlist</SafeLink>{' '}
        containing all the streams for ease of access.
      </Text>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dates } = getCommonServerSideProps(context)

  if (!dates.WeekBefore) {
    return { redirect: { destination: '/', permanent: false } }
  }

  const sessions = await fetchSessions(process.env.NEXT_PUBLIC_GET_AGENDA_URL)
  const sessionId = context.query.sessionId

  return {
    props: {
      ...(sessions ? { sessions } : {}),
      ...(sessionId ? { sessionId } : {}),
    },
  }
}

export default ConferenceDayPage
