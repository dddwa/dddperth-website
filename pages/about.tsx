import Link from 'next/link'
import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import { StyledList, StyledPara } from '../components/global/text'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import { PageWithSidebar } from '../layouts/withSidebar'
import { calcRem } from '../components/utils/styles/calcRem'
import styled from '../components/utils/styles/theme'

const StyledLogoWrapper = styled('div')<{ logoMaxWidth?: number }>(({ theme, logoMaxWidth = 250 }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: calcRem(theme.metrics.lg),
  marginBottom: calcRem(theme.metrics.lg),

  img: {
    width: '100%',
    maxWidth: calcRem(logoMaxWidth),
    height: 'auto',
  },
}))

export default withPageMetadata((props: WithPageMetadataProps) => (
  <PageWithSidebar
    metadata={props.pageMetadata}
    title="About"
    description="The goal and history of DDD Perth and DDD WA Inc."
  >
    <h1>About DDD Perth</h1>
    <StyledPara>
      {props.pageMetadata.conference.TagLine}. {props.pageMetadata.conference.Goal} We do this by:
    </StyledPara>
    <StyledList>
      <li>Making the ticket price as low as possible ({props.pageMetadata.conference.TicketPrice})</li>
      <li>Running the event on a Saturday</li>
      <li>Allowing anyone to submit about any software industry related topic</li>
      <li>Having a democratically chosen agenda</li>
      <li>Focussing on creating a safe and inclusive environment where everyone is welcome</li>
    </StyledList>
    <StyledLogoWrapper>
      <img src="/static/images/logo.png" alt="DDD Perth logo" loading="lazy" />
      <img src="/static/images/logo-2020.png" alt="DDD Perth 2020 logo" loading="lazy" />
    </StyledLogoWrapper>
    <StyledPara>
      Furthermore, {props.pageMetadata.conference.Name} aims to both create opportunities for underrepresented
      minorities, juniors and first-time speakers to present as well as influence the wider software industry to
      encourage such opportunities more broadly.
    </StyledPara>
    <h2>What do we do with the money we raise?</h2>
    <StyledPara>
      DDD Perth is run by DDD WA Inc., a non-profit association. All funds raised as part of running DDD Perth, selling
      merchandise on{' '}
      <SafeLink href="https://www.redbubble.com/people/dddperth" target="_blank">
        Red Bubble
      </SafeLink>{' '}
      or any other activities are used for:
    </StyledPara>
    <StyledList>
      <li>Running current, or future, DDD Perth or DDD By Night events</li>
      <li>
        Sponsoring events or meetup groups in the WA software industry that align to the purpose and goals of DDD Perth
      </li>
      <li>Other activities that contribute to the WA software industry and align to our purpose and goals</li>
    </StyledList>
    <h2>What does DDD stand for?</h2>
    <StyledPara>
      DDD Perth started out its life as part of the Developer! Developer! Developer! series of events and while our
      heritage is as a developer-focussed conference, DDD Perth is not just for developers, but for all professionals in
      the software industry. These days we don't expand DDD - it's not an acronym for us anymore, but if people insist
      then we might say Designer, Developer and Data Scientist, or is it DevOps, Data architect, distributed tester?
    </StyledPara>
    <h2>History</h2>
    <StyledPara>
      DDD Perth was founded in 2015 by{' '}
      <SafeLink href="https://www.twitter.com/robdmoore" target="_blank">
        Rob Moore
      </SafeLink>{' '}
      and{' '}
      <SafeLink href="https://www.twitter.com/mdaviesnet" target="_blank">
        Matt Davies
      </SafeLink>{' '}
      and{' '}
      <SafeLink href="https://blog.dddperth.com/meet-the-team-35865433cb39" target="_blank">
        since 2018 it has been run by DDD WA Inc.
      </SafeLink>
      .{' '}
      <SafeLink href="https://blog.dddperth.com/ddd-perth-is-back-for-2020-c0082c372517" target="_blank">
        Meet this year's team.
      </SafeLink>
    </StyledPara>
    <StyledPara>The original DDD Perth logo was:</StyledPara>
    <StyledLogoWrapper>
      <img src="/static/images/logo-old.png" alt="Original DDD Perth logo" loading="lazy" />
    </StyledLogoWrapper>
    <StyledPara>DDD Perth has been held on the following dates:</StyledPara>
    <StyledList>
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
      <li>
        <Link href="/agenda/2019">
          <a>4 August 2019 @ Perth Convention and Exhibition Centre - 835 attendees</a>
        </Link>
      </li>
    </StyledList>
    <StyledPara>
      Developer! Developer! Developer! started in 2005 in the United Kingdom as a community conference organised by
      software developers for software developers.{' '}
      <SafeLink href="https://en.wikipedia.org/wiki/Developer!_Developer!_Developer!" target="_blank">
        Its since spread all over the UK and Australia
      </SafeLink>
      .
    </StyledPara>
    <StyledPara>
      DDD was set up with a number of key elements in mind, which hold true for all DDD conferences held worlwide:
    </StyledPara>
    <StyledList>
      <li>It is free / low cost</li>
      <li>It is on a Saturday</li>
      <li>An open submissions process</li>
      <li>A democratically chosen agenda</li>
    </StyledList>
    <h2>Sister events</h2>
    <StyledPara>We have a number of sister events across Australia:</StyledPara>
    <StyledLogoWrapper logoMaxWidth={200}>
      <SafeLink href="https://dddmelbourne.com/" target="_blank">
        <img src="/static/images/logo-dddmelbourne-2019.jpg" alt="DDD Melbourne logo" loading="lazy" />
      </SafeLink>{' '}
      <SafeLink href="http://dddsydney.com.au/" target="_blank">
        <img src="/static/images/logo-dddsydney-2019.png" alt="DDD Sydney logo" loading="lazy" />
      </SafeLink>{' '}
      <SafeLink href="http://dddbrisbane.com/" target="_blank">
        <img src="/static/images/logo-dddbrisbane-2019.jpg" alt="DDD Brisbane logo" loading="lazy" />
      </SafeLink>
    </StyledLogoWrapper>
  </PageWithSidebar>
))
