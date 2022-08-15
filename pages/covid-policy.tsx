import { Main } from 'layouts/main'
import { Text } from 'components/global/text'
import { SafeLink } from 'components/global/safeLink'

export default function CovidPolicy() {
  return (
    <Main title="COVID-19 Policy" description={`DDD Perth COVID-19 policy`}>
      <Text tag="h1">DDD Perth COVID-19 Policy</Text>
      <Text>
        <em>Last updated: 29 July 2022</em>
      </Text>

      <Text>
        DDD Perth is a single day, well attended event. We're expecting over 1000 people in 2022, and ask attendees
        assess the risk of COVID-19 accordingly.
      </Text>

      <Text tag="h2">Attendee Health</Text>
      <Text>
        <strong>If you feel unwell or have flu-like symptoms, please don't attend the event.</strong> You will still be
        able to watch the sessions at a later date. If, during the course of the day, you feel unwell, please mask up,
        inform the help desk and leave the event.
      </Text>

      <Text tag="h2">Masks</Text>
      <Text>
        We adhere to the{' '}
        <SafeLink href="https://www.wa.gov.au/government/covid-19-coronavirus/covid-19-coronavirus-what-you-can-and-cant-do">
          current advice
        </SafeLink>{' '}
        from WA Government and health authorities. You are not required to wear a mask but{' '}
        <strong>we strongly encourage doing so</strong>. We will have masks available at the help desk.
      </Text>

      <Text tag="h2">RATs</Text>
      <Text>
        Free RATs can be obtained from{' '}
        <SafeLink href="https://www.wa.gov.au/government/covid-19-coronavirus/covid-19-coronavirus-wa-free-rat-program">
          locations throughout WA
        </SafeLink>
        .
      </Text>

      <Text tag="h2">Social Distancing</Text>
      <Text>
        We adhere to the current advice from WA Government and health authorities. You are encouraged to socially
        distance. Please note that the conference rooms have chairs placed in them in accordance with current capacity
        limits. You may wish to assess and wear a mask in sessions.
      </Text>
      <Text>
        Our volunteers will be closing the doors on sessions when they reach capacity. Please respect this. If your
        preferred session is full, you can stream it online or watch another session, like the theatre track (which can
        accommodate the conference capacity).
      </Text>

      <Text tag="h2">Hand Hygiene</Text>
      <Text>
        Hand Sanitiser is provided throughout the Perth Convention and Exhibition Centre. Extra sanitiser is available
        at the help desk.
      </Text>

      <Text tag="h2">Lunch</Text>
      <Text>
        Lunch will be provided in individual boxes to reduce risk at meal times. Lunch has been extended to allow
        attendees to take their lunch outside. Perth Convention and Exhibition Centre has a grassed area directly in
        front of the DDD Perth registration area, and an undercover section to the East of the Northern Foyer. Please
        dispose of your packaging responsibly. Bins are provided in the conference foyers.
      </Text>
    </Main>
  )
}
