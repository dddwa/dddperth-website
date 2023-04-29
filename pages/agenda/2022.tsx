import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { From2022 } from 'config/2022'
import { StyledVideoContainer } from 'components/Agenda/Agenda.styled'
import { AgendaForDisplay, ServiceSlot, SessionSlot, Session, SponsorType } from 'config/types'
import { Sponsors } from 'components/Sponsors/sponsors'
import ResponsiveVideo from 'components/responsiveVideo'
import { SafeLink } from 'components/global/safeLink'
import { Text } from 'components/global/text'
import { ButtonAnchor } from 'components/global/Button/Button'
import { zonedTimeToUtc } from 'date-fns-tz'
import { useConfig } from 'Context/Config'
import { Main } from 'layouts/main'
import AllAgendas from 'components/allAgendas'

import data from 'public/static/agenda/2022.json'
import sessionizeGridSmart from 'public/static/agenda/2022_gridsmart.json'
import { DynamicAgenda } from 'components/dynamicAgenda'
import { mapGridSmartToAgendaDisplay } from 'components/Agenda/gridSmartUtils'

interface AgendaPageProps {
  agenda: AgendaForDisplay
  sessions?: Session[]
  sessionId?: string
  date: string
  conferenceInstance: string
}

const Agenda2022: NextPage<AgendaPageProps> = ({ agenda, sessions, sessionId, conferenceInstance }) => {
  const { conference, dates } = useConfig()

  return (
    <Main
      title={`${conferenceInstance} Agenda`}
      description={`The agenda for ${conference.Name} ${conferenceInstance}.`}
    >
      <div className="container">
        <h1>{conferenceInstance} Agenda</h1>

        <DynamicAgenda
          agenda={agenda}
          sessions={sessions}
          selectedSessionId={sessionId}
          acceptingFeedback={false}
          sponsors={From2022.Sponsors}
          feedbackLink={undefined}
        />

        <h2>Handbook</h2>
        <Text>
          <ButtonAnchor kind="primary" href={From2022.HandbookUrl}>
            Download 2022 handbook (PDF)
          </ButtonAnchor>
        </Text>

        <h2>Media</h2>
        <StyledVideoContainer>
          <ResponsiveVideo src={From2022.YouTubeKeynoteEmbedUrl} />
          <ResponsiveVideo src={From2022.YouTubeLocknoteEmbedUrl} />
        </StyledVideoContainer>

        <Text>
          <SafeLink href={From2022.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>
          {' | '}
          <SafeLink href={From2022.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </Text>

        <Sponsors
          show={true}
          hideUpsell={true}
          sponsors={From2022.Sponsors.filter((s) => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)}
        />

        <AllAgendas conference={conference} dates={dates} conferenceInstance={conferenceInstance} />
      </div>
    </Main>
  )
}

export const getStaticProps: GetStaticProps<AgendaPageProps> = async () => {
  const dateUTC = zonedTimeToUtc('2022-09-10T07:45', '+08:00').toJSON()

  const agendaDisplay = mapGridSmartToAgendaDisplay(sessionizeGridSmart)
  const agendaFor2022 = with2022Overrides(agendaDisplay)

  return {
    props: {
      date: dateUTC,
      agenda: agendaFor2022,
      sessions: data,
      conferenceInstance: '2022',
    },
  }
}

export function with2022Overrides(agenda: AgendaForDisplay): AgendaForDisplay {
  // mark keynote and locknote (for some reason they're not marked as `isPlenumSession` by sessionize)
  const sessionSlots = agenda.slots.filter((s): s is SessionSlot => s.type === 'sessions')
  const keynote = sessionSlots[0]
  Object.values(keynote.sessionsByRoom)[0][0].isKeynote = true
  const locknote = sessionSlots[sessionSlots.length - 1]
  Object.values(locknote.sessionsByRoom)[0][0].isLocknote = true

  // change room names for service sessions
  agenda.slots
    .filter((s): s is ServiceSlot => s.type === 'service')
    .forEach((s) => {
      switch (s.service.title) {
        case 'Changeover':
          s.service.roomName = null
          break
        case 'Registration':
          s.service.roomName = 'Riverside Foyer (Level 2)'
          s.service.description = 'Perth Convention and Exhibition Centre'
          break
        case 'Morning Tea':
        case 'Lunch':
        case 'Coffee Break':
          s.service.roomName = 'Northern, Theatre and Southern Foyers'
          break
        case 'DDD Afters':
          s.service.roomName = 'Riverside Foyer'
          break
      }
    })

  // merge the 3:25pm slot into the 3:15pm slot
  const secondOfDualTalkSlotIndex = agenda.slots.findIndex((s) => s.startTime === '2022-09-10T07:25:00.000Z')
  if (secondOfDualTalkSlotIndex !== -1) {
    const [secondOfDualTalkSlot] = agenda.slots.splice(secondOfDualTalkSlotIndex, 1) as SessionSlot[]
    const [[roomName, session]] = Object.entries(secondOfDualTalkSlot.sessionsByRoom)

    const previous = agenda.slots[secondOfDualTalkSlotIndex - 1] as SessionSlot
    previous.sessionsByRoom[roomName].push(...session)
  }

  // add livestreams
  const livestreams = [
    'https://youtu.be/ovEA5PaOdWo?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/8mq3bCMrmbE?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/DsFlSkTPH-Y?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/pqRQ4rN6adg?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/ox6ixHfs4xM?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/2KjEBFAVgoU?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/Plo8dSxAjHw?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/EU-VeLYi8LM?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/LQ5vtriC_bI?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
  ]
  livestreams.forEach((url, index) => (agenda.rooms[index].livestreamUrl = url))

  return agenda
}

export default Agenda2022
