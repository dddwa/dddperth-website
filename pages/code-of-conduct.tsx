import React, { Fragment } from 'react'
import { NextPage } from 'next'
import { StyledList, StyledPara } from 'components/global/text'
import withPageMetadata, { WithPageMetadataProps } from 'components/global/withPageMetadata'
import { PageWithSidebar } from 'layouts/withSidebar'
import { SafeLink } from 'components/global/safeLink'

const CodeOfConduct: NextPage<WithPageMetadataProps> = ({ pageMetadata }) => (
  <PageWithSidebar
    metadata={pageMetadata}
    title="Code of Conduct"
    description={`Code of Conduct for ${pageMetadata.conference.Name}.`}
  >
    <h1>Code of Conduct</h1>

    <h2>Purpose</h2>
    <StyledPara>
      {pageMetadata.conference.Name} is dedicated to providing a harassment-free conference experience for everyone,
      regardless of but not limited to: gender, gender identity and expression, sexual orientation, disability, physical
      appearance, body size, race, age or religion. We do not tolerate harassment of conference participants in any
      form. Sexual language and imagery is not appropriate anywhere. This applies to conference talks also.
    </StyledPara>

    <StyledPara>
      Conference participants or anyone interacting with the event violating these rules may be sanctioned or expelled
      from the conference without a refund at the discretion of the conference organisers.
    </StyledPara>

    <h2>Anti-harassment</h2>

    <StyledPara>Harassment includes, but is not limited to:</StyledPara>

    <StyledList>
      <li>
        Verbal or written comments that reinforce social structures of domination related to gender, gender identity and
        expression, sexual orientation, disability, physical appearance, body size, race, age, religion
      </li>
      <li>Sexual images in public spaces</li>
      <li>Deliberate intimidation, stalking, or following</li>
      <li>Harassing photography or recording</li>
      <li>Sustained disruption of talks or other events</li>
      <li>Inappropriate physical contact</li>
      <li>Unwelcome sexual attention</li>
      <li>Advocating for, or encouraging, any of the above behaviour</li>
    </StyledList>

    <h2>Need Help?</h2>

    <StyledPara>
      If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as possible. Conference
      staff can be identified by {pageMetadata.conference.Organiser.ShirtColour} event branded t-shirts and organiser
      name tags. Harassment and other Code of Conduct violations reduce the value of our event for everyone. We want you
      to be happy at our event. People like you make our event a better place. You can make a report either personally
      or anonymously.
    </StyledPara>

    <h3>Personal report</h3>

    <StyledPara>You can make a personal report by:</StyledPara>

    <StyledList>
      <li>
        Contacting a staff member, identified by {pageMetadata.conference.Organiser.ShirtColour} event branded t-shirts
        and organiser name tags
      </li>
      <li>
        <SafeLink
          href={`https://twitter.com/messages/compose?recipient_id=${pageMetadata.conference.Socials.Twitter.Id}`}
        >
          Sending a direct message to our Twitter account: {pageMetadata.conference.Socials.Twitter.Name}
        </SafeLink>
      </li>
      <li>
        Emailing us:{' '}
        <a href={`mailto:${pageMetadata.conference.Socials.Email}?subject=Code%20of%20Conduct%20Violation`}>
          {pageMetadata.conference.Socials.Email}
        </a>
      </li>
    </StyledList>

    <StyledPara>
      Emails and Twitter direct messages will be monitored by our media officer{' '}
      {pageMetadata.conference.MediaOfficerName} as well as select subset of the organising team.
    </StyledPara>

    <StyledPara>
      When taking a personal report, <a href={pageMetadata.conference.Organiser.Url}>our staff</a> will ensure you are
      safe and cannot be overheard. They may involve other event staff to ensure your report is managed properly. Once
      safe, we'll ask you to tell us about what happened. This can be upsetting, but we'll handle it as respectfully as
      possible, and you can bring someone to support you. You won't be asked to confront anyone and we won't tell anyone
      who you are.
    </StyledPara>

    <StyledPara>
      Our team will be happy to help you contact hotel/venue security, local law enforcement, local support services,
      provide escorts, or otherwise assist you to feel safe for the duration of the event. We value your attendance.
    </StyledPara>

    <h3>Anonymous report</h3>

    <StyledPara>
      You can <a href={pageMetadata.conference.AnonymousReportFormUrl}>make an anonymous report here</a>. We can't
      follow up an anonymous report with you directly, but we will fully investigate it and take whatever action is
      necessary to prevent a recurrence.
    </StyledPara>

    <h3>Important contact numbers</h3>

    <StyledList>
      <li>
        <strong>Police:</strong>{' '}
        <SafeLink href={pageMetadata.conference.ImportantContacts.Police.MapUrl}>
          {pageMetadata.conference.ImportantContacts.Police.Details}
        </SafeLink>
        {pageMetadata.conference.ImportantContacts.Police.Phone && (
          <Fragment>
            {' '}
            <strong>Phone:</strong>{' '}
            <a href={`tel:${pageMetadata.conference.ImportantContacts.Police.Phone}`}>
              {pageMetadata.conference.ImportantContacts.Police.Phone}
            </a>
          </Fragment>
        )}
      </li>
      <li>
        <strong>Centre Against Sexual Assault:</strong>{' '}
        {pageMetadata.conference.ImportantContacts.CentreAgainstSexualAssault.Details}
        {pageMetadata.conference.ImportantContacts.CentreAgainstSexualAssault.Phone && (
          <Fragment>
            {' '}
            <strong>Phone:</strong>{' '}
            <a href={`tel:${pageMetadata.conference.ImportantContacts.CentreAgainstSexualAssault.Phone}`}>
              {pageMetadata.conference.ImportantContacts.CentreAgainstSexualAssault.Phone}
            </a>
          </Fragment>
        )}
      </li>
      <li>
        <strong>Emergency Medical:</strong>{' '}
        <a href={pageMetadata.conference.ImportantContacts.EmergencyMedical.MapUrl}>
          {pageMetadata.conference.ImportantContacts.EmergencyMedical.Details}
        </a>
        {pageMetadata.conference.ImportantContacts.EmergencyMedical.Phone && (
          <Fragment>
            {' '}
            <strong>Phone:</strong>{' '}
            <a href={`tel:${pageMetadata.conference.ImportantContacts.EmergencyMedical.Phone}`}>
              {pageMetadata.conference.ImportantContacts.EmergencyMedical.Phone}
            </a>
          </Fragment>
        )}
      </li>
      <li>
        <strong>Non Emergency Medical:</strong>{' '}
        <a href={pageMetadata.conference.ImportantContacts.NonEmergencyMedical.MapUrl}>
          {pageMetadata.conference.ImportantContacts.NonEmergencyMedical.Details}
        </a>
        {pageMetadata.conference.ImportantContacts.NonEmergencyMedical.Phone && (
          <Fragment>
            {' '}
            <strong>Phone:</strong>{' '}
            <a href={`tel:${pageMetadata.conference.ImportantContacts.NonEmergencyMedical.Phone}`}>
              {pageMetadata.conference.ImportantContacts.NonEmergencyMedical.Phone}
            </a>
          </Fragment>
        )}
      </li>
    </StyledList>

    <h2>Enforcement</h2>

    <StyledPara>Participants asked to stop any harassing behaviour are expected to:</StyledPara>

    <StyledList>
      <li>
        Listen to the complaint with an open mind and consider the effect rather than intent of the behaviour in
        question
      </li>
      <li>Not be dismissive of the complainant</li>
      <li>Understand any advice given on how to act in the future</li>
      <li>Comply with the directions of the {pageMetadata.conference.Name} organisers</li>
    </StyledList>

    <StyledPara>
      If a participant engages in harassing behaviour, event organisers retain the right to take any actions to keep the
      event a welcoming environment for all participants. This includes warning the offender or expulsion from the
      conference with no refund.
    </StyledPara>

    <StyledPara>
      Event organisers may take action to redress anything designed to, or with the clear impact of, disrupting the
      event or making the environment hostile for any participants.{' '}
      <strong>
        We expect participants to follow these rules at all event venues, event-related social activities as well as
        social media.
      </strong>
    </StyledPara>

    <h2>Inclusivity</h2>

    <StyledPara>
      In our commitment to a harassment-free and inclusive environment we strongly believe it's important to pay
      attention to harmful language patterns.
    </StyledPara>

    <h3>Ableism</h3>

    <StyledPara>
      Words like "crazy", "dumb", "insane" or "lame" are examples of <strong>ableist language</strong>, devaluating
      people who have physical or mental disabilities. Its appearance often stems not from any intentional desire to
      offend, but from our innate sense of what it means to be normal. These words can be avoided by using more fitting,
      clearer descriptions of what we intend to communicate.
    </StyledPara>

    <StyledPara>
      To find out more about ableism and replacement terms please read{' '}
      <SafeLink href="https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html">this guide</SafeLink>.
    </StyledPara>

    <h3>Sexism</h3>

    <StyledPara>
      Using gendered terms like "dude" or "guys" to address a mixed-gendered group of people contributes to furthering
      exclusion of underrepresented individuals. We strongly advise avoiding gendered pronouns as well as gendered
      terms.
    </StyledPara>

    <StyledPara>
      For more information please familiarise yourself with{' '}
      <SafeLink href="http://geekfeminism.wikia.com/wiki/Nonsexist_language">Geek Feminism wiki guide</SafeLink>.
    </StyledPara>

    <h3 id="photo-policy">Photo Policy</h3>

    <StyledPara>
      We will have colored lanyards for attendees to indicate their comfort level with being photographed:
    </StyledPara>

    <StyledList>
      <li>
        <strong>Black:</strong> fine to photograph
      </li>
      <li>
        <strong>Red:</strong> do not photograph
      </li>
    </StyledList>

    <StyledPara>In case of any doubt, please ask before taking photographs of attendees, speakers or staff.</StyledPara>

    <h2>Attribution</h2>

    <StyledPara>
      This Code of Conduct was based on{' '}
      <SafeLink href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">
        The Geek Feminism wiki
      </SafeLink>
      , the work of{' '}
      <SafeLink href="https://frameshiftconsulting.com/code-of-conduct-training/">Valerie Aurora</SafeLink>, the JSConf
      AU Code of Conduct, the{' '}
      <SafeLink href="https://www.levelsconf.com/codeofconduct.html">Levels Conference Code of Conduct</SafeLink>, and
      the <SafeLink href="http://confcodeofconduct.com/">Conference Code of Conduct</SafeLink>
    </StyledPara>

    <StyledPara>Last update: June 7, 2020</StyledPara>
  </PageWithSidebar>
)
CodeOfConduct.displayName = 'CodeOfConduct'

export default withPageMetadata(CodeOfConduct)
