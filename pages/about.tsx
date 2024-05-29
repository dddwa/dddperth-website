import React from 'react'
import { SafeLink } from 'components/global/safeLink'
import { StyledList, Text } from 'components/global/text'
import { PageWithSidebar } from 'layouts/withSidebar'
import { calcRem } from 'components/utils/styles/calcRem'
import styled from '@emotion/styled'
import { NextPage } from 'next'
import { useConfig } from 'Context/Config'

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

const About: NextPage = () => {
  const { conference } = useConfig()

  return (
    <PageWithSidebar title="About" description="The goal and history of DDD Adelaide and DDD Adelaide Inc.">
      <h1>About DDD Adelaide</h1>
      <Text>
        {conference.TagLine}. {conference.Goal} We do this by:
      </Text>
      <StyledList>
        <li>Making the ticket price as low as possible ({conference.TicketPrice})</li>
        <li>Running the event on a Saturday</li>
        <li>Allowing anyone to submit about any software industry related topic</li>
        <li>Having a democratically chosen agenda</li>
        <li>Focussing on creating a safe and inclusive environment where everyone is welcome</li>
      </StyledList>
      <StyledLogoWrapper>
        <img src="/static/images/adelaide/logo.png" alt="DDD Adelaide logo" style={{ width: '250px' }} />
      </StyledLogoWrapper>
      <Text>
        Furthermore, {conference.Name} aims to both create opportunities for underrepresented minorities, juniors and
        first-time speakers to present as well as influence the wider software industry to encourage such opportunities
        more broadly.
      </Text>
      <h2>What do we do with the money we raise?</h2>
      <Text>
        DDD Adelaide is organized by DDD Adelaide Inc., a non-profit association. All funds raised as part of running
        DDD
        Adelaide are used for:
      </Text>
      <StyledList>
        <li>Running current, or future, DDD Adelaide events</li>
        <li>
          Sponsoring events or meetup groups in the SA software industry that align to the purpose and goals of DDD
          Adelaide Inc.
        </li>
        <li>Other activities that contribute to the SA software industry and align to our purpose and goals</li>
      </StyledList>
      <h2>What does DDD stand for?</h2>
      <Text>
        DDD Adelaide is a part of the Developer! Developer! Developer! series of events, focussed on providing a forum
        for
        all people involved in the creation of software in South Australia to get together and share their experiences
        and
        stories.
      </Text>
      <Text>DDD was set up with a number of key elements in mind, which hold true for all DDD conferences held
        worldwide:</Text>
      <StyledList>
        <li>It is free / low cost</li>
        <li>It is on a Saturday</li>
        <li>An open submissions process</li>
        <li>A democratically chosen agenda</li>
      </StyledList>
      <h2>Sister events</h2>
      <Text>We have a number of sister events across Australia:</Text>
      <StyledLogoWrapper logoMaxWidth={200}>
        <SafeLink href="https://dddperth.com/" target="_blank">
          <img src="/static/images/adelaide/logo-dddperth.png" alt="DDD Perth logo" style={{ height: '125px' }} />
        </SafeLink>{' '}
        <SafeLink href="https://dddmelbourne.com/" target="_blank">
          <img src="/static/images/adelaide/logo-dddmelbourne-2019.jpg" alt="DDD Melbourne logo" style={{ height: '125px' }} />
        </SafeLink>{' '}
        <SafeLink href="http://next.dddsydney.com.au/" target="_blank">
          <img src="/static/images/adelaide/logo-dddsydney-2019.png" alt="DDD Sydney logo" style={{ height: '125px' }} />
        </SafeLink>{' '}
        <SafeLink href="http://dddbrisbane.com/" target="_blank">
          <img src="/static/images/adelaide/logo-dddbrisbane-2019.jpg" alt="DDD Brisbane logo" style={{ height: '125px' }} />
        </SafeLink>
      </StyledLogoWrapper>
    </PageWithSidebar>
  )
}

export default About
