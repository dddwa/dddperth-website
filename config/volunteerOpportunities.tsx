import { Fragment } from 'react'
import { VolunteerOpportunity } from './types'

export default function getVolunteerOpportunities(): VolunteerOpportunity[] {
  const opportunities: VolunteerOpportunity[] = []

  opportunities.push({
    RoleTitle: "CFP Mentor/CFP Proofing",
    Description: (
      <Fragment>
        Throughout the CFP process, we provide ad-hoc mentoring to those who ask for it. This is usually just emailing
        and providing feedback on proposals, helping them finesse their submission.
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "Speaker Mentor",
    Description: (
      <Fragment>
        Once talks are chosen, we run training sessions for speakers to give them advice and tips on putting together
        and performing their presentation. These sessions usually have a few mentors who can give advice to speakers,
        or who can one-on-one pop out and go through things a bit more in-depth with a first time speaker if needed.
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "Speaker Liaison",
    Description: (
      <Fragment>
        On the conference day, point of contact for speakers and checking that they're OK and have everything they need.
        e.g. Is the speaker there, do they need anything, do they know where they need to go, do they have everything, etc.
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "CFP Workshop Mentoring",
    Description: (
      <Fragment>
        We need mentors to help at the event, this is usually just prompting new speakers about what they could talk
        about and listening to draft proposals, giving some light and supportive feedback on improvements.
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "Speaker Gift Elves",
    Description: "Organising, planning, assembling and packing speaker gifts"
  })

  opportunities.push({
    RoleTitle: "Room MC's",
    Description: "TBD"
  })

  opportunities.push({
    RoleTitle: "Social Buzz",
    Description: (
      <Fragment>
        On the day, one volunteer per room whose sole job is to take a couple of photos and publish social posts about
        each talk (Tweets and LinkedIn)
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "General Runners/Ushers",
    Description: "TBD"
  })

  opportunities.push({
    RoleTitle: "Admission",
    Description: (
      <Fragment>
        Admission volunteers need be available for a 6am start on the day of the conference day and be able to take direction
        from a team lead with regards to the effective flow of equipment, supplies and setup from the loading dock to
        their intended location. It's important that they are physically fit, free from any injury that may hinder their ability
        to undertake light to medium lifting and repetitive tasks.
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "Bump In/Out",
    Description: "TBD"
  })

  opportunities.push({
    RoleTitle: "Event Management",
    Description: "TBD"
  })

  opportunities.push({
    RoleTitle: "Photography",
    Description: (
      <Fragment>
        Photographers need their own camera body, flash and lens, but will be provided an SD card that must be returned to
        AV solutions Director at the end of the conference day.
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "Concierge",
    Description: (
      <Fragment>
        Works with Gold level sponsors to ensure they maximise the value derived from their partnership with DDD.
        This includes help with designing their booth experience and assistance on the conference day.
      </Fragment>
    )
  })

  return opportunities;
}
