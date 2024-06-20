import { Main } from 'layouts/main'
import { Text } from 'components/global/text'

export default function HealthPolicy() {
  return (
    <Main title="Health Policy" description={`DDD Perth Health policy`}>
      <Text tag="h1">DDD Perth Health Policy</Text>
      <Text>
        <em>Last updated: 7 September 2022</em>
      </Text>

      <Text tag="h2">Attendee Health</Text>
      <Text>
        <strong>If you feel unwell or have flu-like symptoms, please don't attend the event.</strong> You will still be
        able to watch the sessions via our livestreams, or the recordings at a later date. If, during the course of the
        day, you feel unwell, please mask up, inform the help desk and leave the event.
      </Text>

      <Text tag="h2">Hand Hygiene</Text>
      <Text>Hand Sanitiser is provided throughout the Venue. Extra sanitiser is available at the help desk.</Text>

      <Text tag="h2">Lunch</Text>
      <Text>Lunch will be provided in individual boxes to reduce risk at meal times.</Text>
    </Main>
  )
}
