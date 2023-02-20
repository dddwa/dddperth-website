import { SafeLink } from 'components/global/safeLink'
import { Fragment } from 'react'
import { VolunteerOpportunity } from './types'

export default function getVolunteerOpportunities(): VolunteerOpportunity[] {
  const opportunities: VolunteerOpportunity[] = []

  opportunities.push({
    RoleTitle: '👨🏿‍💻 Technology',
    Description: (
      <Fragment>
        <p>
          This team is responsible for our public facing technology, including primarily our website. If you are
          interested in development (DDD Perth is probably a good place...) from our voting platform through to our
          build process, you would be very welcome to join the team.
        </p>
        <p>
          {' '}
          Our website and other codebases are available on{' '}
          <SafeLink href="https://github.com/dddwa" target="?_blank">
            github
          </SafeLink>
          , so you can have a look to see if you want to work in this team ahead of time.
        </p>
      </Fragment>
    ),
  })

  opportunities.push({
    RoleTitle: '👷🏾‍♀️ Logistics',
    Description: (
      <Fragment>
        Logistics team members curate the attendee experience, from admission right through to catering. The team is
        responsible for our attendee experience — the conference layout from check-in to sponsors to room layouts, what
        food to provide and how best to do it, and how best to include any extra like childcare or quiet room. If you
        want to level up childcare, the food, coffee, signage, even the venue itself, this team is the right place. This
        team is a busy, on the ground team, responsible for making the conference come alive.
      </Fragment>
    ),
  })

  opportunities.push({
    RoleTitle: '👨🏽‍🎨 Media',
    Description: (
      <Fragment>
        The Media and Brand team are responsible for our awesome graphics and theme, as well as any merch or swag you
        see from us. Have some ideas for the day? This team is needed in the lead up, from as early as possible.
      </Fragment>
    ),
  })

  opportunities.push({
    RoleTitle: '🤳🏻 Social Media & Communications',
    Description: (
      <Fragment>
        Our newsletters, witty one-liners and the rest don't write themselves. Come help us reach the masses! This team
        is responsible for public-facing content creation.
      </Fragment>
    ),
  })

  opportunities.push({
    RoleTitle: '👩🏼‍🏫 People (Volunteering)',
    Description: (
      <Fragment>
        This conference takes a village to organise, and this team looks after the volunteer experience. From recruiting
        through to training, this team helps all other Directors find enough team members to get it done.
      </Fragment>
    ),
  })

  opportunities.push({
    RoleTitle: '💼 Sponsorship',
    Description: (
      <Fragment>
        Looking after our sponsors is such an important part of the conference, as we simply couldn't go forth without
        their generous help. This team is responsible for onboarding, as well as coordinating the nitty gritty to get us
        to conference day.
      </Fragment>
    ),
  })

  opportunities.push({
    RoleTitle: '👩🏻‍🏫 Conference Content',
    Description: (
      <Fragment>
        The Conference Content team is responsible for finding and coordinating our keynotes, brainstorming the content
        outline for the conference, and looking after our wonderful speakers. From mentoring first time speakers to
        booking flights for our keynotes, this is a team that curates the speaker experience. Think our conference
        should have a workshop track? This is the team for you.
      </Fragment>
    ),
  })

  return opportunities
}
