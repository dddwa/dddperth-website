import { Fragment } from 'react'
import { VolunteerOpportunity } from './types'

export default function getVolunteerOpportunities(): VolunteerOpportunity[] {
  const opportunities: VolunteerOpportunity[] = []

  opportunities.push({
    RoleTitle: "👩‍🏫 Speaker Mentor",
    Description: (
      <Fragment>
        Once talks are chosen, we run training sessions for speakers to give them advice and tips on putting together
        and performing their presentation. These sessions usually have a few mentors who can give advice to speakers,
        or who can one-on-one pop out and go through things a bit more in-depth with a first time speaker if needed.
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "🎁 Speaker Gift Elves",
    Description: (
      <Fragment>
        Organising, planning, assembling and packing speaker gifts. This is a role that requires some time in the lead
        up to the conference. The gifts will be sourced already and there will be some time elected (probably in the
        evening) where a small group will come together with the committee member leading this initiative to assemble
        the packs. Important note, this is not a standalone role and will be coupled with an "on the day" operational role.
        Please advise if there are any roles that you specifcially do not want to be assigned. Or if you have another
        area of interest in an operational role on the day that would be a great help too!
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "🎤 Room MC's",
    Description: (
      <Fragment>
        Room MC, Coordinator, host.. Whatever the right name is. The person who stands in front of the audience in a
        selected room and makes that room HAPPEN! You are responsible for ensuring each session starts and finishes
        on time, the speakers are mic'd up and everone behaves themselves. So it goes without saying  - you need to be
        comfortable speaking in front of large audiences, good at timekeeping and able think on your feet.
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "💬 Social Buzz",
    Description: (
      <Fragment>
        On the day, one volunteer per room whose sole job is to take a couple of photos and publish social posts about
        each talk (Tweets and LinkedIn)
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "🏃‍♀️ General Runners/Ushers",
    Description: (
      <Fragment>
        General assistance and working under the guidance of the team lead on the day. Ushers simply make stuff happen
        and are paramount to the effective running of the conference while things are in flight. From herding large
        groups of people between rooms, enforcing room capacity numbers and bringing a thing from one side of the
        venue to another becasue someone needs it - prepare for the unexpected!
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "🎟 Admission",
    Description: (
      <Fragment>
        Responsible for working under the direction of a team lead to efficiently check delegates into the venue/conference
        using the nominated digial check-in tool. You will be required to attend a pre-event training session to ensure
        familiarity and your ability to work in a high pressure environment during the check-in period. The idea here
        is that this group of people are the same as those from Bump In thus will need to be available from 6am
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "↔ Bump In/Out",
    Description: (
      <Fragment>
        Requires the Volunteer to be available for a 6am start on the day of the event and able to take direction
        from a team lead with regards to the effective flow of equipment, supplies and setup from the loading dock
        to their intended location. Thus it is important volunteers are physically fit, free form any injury that may
        hinder them from undertaking light to medium lifting and repetitive tasks.
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "📷 Photography ",
    Description: (
      <Fragment>
        PHOTOGRAPHERS! as you know, or if you don't yet you are about to find out. DDD LOVE creating a social buzz
        and having swathes of pictorial evidence of the fun our attendees, speakers and volunteers have on the day.
        So if you self-identify as a photographer, and have a super expensive snazzy camera PLEASE REGISTER YOUR INTEREST!
      </Fragment>
    )
  })

  opportunities.push({
    RoleTitle: "🤝 Concierge",
    Description: (
      <Fragment>
        Works with Gold level sponsors to ensure they maximise the value derived from their partnership with DDD.
        This includes help with designing their booth experience and assistance on the conference day. This role is
        required in the lead-up to the event and it would be great to hear if there are some operational roles that
        are required on the day that you may also be interested in.
      </Fragment>
    )
  })

  return opportunities;
}
