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

const VenueMap = dynamic(() => import('components/venueMap'), { ssr: false })

interface ConferencePageProps {
  sessions?: Session[]
  sessionId?: string
}

const ConferenceDayPage: NextPage<ConferencePageProps> = ({ sessions, sessionId }) => {
  const { conference, dates } = useConfig()
  if (dates.IsInProgress) {
    // dummy
  }

  const { currentSessionGroup } = useSessionGroups(sessions)

  if (currentSessionGroup && currentSessionGroup.sessions.length > 0) {
    // NB: This is quite brittle, as it assumes that the list of current sessions is returned in exactly the same order as the definition of rooms
    currentSessionGroup.sessions.map(function (session, i) {
      const presenters = []
      session.Presenters.map((p) => {
        presenters.push(p.Name)
      })
      if (!roomLocations.features[i]) return
      roomLocations.features[i].properties.currentEvent = {
        eventId: session.Id,
        eventName: session.Title,
        eventPresenters: presenters.join(', '),
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
        <strong>Where</strong>: Perth Convention and Exhibition Centre,{' '}
        <Link href="https://www.google.com.au/maps/place/Perth+Convention+and+Exhibition+Centre%2c+21+Mounts+Bay+Rd%2c+Perth">
          21 Mounts Bay Rd, Perth
        </Link>
        <StyledList>
          <li>
            <strong>Car</strong>: Perth Convention and Exhibition Centre (PCEC) has parking underneath it for{' '}
            <Link href="https://www.cityofperthparking.com.au/convention-centre">$10 for the day</Link>.
          </li>
          <li>
            <strong>Train</strong>: PCEC is adjoining the Elizabeth Quay Train Station and is a 5 minute walk from it.
            See <Link href="http://transperth.wa.gov.au/">Transperth</Link> for more details.
          </li>
          <li>
            <strong>Bus</strong>: PCEC is easy to get to via any bus that goes to the Esplanade Busport, which is
            adjoining the PCEC. See <Link href="http://transperth.wa.gov.au/">Transperth</Link> for more details.
          </li>
        </StyledList>
      </Text>
      <h2>Registration</h2>
      <Text>
        We'll be welcoming everyone from <strong>8:00 to 8:40am</strong> at the registration desk in the Central Foyer
        on Level 2. Level 2 is the main entrance from St Georges Terrace and the bus port into the centre.
      </Text>
      <Text>You should have received a QR Code when you registered. Bring that; on your device is fine.</Text>
      <Text>
        If you don't have a QR Code, you might not have completed your ticket registration. Find your order email or
        check your junk folder, and if you still can't find details on how to get that QR Code, just&nbsp;
        <Link href="mailto:info@dddperth.com?subject=Help%2C%20I%20can't%20find%20my%20ticket&amp;body=I%20can't%20find%20my%20ticket!%20%0A%0AMy%20name%20is%3A%0AMy%20email%20that%20I%20probably%20used%20is%3A%0A">
          contact us
        </Link>
        &nbsp;and we'll help you out.
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
      <h2>Around the Venue</h2>
      <Text>
        This year, we will be located on level 2 near the Riverside Theatre through to the Northern and Southern Foyers.
        We also have a treasure hunt running - get your checklist from the DDD Help Desk and complete the hunt for your
        chance to win a prize at the end of the day!
      </Text>

      <VenueMap roomLocationData={roomLocations} />

      <h3>Rooms</h3>
      <Text>
        {conference.Name} {format(conference.Date, 'y')} consists of nine tracks, which will be run out of the Riverside
        Theatre, and Meeting Rooms 1 through to 12. The Keynote and Locknote will take place in the Riverside Theatre.
      </Text>
      <Text>
        The rooms will be clearly marked on the day, as well as screens outside the rooms indicating upcoming sessions.
      </Text>
      <Text>Rooms have no particular theme, attend whichever sessions most interest you at each time slot.</Text>
      <h3>Toilets</h3>
      <Text>
        The above floorplans show where the toilets are located on level 2. We will explicitly mark the toilets as
        "Access all toilets", which means that they are open to anyone to use regardless of disability, gender identity
        or any other personal attribute. Of course, we encourage everyone to use the most appropriate and comfortable
        toilet for them and not to feel pressured to use the "Access all toilets".
      </Text>
      <h3>Childcare</h3>
      <Text>
        Childcare will be located in Meeting Rooms 10 and 11, opposite the DDD Perth Help Desk on Level 2. If you have
        bought a childcare ticket then head to registration as normal, where one of our organisers will assist you. An
        email with more information specific to childcare will be sent to all registered parents prior to the day.
      </Text>
      <h3>Private baby-feeding and pumping area</h3>
      <Text>
        Level 1 has an optional baby changing and feeding room with all the facilities. Go down the lifts to get there.
        We welcome you to pump or feed your baby anywhere you feel comfortable and if anyone makes you feel otherwise to
        let a volunteer or organiser know as per our code of conduct.
      </Text>
      <h3>WiFi</h3>
      <Text>
        PCEC has free wifi for all attendees limited to 512Kb download speed that needs to be renewed every hour. We
        make no guarantees about the quality or speed of the wifi.
      </Text>
      <h2>Agenda</h2>
      <Text>
        At registration, you will be provided with a lanyard bearing your name on the front and our agenda on the back.
        Note: we have a mix of 45 minute and 20 minute sessions. If you wish to move around while sessions are in
        progress then feel free to do so, however take care to be respectful towards our presenters. View the DDD Perth
        agenda.
      </Text>
      <h3>Food and Drink</h3>
      <Text>
        Tea and coffee will be available throughout the day at the Coffee Carts sponsored by Planit, MOQDigital and
        Bunnings.
      </Text>
      <Text>(Sponsor logos)</Text>
      <Text>
        Morning Tea, Lunch, and Afternoon Tea will be provided and will take place in the Northern, Southern and
        Riverside Theatre Foyers.
      </Text>
      <Text>
        The food provided this year is provided in bags to reduce risks of sharing viruses during Lunch. There will also
        be a dietary station, next to the Valrose Stand, at the windows nearest the theatre. If you’ve provided any
        allergy or dietary information as part of the registration process, your name will be recorded here and there
        should be a Venue Staff member available to help if you need it. Reach out to any Volunteer if you need help and
        we'll find someone to talk to.
      </Text>
      <Text>
        <strong>Please bring appropriate precautions (epipen or other)</strong> as the Venue will have a lot of people
        and they can't guarantee against kitchen contaminants. This applies particularly to nut allergies.
      </Text>
      <h3>Afterparty</h3>
      <Text>There is no official afterparty for 2022.</Text>
      <h2>Getting Help</h2>
      <h3>Issues &amp; Questions</h3>
      <Text>
        On the day for any issues or questions please feel free to speak to a member of the DDD Perth team who will be
        easily identifiable by their Volunteer DDD Perth t-shirts.
      </Text>
      <Text>
        We'll also be identifying the organisers and volunteers during the welcome, and there will also be a volunteer
        desk next to registration, attended at all times by members from our wonderful team.
      </Text>
      <Text>
        You can also send a tweet to @dddperth or email <Link href="mailto:info@dddperth.com">info@dddperth.com</Link>.
      </Text>
      <Text>
        If you wish to report an issue anonymously, you can do so using this form. We can't follow up an anonymous
        report, but we will fully investigate it and take whatever action we can to prevent a recurrence.
      </Text>
      <div>
        Emergency contact numbers:
        <StyledList>
          <li>Rebecca Waters - 0405 100 063</li>
          <li>Matt Ward - 0403 695 863</li>
          <li>Amy Kapernick - 0438 984 242</li>
        </StyledList>
      </div>
      <h2>COVID-19</h2>
      <Text>
        Our <SafeLink href="/covid-policy">COVID-19 Policy</SafeLink> explains how we're adhering to WA Government
        guidelines, and our expectations for attendees to enjoy the conference safely and responsibly.
      </Text>
      <h3>Feel Unwell During the Day?</h3>
      <StyledList>
        <li>If you don't feel well ahead of DDD Perth, please just tell us and we'll refund your ticket.</li>
        <li>
          If on the day you feel unwell, go immediately to helpdesk and obtain a mask. Provide your details so we can
          check you're going okay and then seek medical assistance. We'll refund your ticket.
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
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dates } = getCommonServerSideProps(context)

  if (!dates.IsInProgress) {
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

  return {
    props: {},
  }
}

export default ConferenceDayPage
