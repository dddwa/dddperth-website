import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page pageMetadata={props.pageMetadata} title="About" description="The goal and history of DDD Adelaide">
    <h1>About DDD Adelaide</h1>
    <p>
      {props.pageMetadata.conference.TagLine}. {props.pageMetadata.conference.Goal} We do this by:
    </p>
    <ul>
      <li>Making the ticket price as low as possible ({props.pageMetadata.conference.TicketPrice})</li>
      <li>Running the event on a Saturday</li>
      <li>Allowing anyone to submit about any software industry related topic</li>
      <li>Having a democratically chosen agenda</li>
      <li>Focussing on creating a safe and inclusive environment where everyone is welcome</li>
    </ul>
    <p className="text-center">
      <img src="/static/images/logo.png" alt="DDD Adelaide logo" style={{ width: '250px' }} />
    </p>
    <h2>What do we do with the money we raise?</h2>
    <p>
      DDD Adelaide is supported by DDD WA Inc., a non-profit association. All funds raised as part of running DDD
      Adelaide are used for:
    </p>
    <ul>
      <li>Running current, or future, DDD Adelaide events</li>
      <li>
        Sponsoring events or meetup groups in the SA and WA software industry that align to the purpose and goals of DDD
        Adelaide
      </li>
      <li>Other activities that contribute to the SA and WA software industry and align to our purpose and goals</li>
    </ul>
    <h2>What does DDD stand for?</h2>
    <p>
      DDD Adelaide is a part of the Developer! Developer! Developer! series of events, focussed on providing a forum for
      all people involved in the creation of software in South Australia to get together and share their experiences and
      stories.
    </p>
    <p>DDD was set up with a number of key elements in mind, which hold true for all DDD conferences held worlwide:</p>
    <ul>
      <li>It is free / low cost</li>
      <li>It is on a Saturday</li>
      <li>An open submissions process</li>
      <li>A democratically chosen agenda</li>
    </ul>
    <h2>Sister events</h2>
    <p>We have a number of sister events across Australia:</p>
    <p className="text-center">
      <SafeLink href="https://dddperth.com/" target="_blank">
        <img src="/static/images/logo-dddperth.png" alt="DDD Perth logo" style={{ height: '125px' }} />
      </SafeLink>{' '}
      <SafeLink href="https://dddmelbourne.com/" target="_blank">
        <img src="/static/images/logo-dddmelbourne-2019.jpg" alt="DDD Melbourne logo" style={{ height: '125px' }} />
      </SafeLink>{' '}
      <SafeLink href="http://dddsydney.com.au/" target="_blank">
        <img src="/static/images/logo-dddsydney-2019.png" alt="DDD Sydney logo" style={{ height: '125px' }} />
      </SafeLink>{' '}
      <SafeLink href="http://dddbrisbane.com/" target="_blank">
        <img src="/static/images/logo-dddbrisbane-2019.jpg" alt="DDD Brisbane logo" style={{ height: '125px' }} />
      </SafeLink>
    </p>
  </Page>
))
