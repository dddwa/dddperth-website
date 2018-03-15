import * as React from 'react'
import { withPageMetadata } from '../components/global/withPageMetadata'
import Conference from '../config/conference'
import Page from '../layouts/withSidebar'

export default withPageMetadata(() => (
    <Page title="Code of Conduct" description={'Code of Conduct for ' + Conference.Name + '.'}>
        <h1>Code of Conduct</h1>

        <p>
            All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following
            code of conduct. We are expecting cooperation from all participants to help ensuring a safe, welcoming and
            inclusive environment for everybody.
        </p>

        <p
            style={{
                fontSize: '150%',
                textAlign: 'center',
                textDecoration: 'underline',
            }}
        >
            <strong>Organisers will enforce this code throughout the event.</strong>
        </p>

        <h2>Need Help?</h2>
        <p>
            Email <a href={Conference.ContactEmail}>{Conference.ContactEmail}</a> or call{' '}
            {Conference.EmergencyPhoneNumber}.
        </p>

        <h2>The Quick Version</h2>
        <p>
            Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of
            gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size,
            race, ethnicity, or religion (or lack thereof). We do not tolerate harassment of conference participants in
            any form. Sexual language and imagery is not appropriate for any conference venue, including talks,
            workshops, parties, Twitter and other online media. Conference participants violating these rules may be
            sanctioned or expelled from the conference <em>without a refund</em> at the discretion of the conference
            organisers.
        </p>

        <h2>The Less Quick Version</h2>
        <p>
            Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual
            orientation, disability, physical appearance, body size, race, ethnicity, religion, sexual images in public
            spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained
            disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.
        </p>
        <p>Participants asked to stop any harassing behavior are expected to comply immediately.</p>
        <p>
            Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised
            images, activities, or other material. Booth staff (including volunteers) should not use sexualised
            clothing/uniforms/costumes, or otherwise create a sexualised environment.
        </p>
        <p>
            If a participant engages in harassing behavior, the conference organisers may take any action they deem
            appropriate, including warning the offender or expulsion from the conference with no refund.
        </p>
        <p>
            If you are being harassed, notice that someone else is being harassed, or have any other concerns, please
            contact a member of conference staff immediately. Conference staff can be identified as they&#39;ll be
            wearing branded t-shirts.
        </p>
        <p>
            Conference staff will be happy to help participants contact hotel/venue security or local law enforcement,
            provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the
            conference. We value your attendance.
        </p>
        <p>
            We expect participants to follow these rules at conference and workshop venues and conference-related social
            events.
        </p>

        <h3>Attendance Is At Your Own Risk</h3>
        <p>
            Attendance at {Conference.Name} is at your own risk and by entering {Conference.Name} you agree not to hold{' '}
            {Conference.Name}, it’s organisers ({Conference.Organiser}), partners, subsidiaries or parent companies
            liable for any damage or distress incurred at the event.
        </p>

        <p>
            <small>
                <em>
                    Original source and credit:{' '}
                    <a href="http://2012.jsconf.us/#/about">{'http://2012.jsconf.us/#/about'}</a> &amp;{' '}
                    <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">
                        The Ada Initiative
                    </a>
                    <br />
                    Please help by translating or improving:{' '}
                    <a href="https://github.com/leftlogic/confcodeofconduct.com">
                        {'http://github.com/leftlogic/confcodeofconduct.com'}
                    </a>
                    <br />
                    This work is licensed under a{' '}
                    <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">
                        Creative Commons Attribution 3.0 Unported License
                    </a>
                    <br />
                    "Attendance Is At Your Own Risk" section has been additionally added to the licensed "Conference
                    Code of Conduct".
                </em>
            </small>
        </p>
    </Page>
))
