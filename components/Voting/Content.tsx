import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Conference, Dates, TicketNumberWhileVoting } from 'config/types'
import { StyledList } from 'components/global/text'
import { format } from 'date-fns'
import {
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderIllustration,
  Heading,
  Text,
  SpeakerBubble,
  SpeakerBubbleTitle,
  SpeakerCaption,
  SyledIllustrationContainer,
  StyledColumnLayout,
  HeadingBody,
  ButtonStack,
  MoreInfoButton,
  StartVoteButton,
} from './Content.styled'

interface VoteContentProps {
  conference: Conference
  dates: Dates
  submissionCount?: number
}

export function VoteContent({ conference, dates, submissionCount }: VoteContentProps): JSX.Element {
  return (
    <>
      <StyledHeader>
        <StyledHeaderContent>
          <Heading>Voting</Heading>

          <Text>
            One of the{' '}
            <Link href="/about">
              <a>core tenets of {conference.Name}</a>
            </Link>{' '}
            is that the agenda is democratically selected. Session voting is the main mechanism that we employ to
            achieve that. This means that you (collectively) have the power to decide on the agenda on the day.
          </Text>

          {conference.AnonymousVoting && (
            <Text>
              In order to remove unconscious bias we implement anonymous session voting. This means that you will not
              see the details of the presenters and will need to vote based on the content (title, abstract, tags).
            </Text>
          )}

          <Text>
            This year we have a combination of 20 minute and 45 minutes sessions. You can optionally filter the sessions
            by tag, format and level to assist you to create a shortlist. You will be required to vote for{' '}
            <strong>
              {conference.MinVotes !== conference.MaxVotes ? (
                <span>
                  between {conference.MinVotes} and {conference.MaxVotes}
                </span>
              ) : (
                <span>{conference.MinVotes}</span>
              )}{' '}
              sessions and you have until{' '}
              {format(conference.VotingOpenUntil, dates.TimeDisplayFormat + ' ' + dates.DateDisplayFormat)}
            </strong>{' '}
            to submit your votes. <strong>Each person should only lodge one set of votes</strong>; we have a number of
            mechanisms in place to detect fraudulent votes.
          </Text>

          <ButtonStack>
            <MoreInfoButton href="#moreinfo">More Info</MoreInfoButton>
            <Link href="/vote/voting" passHref>
              <StartVoteButton>Start Voting</StartVoteButton>
            </Link>
          </ButtonStack>
        </StyledHeaderContent>
        <StyledHeaderIllustration>
          <SpeakerBubble>
            <SpeakerBubbleTitle>
              You.
              <br />
              Are.
              <br />
              Awesome.
            </SpeakerBubbleTitle>{' '}
            <SpeakerCaption>
              David Neal. 2019
              <br />
              DDDPerth Speaker
            </SpeakerCaption>
          </SpeakerBubble>
          <SyledIllustrationContainer>
            <Image src="/illustrations/david_neal.png" width={543} height={875} alt="" loading="lazy" />
          </SyledIllustrationContainer>
        </StyledHeaderIllustration>
      </StyledHeader>

      <StyledColumnLayout id="moreinfo">
        <div>
          <HeadingBody>Getting the most out of voting</HeadingBody>
          <p>
            This year we had {submissionCount ? submissionCount : '...'} sessions submitted! We've implemented the
            following features to assist you to manage voting across such a large number of sessions:
          </p>
          <StyledList>
            <li>
              Any actions you take on this page (e.g. vote, shortlist) will be saved to this device/browser -{' '}
              <strong>you can do the voting over a number of sittings</strong> and don't need to worry about trying to
              complete it in one go
            </li>
            <li>
              You can add/remove sessions to/from a shortlist and view that shortlist separately;{' '}
              <strong>we recommend trying to come up with a shortlist first</strong> and then selecting your votes from
              the shortlist after removing the sessions you are less interested in from the shortlist
            </li>
            <li>
              When viewing all sessions you can filter by <em>tags</em>, <em>format</em> and <em>level</em>; this is{' '}
              <strong>
                useful if you don't have the time to review all {submissionCount ? submissionCount : '...'} sessions
              </strong>{' '}
              and instead want to narrow down on sessions that are likely to be of interest
            </li>
            <li>
              We recommend you <strong>try to find a mix of talks</strong> that are a combination of super relevant in
              your technical area, cover soft skills / leadership and/or are a bit more out there (to stretch yourself),
              but it's totally up to you to vote for your perfect agenda!
            </li>
            {conference.TicketNumberWhileVoting === TicketNumberWhileVoting.Optional && (
              <li>
                We ideally want the people who are attending to have the greatest influence on the agenda and we also
                feel this is fairer to session submitters since it makes for a more level playing field for social
                network reach; this year we have an optional field for you to add in your ticket # (from your
                confirmation email) if you've{' '}
                <Link href="/tickets">
                  <a>purchased a ticket</a>
                </Link>{' '}
                which will <strong>give your vote a higher weighting</strong>.
              </li>
            )}
            {conference.TicketNumberWhileVoting === TicketNumberWhileVoting.Required && (
              <li>
                We ideally want the people who are attending to have the greatest influence on the agenda and we also
                feel this is fairer to session submitters since it makes for a more level playing field for social
                network reach; this year you have to{' '}
                <Link href="/tickets">
                  <a>purchase a ticket</a>
                </Link>{' '}
                in order to vote.
              </li>
            )}
            {conference.PreferentialVoting && (
              <li>
                Once you have selected the sessions you want to vote for{' '}
                <strong>you will need to order your votes based on your preference.</strong> We are using a{' '}
                <a href="https:en.wikipedia.org/wiki/Preferential_voting" target="_blank">
                  preferential voting system
                </a>{' '}
                to maximise the impact of your votes.
              </li>
            )}
          </StyledList>
        </div>

        <div>
          <HeadingBody>Please note:</HeadingBody>
          <p>
            Our expectation of the community, <strong>and you as a voter</strong>, is that you will only vote once and
            you will vote for a set of talks that make up <em>your</em> perfect agenda regardless of your friends'
            talks.
          </p>
          <p>
            If you know who submitted any of the sessions we ask that you do not discuss it with anyone or post it on
            social media so we can retain a level playing field for all submitters through anonymity. We definitely want
            you to post and talk about the conference and encourage others to vote though so spread the word.
          </p>
          <p>
            If we follow this approach as a community then we can be fair to all the submitters who have put time,
            effort and courage into crafting the amazing session proposals below. If you have any questions please{' '}
            <a href={'mailto:' + conference.ContactEmail}>contact us</a>.
          </p>
          <p>
            Thanks!
            <br />
            &lt;3 {conference.Name} team
          </p>
        </div>
      </StyledColumnLayout>
    </>
  )
}
