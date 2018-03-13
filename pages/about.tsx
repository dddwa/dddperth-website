import * as React from 'react'
import Page from '../layouts/withSidebar';
import {withPageMetadata} from '../components/global/withPageMetadata';
import Link from 'next/link'

export default withPageMetadata(() =>
  <Page title="About" description="The goal and history of DDD Perth and DDD WA Inc.">
    <h1>About DDD Perth</h1>
    <p>DDD Perth is an inclusive non-profit event for the Perth software community. Our goal is to create an approachable conference that anyone can attend or speak at, especially people that don't normally get to attend / speak at conferences. We do this by:</p>
    <ul>
      <li>Making the ticket price as low as possible ($50)</li>
      <li>Running the event on a Saturday</li>
      <li>Allowing anyone to submit about any software industry related topic</li>
      <li>Having a democratically chosen agenda</li>
      <li>Focussing on creating a safe and inclusive environment where everyone is welcome</li>
    </ul>
    <p className="text-center"><img src="/static/images/logo.png" alt="DDD Perth logo" style={{width: "250px"}} /></p>
    <p>DDD standards for Developer! Developer! Developer! and while it's heritage is a developer-focussed conference, DDD Perth is not just for developers, but for all professionals in the software industry.</p>
    <p>DDD Perth was founded in 2015 by <a href="https://www.twitter.com/robdmoore" target="_blank">Rob Moore</a> and <a href="https://www.twitter.com/mdaviesnet" target="_blank">Matt Davies</a> and <a href="https://blog.dddperth.com/meet-the-team-35865433cb39" target="_blank">since 2018 it has been run by DDD WA Inc.</a></p>
    <p>DDD Perth has been held at the following dates:</p>
    <ul>
      <li><Link href="/agenda/2015"><a>29 August 2015 - 100 attendees</a></Link></li>
      <li><Link href="/agenda/2016"><a>27 August 2016 - 180 attendees (190 tickets sold)</a></Link></li>
      <li><Link href="/agenda/2017"><a>16 September 2017 - 330 attendees (360 tickets sold)</a></Link></li>
    </ul>
    <h2>What is Developer! Developer! Developer!?</h2>
    <p>Developer! Developer! Developer! started in 2005 in the United Kingdom as a community conference organised by software developers for software developers. <a href="https://en.wikipedia.org/wiki/Developer!_Developer!_Developer!" target="_blank">It's since spread all over the UK and Australia</a>.</p>
    <p>DDD was set up with a number of key elements in mind, which hold true for all DDD conferences held worlwide:</p>
    <ul>
      <li>It is free / low cost</li>
      <li>It is on a Saturday</li>
      <li>An open submissions process</li>
      <li>A democratically chosen agenda</li>
    </ul>
  </Page>
);

