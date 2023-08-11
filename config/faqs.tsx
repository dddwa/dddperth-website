import React, { Fragment } from 'react'
import { SafeLink } from 'components/global/safeLink'
import { StyledList } from 'components/global/text'
import Conference from './conference'
import { Dates, FAQ, TicketPurchasingOptions, TicketsProvider } from './types'
import Link from 'next/link'
import { formatInTimeZone } from 'date-fns-tz'

export default function getFaqs(dates: Dates): FAQ[] {
  const Faqs: FAQ[] = []

  if (!Conference.HideDate) {
    Faqs.push({
      Question: 'When and where is it?',
      Answer: `The event ${dates.IsComplete ? 'was' : 'will be'} held on ${dates.Display}${
        Conference.HideVenue ? '' : ' at ' + Conference.Venue.Name
      }.
          Doors ${dates.IsComplete ? 'opened' : 'will open'} at ${Conference.DoorsOpenTime} and ${
        dates.IsComplete ? 'we finished' : "we'll finish"
      } at ${Conference.FinishTime}${
        Conference.HasAfterParty
          ? ' followed by the afterparty' + Conference.HideAfterpartyVenue
            ? ''
            : ' at ' + Conference.Venue.Afterparty
          : ''
      }. (Please note that all times on the website are in Perth time: WST or +08:00)`,
    })
  }

  Faqs.push({
    Question: 'How much does it cost to attend?',
    Answer: `${Conference.TicketPrice} covers your entry, food and coffee all day${
      Conference.HasAfterParty ? ' and access to the afterparty!' : '!'
    }  Amazing value right!?
      We are able to keep the ticket price so low thanks to our generous sponsors.
      ${
        Conference.Name
      } is a non profit event and any excess will be kept as part of a fund for future events and/or donated to charity.`,
    Category: 'tickets',
  })

  Faqs.push({
    Question: "[Financial Assistance] What if I can't afford to attend?",
    AnswerWithoutParagraph: (
      <div>
        <p>
          If you can't afford the ticket price then we have Sponsored (Financial Assistance) tickets available. DDD
          Perth is donating 10 such tickets and we also have an option for people within the community to donate further
          tickets. The only requirement for eligibility is that you can't afford the ticket; you can access the
          Financial Assistance tickets by{' '}
          {Conference.TicketsProviderId === TicketsProvider.Tito && dates.RegistrationOpen ? (
            Conference.TicketsProviderFinancialAssistanceCode ? (
              <>
                entering the promotional code of <code>{Conference.TicketsProviderFinancialAssistanceCode}</code>
              </>
            ) : (
              <>
                registering <SafeLink href="https://ti.to/dddperth/2023/with/general-attendee-free">here</SafeLink>
              </>
            )
          ) : (
            <>selecting the Financial Assistance ticket</>
          )}
          .
        </p>
        <StyledList>
          <li>Already attended a conference in the past? That's ok.</li>
          <li>Already received a sponsored ticket in the past? Still ok.</li>
          <li>
            Don't have much (or any) experience with the technology featured at {Conference.Name}? That’s ok, too.
          </li>
          <li>Don't want to take money away from someone else? Really, it’s ok, everyone says that!</li>
          <li>Don't feel like you deserve this? That’s also ok: you do.</li>
        </StyledList>
      </div>
    ),
    Category: 'tickets',
  })

  Faqs.push({
    Question: 'Is this just for software developers?',
    Answer:
      'No! While our name implies we are just about devs, our events are aimed at all professionals in the software industry - developers, testers, designers, analysts, managers, etc.',
  })

  Faqs.push({
    Question: 'How is the agenda chosen?',
    Answer:
      'DDD Perth is a community driven event with core values of inclusion and democratic engagement. Proposed sessions are anonymised and voted for by the public, but some curation is inevitably required to produce an agenda that meets our inclusion goals. We aim to maximise the impact of every vote in the process, and always look to the community first in our decision making.',
  })

  Faqs.push({
    Question: 'Will refreshments be provided?',
    Answer:
      'Yes, attendees will receive lunch and snacks throughout the day and we will have a coffee cart operating all day.',
  })

  Faqs.push({
    Question: 'What about swag?',
    Answer:
      'Yes, there will be a bunch of swag on offer on the day both from our swag table as well as with the various sponsors that will have booths. We will have a small number of bags on offer if you need, but it is a good idea to bring your own bag.',
  })

  if (Conference.Venue && Conference.Venue.Wifi !== null) {
    Faqs.push({
      Question: 'Will there be wifi?',
      Answer: Conference.Venue.Wifi,
    })
  }

  Faqs.push({
    Question: 'Will childcare be available?',
    Answer: (
      <Fragment>
        <p>
          Unfortunately, childcare is <strong>sold out</strong> for {Conference.Name} {Conference.Instance}.
        </p>
        {/* <p>
          Yes! Childcare is available for the duration of the main conference and is free. You will be required to
          provide food for your child for the day if they are under 12. If you would like to book your child in then
          click the childcare link after purchasing your ticket. We will update this FAQ if we reach capacity.
        </p>
        <p>
          DDD Perth welcomes babies and their prams, and older children are also welcome to attend the conference.
          Please ensure all attendees are registered.
        </p> */}
      </Fragment>
    ),
    Category: 'tickets',
  })

  Faqs.push({
    Question: 'When does registration open?',
    Answer: (
      <Fragment>
        {dates.RegistrationOpen ? (
          <Fragment>
            Now! Go to <Link href="/tickets">the tickets page</Link> to register.
          </Fragment>
        ) : Conference.TicketPurchasingOptions === TicketPurchasingOptions.SoldOut ? (
          <Fragment>The conference is now sold out.</Fragment>
        ) : Conference.TicketPurchasingOptions === TicketPurchasingOptions.WaitListOpen ? (
          <Fragment>The conference has an open waitlist for tickets.</Fragment>
        ) : dates.RegistrationClosed ? (
          <Fragment>Ticket sales have closed.</Fragment>
        ) : (
          <Fragment>
            Registration opens on{' '}
            {formatInTimeZone(Conference.RegistrationOpenFrom, Conference.TimeZone, dates.DateDisplayFormat)} at{' '}
            {formatInTimeZone(Conference.RegistrationOpenFrom, Conference.TimeZone, dates.TimeDisplayFormat)}.
          </Fragment>
        )}
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'Can I pay by cheque, invoice, cash, Coinye West?',
    Answer: 'Payments can be made with credit card using Tito via our tickets page when registrations are open.',
    Category: 'tickets',
  })

  Faqs.push({
    Question: 'Can I cancel/give my ticket to someone else?',
    Answer: <Fragment>You are welcome to send someone else in your place. Please do this through Tito.</Fragment>,
    Category: 'tickets',
  })

  Faqs.push({
    Question: `What is the hashtag for ${Conference.Name}?`,
    Answer: (
      <Fragment>
        The Twitter hashtag is{' '}
        <SafeLink href={'https://twitter.com/search?q=%23' + Conference.HashTag} target="_blank">
          #{Conference.HashTag}
        </SafeLink>
        .
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'Will I be photographed or filmed?',
    Answer: (
      <Fragment>
        Media personnel authorised by {Conference.Name} will be in attendance. These media personnel will respect the
        photo policy as defined in the <Link href="/code-of-conduct#photo-policy">Code of Conduct</Link>.
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'I want to be involved. Can I help?',
    Answer: (
      <Fragment>
        We are always looking for volunteers and sometimes looking for organisers! It takes a lot of effort to organise
        a volunteer-run conference like {Conference.Name}. Shoot us an email at{' '}
        <a className="maillink" href={'mailto:' + Conference.ContactEmail}>
          {Conference.ContactEmail}
        </a>{' '}
        and we can work with you to figure out the best way to assist.
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'How can I contact the organisers?',
    Answer: (
      <Fragment>
        We can be contacted via email at{' '}
        <a className="maillink" href={'mailto:' + Conference.ContactEmail}>
          {Conference.ContactEmail}
        </a>
        {Conference.Socials.Twitter.Name !== null ? (
          <Fragment>
            {' '}
            and Twitter at{' '}
            <SafeLink href={'https://twitter.com/' + Conference.Socials.Twitter.Name} target="_blank">
              @{Conference.Socials.Twitter.Name}
            </SafeLink>
            . See also the other Social Media accounts at the footer of this page.
          </Fragment>
        ) : (
          '. Also, see our various social media accounts at the footer of this page.'
        )}
      </Fragment>
    ),
  })

  Faqs.push({
    Question: `How can I sponsor ${Conference.Name}?`,
    Answer: (
      <Fragment>
        {Conference.Name} will be heavily publicised in the community and we believe offers a unique marketing and
        recruiting opportunity based on being attended by people that don't normally get to go to conferences. It's also
        a great chance to give back and support the local software community. We have various levels of sponsorship
        available with various benefits and price points. We have a sponsorship prospectus that will be provided on
        request that explains detailed benefits and impact of sponsorship and the difference between the various levels;
        if you would like a copy{' '}
        <a className="maillink" href={'mailto:' + Conference.SponsorshipEmail}>
          please contact us
        </a>
        .
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'How can I go to this kind of thing more often?',
    AnswerWithoutParagraph: (
      <Fragment>
        <p>Perth has a very active software community. Consider attending one of the meetups/conferences such as:</p>
        <StyledList>
          <li>
            <SafeLink href="http://www.meetup.com/PerthDotNet/" target="_blank">
              Perth .NET
            </SafeLink>
          </li>
          <li>
            <SafeLink href="http://www.meetup.com/Perth-Cloud/" target="_blank">
              Perth MS Cloud Computing User Group
            </SafeLink>
          </li>
          <li>
            <SafeLink href="http://www.meetup.com/PerthFP/" target="_blank">
              Perth Functional Programmers
            </SafeLink>
          </li>
          <li>
            <SafeLink href="http://www.meetup.com/Agile-Perth/" target="_blank">
              Agile Perth
            </SafeLink>
          </li>
          <li>
            <SafeLink href="http://www.meetup.com/DevOps-Perth/" target="_blank">
              DevOps Perth
            </SafeLink>
          </li>
          <li>
            <SafeLink href="http://www.meetup.com/Front-End-Web-Developers-Perth/" target="_blank">
              Front End Web Developers Perth (Fenders)
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/perth-scrum-master-and-coaching-guild/" target="_blank">
              Perth Scrum Master and Agile Coaching Guild
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/sectalks-perth/" target="_blank">
              SecTalks Perth
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/perth-digital-transformation-group/" target="_blank">
              Digital Transformation Perth
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/amazon-web-services-user-group/" target="_blank">
              Perth AWS User Group
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/perth-ios/" target="_blank">
              Perth iOS Developers
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/producttank-perth/" target="_blank">
              ProductTank Perth
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/perth-iot-community/" target="_blank">
              Perth Internet of Things Community
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/perth-machine-learning-group/" target="_blank">
              Perth Machine Learning Group
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/perth-data-engineering-meetup/" target="_blank">
              Perth Data Engineering Meetup
            </SafeLink>
          </li>
          <li>
            <SafeLink href="http://www.witwa.org.au/" target="_blank">
              Women in Technology, WA
            </SafeLink>
          </li>
          <li>
            <SafeLink href="http://mixinconf.com/" target="_blank">
              Mixin conference
            </SafeLink>
          </li>
          <li>
            <SafeLink href="http://west.yowconference.com.au/" target="_blank">
              Yow! West conference
            </SafeLink>
          </li>
        </StyledList>
        <p>
          Furthermore, you can see an up to date list of Australian conferences at{' '}
          <SafeLink href="https://github.com/readify/devevents" target="_blank">
            Readify's DevEvents repository
          </SafeLink>
          .
        </p>
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'Who are the organisers?',
    AnswerWithoutParagraph: (
      <Fragment>
        <p>
          {Conference.Name} is organised by DDD WA Inc. a non-profit organisation set up to create inclusive events for
          the WA software community. {Conference.Name} {Conference.Instance} is organised by:
        </p>
        <StyledList>
          <li>
            <SafeLink href="https://www.linkedin.com/in/rebeccacwaters/" target="_blank">
              Rebecca Waters
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://twitter.com/amys_kapers" target="_blank">
              Amy Kapernick
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://twitter.com/mattyjward" target="_blank">
              Matt Ward
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://twitter.com/aidanjmorgan" target="_blank">
              Aidan Morgan
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://twitter.com/mzaatar" target="_blank">
              Mo Zaatar
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://twitter.com/robdcrowley" target="_blank">
              Rob Crowley
            </SafeLink>
          </li>
          <li>Ming Johanson</li>
          <li>Rob Chard</li>
          <li>Alex Colville</li>
          <li>
            <SafeLink href="https://twitter.com/eleusis7" target="_blank">
              Sham Chukoury
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://twitter.com/robdmoore" target="_blank">
              Rob Moore
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://twitter.com/antonjb" target="_blank">
              Anton Ball
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://twitter.com/battlepanda_au" target="_blank">
              David Schokker
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://twitter.com/Caiwrote" target="_blank">
              Cairo Malet
            </SafeLink>
          </li>
          <li>Nehal Ghuman</li>
          <li>Sarah McGeough</li>
          <li>
            <SafeLink href="https://twitter.com/meacod" target="_blank">
              David Meacock
            </SafeLink>
          </li>
          <li>Jamlek Ngaya</li>
          <li>Ellie Salimi</li>
          <li>Jett Soderlund-Jackson</li>
          <li>Meng Dunmow</li>
          <li>Marina de la Fuente</li>
          <li>Carla Marinescu</li>
          <li>
            <SafeLink href="https://twitter.com/al5848" target="_blank">
              Allen Azemia
            </SafeLink>
          </li>
          <li>Andrew Logan</li>
        </StyledList>
        <p>Furthermore, we have many others who volunteer and have assisted with organisation in the past</p>
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'Can I wear a face mask?',
    Answer: `Absolutely, we support any attendees who choose to wear a face mask on the day of the conference.`,
    Category: 'health',
  })

  Faqs.push({
    Question: 'Will you have sanitiser available at the conference?',
    Answer: `Yes! We'll have sanitising processes in place for all attendees on the day, and this includes providing hand sanitiser. However, we also encourage everyone to bring their own personal supply too, just in case!`,
    Category: 'health',
  })

  Faqs.push({
    Question: 'Why can’t I go to the talk I want?',
    AnswerWithoutParagraph: (
      <Fragment>
        <p>
          As part of our COVID restrictions, we have capacity limits in place for all of our speaker rooms which will be
          enforced at the door. This means that once a room is full, we can’t let anyone else in. If there’s a talk
          you’re desperate to see, we recommend getting to the room as early as you can to avoid disappointment and
          please be kind to those on the door, we guarantee they don’t enjoy having to turn people away.
        </p>
        <p>
          If you do miss something due to capacity limits, keep an eye out after the conference – we’ll be releasing
          recordings of all the talks so you’ll have the opportunity to catch up on anything you missed!
        </p>
      </Fragment>
    ),
    Category: 'health',
  })

  Faqs.push({
    Question: 'How are you managing COVID-19 guidelines and restrictions?',
    Answer: (
      <Fragment>
        Our <SafeLink href="/covid-policy">COVID-19 Policy</SafeLink> explains how we're adhering to WA Government
        guidelines, and our expectations for attendees to enjoy the conference safely and responsibly.
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'I don’t feel well, can I still come to the conference?',
    Answer: (
      <Fragment>
        We all know the drill by now – if you’re experiencing any cold or flu-like symptoms, please stay home and follow
        the WA government instructions regarding COVID testing. We will be livestreaming the conference, so you will be
        able to view the talks remotely, or tune into our{' '}
        <SafeLink href="https://www.youtube.com/c/DDDPerth">YouTube channel</SafeLink> later to view the recorded talks!
      </Fragment>
    ),
    Category: 'health',
  })

  Faqs.push({
    Question: 'How will the online conference differ from the in-person conference?',
    Answer: (
      <Fragment>
        <p>
          We intend on hosting an in-person conference, while at the same time making the talks accessible online via
          high quality livestreams. This should make it easier for those who can't make it to the venue on the day, for
          one reason or another. While we'll do our best to recreate the DDD Perth <em>vibe</em> as best as we can via
          the streams, there are some parts of the in-person experience that may be missing.
        </p>
        <p>What you can expect from the online experience:</p>
        <StyledList>
          <li>High quality, livestreamed talks from our speakers</li>
          <li>Breaks between talks so you’re not stuck in back to back sessions</li>
          <li>Live welcomes and prize draws from the DDD Perth committee</li>
          <li>Participation with attendees and speakers - online or offline - via the #DDDPerth hashtag</li>
        </StyledList>
        <p>What you might not see online:</p>
        <StyledList>
          <li>Sponsor booths and swag, along with networking opportunities and sponsor prizes</li>
          <li>Networking opportunities with fellow attendees and speakers, over a catered lunch, tea or coffee</li>
          <li>The ability to ask speakers questions live at the end of their talks</li>
          <li>Selfies at the media wall!</li>
        </StyledList>
      </Fragment>
    ),
    Category: 'online',
  })

  Faqs.push({
    Question: 'How do I access the online conference?',
    Answer: (
      <Fragment>
        You can access the online conference via a playlist on our{' '}
        <SafeLink href="https://www.youtube.com/c/DDDPerth">YouTube channel</SafeLink>
      </Fragment>
    ),
    Category: 'online',
  })

  Faqs.push({
    Question: 'What if I can’t attend the online conference?',
    Answer: `If you’re not able to attend the online conference, you’ll still get the chance to see our wonderful speakers! We’ll be releasing recordings of the talks online so you can watch them back later.`,
    Category: 'online',
  })

  Faqs.push({
    Question: 'Will talks be available online after the conference?',
    Answer: `Yes! We’ll be releasing recordings of the talks so you can catch up on anything you may have missed on the day.`,
    Category: 'online',
  })

  return Faqs
}
