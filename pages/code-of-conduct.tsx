import React from 'react'
import { NextPage } from 'next'
import { StyledList, Text } from 'components/global/text'
import { PageWithSidebar } from 'layouts/withSidebar'
import { SafeLink } from 'components/global/safeLink'
import { useConfig } from 'Context/Config'

const CodeOfConduct: NextPage = () => {
  const { conference } = useConfig()

  return (
    <PageWithSidebar title="Code of Conduct" description={`Code of Conduct for ${conference.Name}.`}>
      <h1>Code of Conduct</h1>

      <h2>Purpose</h2>
      <Text>
        {conference.Name} is dedicated to providing a harassment-free experience for everyone, regardless of gender,
        gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age,
        religion or other characteristic. We do not tolerate harassment in any form and the use of sexual language and
        imagery is not appropriate anywhere. Conference participants, members or anyone interacting with the event or
        organisation violating these rules may be sanctioned or expelled from the conference and/or organisation without
        a refund at the discretion of the conference organisers.
      </Text>

      <h2>Anti-harassment</h2>
      <Text>Harassment includes, but is not limited to: </Text>

      <StyledList>
        <li>
          Verbal or written comments that reinforce social structures of domination related but not exclusive to gender,
          gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age,
          religion
        </li>
        <li>Sexual images in public spaces</li>
        <li>Deliberate intimidation, stalking, or following</li>
        <li>Harassing photography or recording</li>
        <li>Sustained disruption of talks or other events</li>
        <li>Inappropriate or unwanted physical contact</li>
        <li>Unwelcome sexual attention</li>
        <li>Advocating for, or encouraging any of the above behaviour</li>
      </StyledList>

      <h2>Inclusivity</h2>
      <Text>
        In our commitment to a harassment-free and inclusive environment we strongly believe it's important to pay
        attention to harmful language patterns.
      </Text>

      <h2>Ableism</h2>
      <Text>
        Words like "crazy", "dumb", "insane" or "lame" are examples of <strong>ableist language</strong>, devaluing
        people who have physical or mental disabilities or different needs. Its appearance often stems not from any
        intentional desire to offend, but from existing cultural language patterns which reflect a specific definition
        of what it means to be "normal". These words can be avoided by using more fitting, clearer descriptions of what
        we intend to communicate.
      </Text>
      <Text>
        To find out more about ableism and replacement terms please read{' '}
        <SafeLink href="https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html">this guide</SafeLink>.
      </Text>

      <h2>Sexism</h2>
      <Text>
        Using gendered terms like "dude" or "guys" to address a mixed-gendered group of people contributes to furthering
        exclusion of underrepresented individuals. We strongly advise avoiding gendered pronouns as well as gendered
        terms.
      </Text>
      <Text>
        For more information please familiarise yourself with{' '}
        <SafeLink href="http://geekfeminism.wikia.com/wiki/Nonsexist_language">Geek Feminism wiki guide</SafeLink>.
      </Text>

      <h2>Need Help?</h2>
      <Text>
        If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as possible.{' '}
        {conference.Name}
        committee members and trained volunteers can be identified by branded t-shirts and organiser name tags.
        Harassment and other Code of Conduct violations reduce the value of our events for everyone. We want you to be
        happy and safe at our events. People like you make our event a better place. You can make a report either
        personally or anonymously.
      </Text>

      <h2>Personal report</h2>
      <Text>You can make a personal report by: </Text>
      <StyledList>
        <li>
          Contacting a {conference.Name} committee member or trained team member, identified by branded t-shirts and
          organiser name tags
        </li>
        <li>
          <SafeLink href={`https://twitter.com/messages/compose?recipient_id=${conference.Socials.Twitter.Id}`}>
            Sending a direct message to our Twitter account: {conference.Socials.Twitter.Name}
          </SafeLink>
        </li>
        <li>
          Emailing us:{' '}
          <SafeLink href={`mailto:${conference.Socials.Email}?subject=Code%20of%20Conduct%20Violation`}>
            {conference.Socials.Email}
          </SafeLink>
        </li>
      </StyledList>

      <Text>
        Emails and Twitter direct messages will be monitored by our media officers as well as select subset of the
        organising team.
      </Text>
      <Text>
        When taking a personal report, <SafeLink href={conference.Organiser.Url}>our team</SafeLink> will ensure you are
        safe and cannot be overheard. They may involve other event staff to ensure your report is managed properly. Once
        safe, we'll ask you to tell us about what happened. This can be upsetting, but we'll handle it as respectfully
        as possible, and you can bring someone to support you. You won't be asked to confront anyone and we won't tell
        anyone who you are.
      </Text>
      <Text>
        Our team will be happy to help you contact venue security, local law enforcement, local support services,
        provide escorts, or otherwise assist you to feel safe for the duration of the event. We value your attendance
        and participation at {conference.Name} events and in the community.
      </Text>

      <h2>Anonymous report</h2>
      <Text>
        You can
        <SafeLink href={conference.AnonymousReportFormUrl}> make an anonymous report here</SafeLink>. We can't follow up
        an anonymous report with you directly, but we will fully investigate it and take whatever action is necessary to
        prevent a recurrence.
      </Text>
      <h2>Important contact numbers</h2>

      <StyledList>
        <li>
          <strong>Police:</strong>{' '}
          <SafeLink href={conference.ImportantContacts.Police.MapUrl}>
            {conference.ImportantContacts.Police.Details}
          </SafeLink>
          {conference.ImportantContacts.Police.Phone && (
            <>
              {' '}
              <strong>Phone:</strong>{' '}
              <a href={`tel:${conference.ImportantContacts.Police.Phone}`}>
                {conference.ImportantContacts.Police.Phone}
              </a>
            </>
          )}
        </li>
        <li>
          <strong>Centre Against Sexual Assault:</strong>{' '}
          {conference.ImportantContacts.CentreAgainstSexualAssault.Details}
          {conference.ImportantContacts.CentreAgainstSexualAssault.Phone && (
            <>
              {' '}
              <strong>Phone:</strong>{' '}
              <SafeLink href={`tel:${conference.ImportantContacts.CentreAgainstSexualAssault.Phone}`}>
                {conference.ImportantContacts.CentreAgainstSexualAssault.Phone}
              </SafeLink>
            </>
          )}
        </li>
        <li>
          <strong>Emergency Medical:</strong>{' '}
          <SafeLink href={conference.ImportantContacts.EmergencyMedical.MapUrl}>
            {conference.ImportantContacts.EmergencyMedical.Details}
          </SafeLink>
          {conference.ImportantContacts.EmergencyMedical.Phone && (
            <>
              {' '}
              <strong>Phone:</strong>{' '}
              <SafeLink href={`tel:${conference.ImportantContacts.EmergencyMedical.Phone}`}>
                {conference.ImportantContacts.EmergencyMedical.Phone}
              </SafeLink>
            </>
          )}
        </li>
        <li>
          <strong>Non Emergency Medical:</strong>{' '}
          <SafeLink href={conference.ImportantContacts.NonEmergencyMedical.MapUrl}>
            {conference.ImportantContacts.NonEmergencyMedical.Details}
          </SafeLink>
          {conference.ImportantContacts.NonEmergencyMedical.Phone && (
            <>
              {' '}
              <strong>Phone:</strong>{' '}
              <SafeLink href={`tel:${conference.ImportantContacts.NonEmergencyMedical.Phone}`}>
                {conference.ImportantContacts.NonEmergencyMedical.Phone}
              </SafeLink>
            </>
          )}
        </li>
      </StyledList>

      <h2>Enforcement</h2>
      <Text>Participants asked to stop any harassing behaviour are expected to: </Text>
      <StyledList>
        <li>
          Listen to the complaint with an open mind and consider the effect rather than intent of the behaviour in
          question
        </li>
        <li>Not be dismissive of the complaint</li>
        <li>Understand any advice given on how to act in the future</li>
        <li>Comply with the directions of the {conference.Name} organisers</li>
      </StyledList>
      <Text>
        The {conference.Name} committee may take action to redress anything designed to, or with the clear impact of,
        disrupting events or making the environment hostile for any participants or attendees. We expect participants,
        attendees and members to follow this Code of Conduct at all {conference.Name} events, venues, event-related
        social activities as well as social media.
      </Text>

      <Text>
        If an attendee, member or participant engages in harassing behaviour, event organisers retain the right to take
        any actions to keep {conference.Name} events a welcoming environment for all participants. This includes warning
        the offender, expulsion from the conference, event and/or organisation with no refund or refusal of entry to
        future events.
      </Text>

      <h2 id="photo-policy">Photo Policy</h2>
      <Text>We will have coloured lanyards for attendees to indicate their comfort level with being photographed:</Text>
      <StyledList>
        <li>
          <strong>Black:</strong> fine to photograph
        </li>
        <li>
          <strong>Red:</strong> do not photograph
        </li>
      </StyledList>
      <Text>
        In case of any doubt, please ask before taking photographs of attendees, speakers or {conference.Name} team
        members.
      </Text>

      <h2>Attribution</h2>
      <Text>
        This Code of Conduct was based on{' '}
        <SafeLink href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">
          The Geek Feminism wiki
        </SafeLink>
        , the work of{' '}
        <SafeLink href="https://frameshiftconsulting.com/code-of-conduct-training/">Valerie Aurora</SafeLink>, the
        JSConf AU Code of Conduct, the{' '}
        <SafeLink href="https://www.levelsconf.com/codeofconduct.html">Levels Conference Code of Conduct</SafeLink>, and
        the <SafeLink href="http://confcodeofconduct.com/">Conference Code of Conduct</SafeLink>
      </Text>

      <Text>Last update: June 6, 2023</Text>
    </PageWithSidebar>
  )
}

export default CodeOfConduct
