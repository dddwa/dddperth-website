import { Main } from 'layouts/main'
import { StyledList, Text } from 'components/global/text'
import { GetServerSideProps } from 'next'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'
import { SafeLink } from 'components/global/safeLink'

type PrivacyProps = {
  conferenceName: 'string'
}

export default function Privacy({ conferenceName }: PrivacyProps) {
  return (
    <Main title="Privacy Policy" description={`${conferenceName} privacy policy`}>
      <Text tag="h1">Privacy Policy</Text>

      <Text>
        <strong>DDD WA Inc.</strong> is committed to providing quality services to you and this policy outlines our
        ongoing obligations to you in respect of how we manage your Personal Information. We have adopted the Australian
        Privacy Principles(APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The APPs govern the way in
        which we collect, use, disclose, store, secure and dispose of your Personal Information.
      </Text>

      <Text>
        A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian
        Information Commissioner at <SafeLink href="https://www.oaic.gov.au/">www.oaic.gov.au</SafeLink>
      </Text>

      <Text tag="h2">What is Personal Information and why do we collect it?</Text>

      <Text>
        Personal Information is information that identifies an individual. In the course of your visits to our website
        or use of our products and services, we may obtain the following information about you: name, company name,
        email address, telephone number, credit card details, billing address, geographic location, IP address, survey
        responses, support queries, blog comments and social media handles (together 'Personal Information').
      </Text>

      <Text>
        We collect your Personal Information for the primary purpose of providing our services to you, including
        communicating with you, providing technical support, notifying you of updates and offers, sharing useful
        content, measuring customer satisfaction, diagnosing problems and providing you with a personalised website or
        conference experience.
      </Text>

      <Text>
        We also collect Non-Personally Identifiable Information in aggregated and anonymised forms to improve our
        services, including administering our website, producing reports and analytics, advertising our products and
        services, identifying user demands and assisting in meeting customer needs generally.
      </Text>

      <Text tag="h2">How is this information collected?</Text>
      <Text>
        Personal Information is collected when you register to attend a DDD WA Inc. event, submit a talk proposal to DDD
        Perth, vote on talks you'd like to see at DDD Perth, apply for a DDD WA Inc. competition/program, or subscribe
        to our email newsletter via this website.
      </Text>

      <Text tag="h2">Third Parties</Text>
      <Text>
        Your Personal Information is accessible only by DDD WA Inc. members and volunteers, and we will respect and
        protect your privacy as set out in this Privacy Policy. We will share your personal data with third parties only
        in the ways that are described in this Privacy Policy – and do not and will not sell your personal data.
      </Text>

      <Text>
        DDD WA Inc. shares your personal data with third parties only with your express consent or under another lawful
        basis for processing. We share your data with vendors such as host and cloud service providers, marketing and
        mailing agencies, for the purposes of improving our communications with you.
      </Text>

      <Text>
        DDDWA Inc. relies on certain third party services as part of our service offering to you. These third party
        services operate under their own privacy policies which you should review, understand and consent to separately
        from this policy. This policy does not endorse nor incorporate policies maintained by third party services.
      </Text>

      <Text>
        All payments are processed by third parties such as Tito and Stripe. DDD WA Inc. does not have access or
        visibility to credit card numbers,and these are not stored by DDD WA Inc.
      </Text>

      <Text tag="h2">Links to Other Websites</Text>
      <Text>
        This website may contain links to other websites. These links are meant for your convenience only. Links to
        third party websites do not constitute sponsorship or endorsement or approval of these websites. Please be aware
        that we are not responsible for the privacy practices of such other websites. We encourage our users to be
        aware, when they leave our website, to read the privacy statements of each and every website that collects
        personally identifiable information. This privacy policy applies solely to information collected by this
        website.
      </Text>

      <Text tag="h2">Disclosure of Personal Information</Text>
      <Text>Your Personal Information may be disclosed ina number of circumstances including the following:</Text>
      <StyledList>
        <li>Third parties where you consent to the use or disclosure; and</li>
        <li>Where required or authorised by law.</li>
      </StyledList>

      <Text>
        If there is a change of control in our organisation (whether by merger, sale, transfer of assets or otherwise),
        customer information, which may include your Personal Data, could be transferred to a purchaser under a
        confidentiality agreement. We would only disclose your Personal Data in good faith and where required by any of
        the above circumstances.
      </Text>

      <Text tag="h2">Security of Personal Information</Text>
      <Text>
        Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from
        unauthorized access, modification or disclosure.
      </Text>

      <Text>
        When your Personal Information is no longer needed for the purpose for which it was obtained, we will take
        reasonable steps to destroy or permanently de-identify your Personal Information. However, most of the Personal
        Information is or will be stored in client files which will be kept by us for a minimum of 7 years
      </Text>

      <Text tag="h2">Access to your Personal Information</Text>
      <Text>
        You may access the Personal Information we hold about you and to update and/or correct it, subject to certain
        exceptions. If you wish to access your Personal Information, please contact us in writingat info@dddperth.com
      </Text>

      <Text>
        DDD WA Inc.will not charge any fee for your access request, but may charge an administrative fee for providing a
        copy of your Personal Information.
      </Text>

      <Text>
        In order to protect your Personal Information we may require identification from you before releasing the
        requested information.
      </Text>

      <Text tag="h2">Maintaining the Quality of your Personal Information</Text>
      <Text>
        It is an important to us that your Personal Information is up to date. We will take reasonable steps to make
        sure that your Personal Information is accurate, complete and up-to-date. If you find that the information we
        have is not up to date or is inaccurate, please advise us as soon as practicable at info@dddperth.com so we can
        update our records and ensure we can continue to provide quality services to you.
      </Text>

      <Text>
        You can unsubscribe from our newsletters by clicking the Unsubscribe link at the bottom of the emails you
        receive from us.
      </Text>

      <Text tag="h2">Policy Updates</Text>
      <Text>
        As we plan to ensure our privacy policy remains current, this policy is subject to change. We may modify this
        policy at any time, at our sole discretion and all modifications will be effective immediately upon our posting
        of the modifications on this website. Please return periodically to review our privacy policy.
      </Text>

      <Text tag="h2">Privacy Policy Complaints and Enquiries</Text>
      <Text>If you have any queries or complaints about our Privacy Policy please contact us atinfo@dddperth.com</Text>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { conference } = getCommonServerSideProps(context)

  return {
    props: {
      conferenceName: conference.Name,
    },
  }
}
