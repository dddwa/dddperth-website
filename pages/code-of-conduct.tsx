import React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page
    pageMetadata={props.pageMetadata}
    title="Code of Conduct"
    description={'Code of Conduct for ' + props.pageMetadata.conference.Name + '.'}
  >
    <h1>Code of Conduct</h1>

    <h2>Purpose</h2>
    <p>
      {props.pageMetadata.conference.Name} is dedicated to providing a harassment-free conference experience for
      everyone, regardless of but not limited to: gender, gender identity and expression, sexual orientation,
      disability, physical appearance, body size, race, age or religion. We do not tolerate harassment of conference
      participants in any form. Sexual language and imagery is not appropriate anywhere. This applies to conference
      talks also.
    </p>

    <p>
      Conference participants or anyone interacting with the event violating these rules may be sanctioned or expelled
      from the conference without a refund at the discretion of the conference organisers.
    </p>

    <h2>Anti-harassment</h2>

    <p>Harassment includes, but is not limited to:</p>

    <ul>
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
    </ul>

    <h2>Need Help?</h2>

    <p>
      If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as possible. Conference
      staff can be identified by {props.pageMetadata.conference.Organiser.ShirtColour} event branded t-shirts and
      organiser name tags. Harassment and other Code of Conduct violations reduce the value of our event for everyone.
      We want you to be happy at our event. People like you make our event a better place. You can make a report either
      personally or anonymously.
    </p>

    <h3>Personal report</h3>

    <p>You can make a personal report by:</p>

    <ul>
      <li>
        Contacting a staff member, identified by {props.pageMetadata.conference.Organiser.ShirtColour} event branded
        t-shirts and organiser name tags
      </li>
      <li>
        <a
          href={`https://twitter.com/messages/compose?recipient_id=${props.pageMetadata.conference.Socials.Twitter.Id}`}
        >
          Sending a direct message to our Twitter account: {props.pageMetadata.conference.Socials.Twitter.Name}
        </a>
      </li>
      <li>
        Emailing us:{' '}
        <a
          className="maillink"
          href={`mailto:${props.pageMetadata.conference.Socials.Email}?subject=Code%20of%20Conduct%20Violation`}
        >
          {props.pageMetadata.conference.Socials.Email}
        </a>
      </li>
    </ul>

    <p>
      Emails and Twitter direct messages will be monitored by our media officer{' '}
      {props.pageMetadata.conference.MediaOfficerName} as well as select subset of the organising team.
    </p>

    <p>
      When taking a personal report, <a href={props.pageMetadata.conference.Organiser.Url}>our staff</a> will ensure you
      are safe and cannot be overheard. They may involve other event staff to ensure your report is managed properly.
      Once safe, we'll ask you to tell us about what happened. This can be upsetting, but we'll handle it as
      respectfully as possible, and you can bring someone to support you. You won't be asked to confront anyone and we
      won't tell anyone who you are.
    </p>

    <p>
      Our team will be happy to help you contact hotel/venue security, local law enforcement, local support services,
      provide escorts, or otherwise assist you to feel safe for the duration of the event. We value your attendance.
    </p>

    <h3>Anonymous report</h3>

    <p>
      You can <a href={props.pageMetadata.conference.AnonymousReportFormUrl}>make an anonymous report here</a>. We can't
      follow up an anonymous report with you directly, but we will fully investigate it and take whatever action is
      necessary to prevent a recurrence.
    </p>

    <h3>Important contact numbers</h3>

    <ul>
      <li>
        <strong>Police:</strong>{' '}
        <a href={props.pageMetadata.conference.ImportantContacts.Police.MapUrl}>
          {props.pageMetadata.conference.ImportantContacts.Police.Details}
        </a>
      </li>
      <li>
        <strong>Centre Against Sexual Assault 24 hour line:</strong>{' '}
        {props.pageMetadata.conference.ImportantContacts.CentreAgainstSexualAssault.Details}
      </li>
      <li>
        <strong>Emergency Medical:</strong>{' '}
        <a href={props.pageMetadata.conference.ImportantContacts.EmergencyMedical.MapUrl}>
          {props.pageMetadata.conference.ImportantContacts.EmergencyMedical.Details}
        </a>
      </li>
      <li>
        <strong>Non Emergency Medical:</strong>{' '}
        <a href={props.pageMetadata.conference.ImportantContacts.NonEmergencyMedical.MapUrl}>
          {props.pageMetadata.conference.ImportantContacts.NonEmergencyMedical.Details}
        </a>
      </li>
    </ul>

    <h2>Enforcement</h2>

    <p>Participants asked to stop any harassing behaviour are expected to:</p>

    <ul>
      <li>
        Listen to the complaint with an open mind and consider the effect rather than intent of the behaviour in
        question
      </li>
      <li>Not be dismissive of the complainant</li>
      <li>Understand any advice given on how to act in the future</li>
      <li>Comply with the directions of the {props.pageMetadata.conference.Name} organisers</li>
    </ul>

    <p>
      If a participant engages in harassing behaviour, event organisers retain the right to take any actions to keep the
      event a welcoming environment for all participants. This includes warning the offender or expulsion from the
      conference with no refund.
    </p>

    <p>
      Event organisers may take action to redress anything designed to, or with the clear impact of, disrupting the
      event or making the environment hostile for any participants.{' '}
      <strong>
        We expect participants to follow these rules at all event venues, event-related social activities as well as
        social media.
      </strong>
    </p>

    <h2>Inclusivity</h2>

    <p>
      In our commitment to a harassment-free and inclusive environment we strongly believe it's important to pay
      attention to harmful language patterns.
    </p>

    <h3>Ableism</h3>

    <p>
      Words like "crazy", "dumb", "insane" or "lame" are examples of <strong>ableist language</strong>, devaluating
      people who have physical or mental disabilities. Its appearance often stems not from any intentional desire to
      offend, but from our innate sense of what it means to be normal. These words can be avoided by using more fitting,
      clearer descriptions of what we intend to communicate.
    </p>

    <p>
      To find out more about ableism and replacement terms please read{' '}
      <a href="https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html">this guide</a>.
    </p>

    <h3>Sexism</h3>

    <p>
      Using gendered terms like "dude" or "guys" to address a mixed-gendered group of people contributes to furthering
      exclusion of underrepresented individuals. We strongly advise avoiding gendered pronouns as well as gendered
      terms.
    </p>

    <p>
      For more information please familiarise yourself with{' '}
      <a href="http://geekfeminism.wikia.com/wiki/Nonsexist_language">Geek Feminism wiki guide</a>.
    </p>

    <h3 id="photo-policy">Photo Policy</h3>

    <p>We will have colored lanyards for attendees to indicate their comfort level with being photographed:</p>

    <ul>
      <li>
        <strong>Black:</strong> fine to photograph
      </li>
      <li>
        <strong>Red:</strong> do not photograph
      </li>
    </ul>

    <p>In case of any doubt, please ask before taking photographs of attendees, speakers or staff.</p>

    <h2>Attribution</h2>

    <p>
      This Code of Conduct was based on{' '}
      <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">The Geek Feminism wiki</a>, the
      work of <a href="https://frameshiftconsulting.com/code-of-conduct-training/">Valerie Aurora</a>, the{' '}
      <a href="https://2018.jsconfau.com/code-of-conduct">JSConf AU Code of Conduct</a>, the{' '}
      <a href="https://www.levelsconf.com/codeofconduct.html">Levels Conference Code of Conduct</a>, and the{' '}
      <a href="http://confcodeofconduct.com/">Conference Code of Conduct</a>
    </p>

    <p>Last update: 30 Apr 2018</p>
  </Page>
))
