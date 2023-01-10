import { Fragment } from 'react'
import { VolunteerOpportunity } from './types'

export default function getVolunteerOpportunities(): VolunteerOpportunity[] {
  const opportunities: VolunteerOpportunity[] = []

  opportunities.push({
    RoleTitle: '👨🏿‍💻 Website',
    Description: (
      <Fragment>
        String and Duct tape are great, but they only go so far! If you want to help us maintain-slash-redo our website,
        including our voting, our prize draw, our CRM integration... please come and help! This team is needed
        throughout the year.
      </Fragment>
    ),
  })

  opportunities.push({
    RoleTitle: '👷🏾‍♀️ Logistics',
    Description: (
      <Fragment>
        Logistics team members curate the attendee experience, from admission right through to catering. If you want to
        level up childcare, the food, coffee, signage, even the venue itself, this team is the right place. This team is
        a busy, on the ground team, responsible for making the conference come alive (and stay alive). This team is
        needed in the lead up to the conference.
      </Fragment>
    ),
  })

  opportunities.push({
    RoleTitle: '👨🏿‍🎨 Media',
    Description: (
      <Fragment>
        The Media and Brand team are responsible for our awesome graphics and theme, as well as any merch or swag you
        see from us. Have some ideas for the day? This team is needed in the lead up, from as early as possible.
      </Fragment>
    ),
  })

  opportunities.push({
    RoleTitle: '🤳🏻 Comms',
    Description: (
      <Fragment>
        Our newsletters, witty one-liners and the rest don't write themselves. Come help us reach the masses! This role
        is needed in the lead up to the conference, from as early as possible.
      </Fragment>
    ),
  })

  opportunities.push({
    RoleTitle: '👩🏼‍🏫 Director, People',
    Description: (
      <Fragment>
        Coordinating our ever growing volunteer base has been elevated to a Director position, as we know we have a huge
        number of team members and we want to make sure you are all looked after!
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
    RoleTitle: '💸 Finance',
    Description: (
      <Fragment>
        Our Treasurer, Matt, needs help! A core role, the treasurer is responsible for the books, but also the direction
        of the conference, as an office bearer of our organisation.
      </Fragment>
    ),
  })

  opportunities.push({
    RoleTitle: '👨🏼‍🏫 Conference Content',
    Description: (
      <Fragment>
        The Conference Content team is responsible for finding and coordinating our keynotes, brainstorming the content
        outline for the conference, and looking after our wonderful speakers. From mentoring first time speakers to
        booking flights for our keynotes, this is a team that curates the speaker experience. Think our conference
        should have a workshop track? This is the team for you. This team is needed in the lead up to the conference.
      </Fragment>
    ),
  })

  return opportunities
}
