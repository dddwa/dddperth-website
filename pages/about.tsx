import Link from 'next/link'
import * as React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page pageMetadata={props.pageMetadata} title="About" description="The goal and history of DDD Perth and DDD WA Inc.">
    <h1>About DDD Perth</h1>
    <p>
      {props.pageMetadata.conference.TagLine}. {props.pageMetadata.conference.Goal} We do this by:
    </p>
    <ul>
      <li>Making the ticket price as low as possible ($50)</li>
      <li>Running the event on a Saturday</li>
      <li>Allowing anyone to submit about any software industry related topic</li>
      <li>Having a democratically chosen agenda</li>
      <li>Focussing on creating a safe and inclusive environment where everyone is welcome</li>
    </ul>
    <p className="text-center">
      <img src="/static/images/logo.png" alt="DDD Perth logo" style={{ width: '250px' }} />
      <img src="/static/images/logo-2019.png" alt="DDD Perth 2019 logo" style={{ width: '250px' }} />
    </p>
    <p>
      Furthermore, {props.pageMetadata.conference.Name} aims to both create opportunities for underrepresented
      minorities, juniors and first-time speakers to present as well as influence the wider software industry to
      encourage such opportunities more broadly.
    </p>
    <h2>What do we do with the money we raise?</h2>
    <p>
      DDD Perth is run by DDD WA Inc., a non-profit association. All funds raised as part of running DDD Perth, selling
      merchandise on{' '}
      <a href="https://www.redbubble.com/people/dddperth" target="_blank">
        Red Bubble
      </a>{' '}
      or any other activities are used for:
    </p>
    <ul>
      <li>Running current, or future, DDD Perth or DDD By Night events</li>
      <li>
        Sponsoring events or meetup groups in the WA software industry that align to the purpose and goals of DDD Perth
      </li>
      <li>Other activities that contribute to the WA software industry and align to our purpose and goals</li>
    </ul>
    <h2>What does DDD stand for?</h2>
    <p>
      DDD Perth started out its life as part of the Developer! Developer! Developer! series of events and while our
      heritage is as a developer-focussed conference, DDD Perth is not just for developers, but for all professionals in
      the software industry. These days we don't expand DDD - it's not an acronym for us anymore, but if people insist
      then we might say Designer, Developer and Data Scientist, or is it DevOps, Data architect, distributed tester?
    </p>
    <h2>History</h2>
    <p>
      DDD Perth was founded in 2015 by{' '}
      <a href="https://www.twitter.com/robdmoore" target="_blank">
        Rob Moore
      </a>{' '}
      and{' '}
      <a href="https://www.twitter.com/mdaviesnet" target="_blank">
        Matt Davies
      </a>{' '}
      and{' '}
      <a href="https://blog.dddperth.com/meet-the-team-35865433cb39" target="_blank">
        since 2018 it has been run by DDD WA Inc.
      </a>
    </p>
    <p>The original DDD Perth logo was:</p>
    <p className="text-center">
      <img src="/static/images/logo-old.png" alt="DDD Perth logo" style={{ width: '250px' }} />
    </p>
    <p>DDD Perth has been held on the following dates:</p>
    <ul>
      <li>
        <Link href="/agenda/2015">
          <a>29 August 2015 @ Burswood on Swan - 100 attendees</a>
        </Link>
      </li>
      <li>
        <Link href="/agenda/2016">
          <a>27 August 2016 @ Mercure Hotel - 180 attendees (190 tickets sold)</a>
        </Link>
      </li>
      <li>
        <Link href="/agenda/2017">
          <a>16 September 2017 @ Perth Convention and Exhibition Centre - 330 attendees (360 tickets sold)</a>
        </Link>
      </li>
      <li>
        <Link href="/agenda/2018">
          <a>4 August 2018 @ Perth Convention and Exhibition Centre - 470 attendees (510 tickets sold)</a>
        </Link>
      </li>
    </ul>
    <p>
      Developer! Developer! Developer! started in 2005 in the United Kingdom as a community conference organised by
      software developers for software developers.{' '}
      <a href="https://en.wikipedia.org/wiki/Developer!_Developer!_Developer!" target="_blank">
        It's since spread all over the UK and Australia
      </a>
      .
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
      <a href="https://dddmelbourne.com/" target="_blank">
        <img src="/static/images/logo-dddmelbourne.jpg" alt="DDD Melbourne logo" style={{ width: '200px' }} />
      </a>{' '}
      <a href="http://dddsydney.com.au/" target="_blank">
        <img src="/static/images/logo-dddsydney.png" alt="DDD Sydney logo" style={{ width: '200px' }} />
      </a>{' '}
      <a href="http://dddbrisbane.com/" target="_blank">
        <img src="/static/images/logo-dddbrisbane.png" alt="DDD Brisbane logo" style={{ width: '200px' }} />
      </a>
    </p>
  </Page>
))
