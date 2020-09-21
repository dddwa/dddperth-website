import { StyledPara } from 'components/global/text'
import withPageMetadata, { WithPageMetadataProps } from 'components/global/withPageMetadata'
import { Main } from 'layouts/main'
import { NextPage } from 'next'
import React from 'react'
import styled from 'components/utils/styles/theme'
import { calcRem } from 'components/utils/styles/calcRem'

interface ProfileProps {
  name: string
  children: React.ReactNode
  image: string
  dir?: 'left' | 'right'
}

const StyledProfileContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  marginBottom: calcRem(theme.metrics.md),
}))

const StyledProfileImage = styled('img')<{ dir: 'left' | 'right' }>(({ theme, dir }) => ({
  flexShrink: 0,
  width: '100%',
  maxWidth: 200,
  height: 'auto',
  marginLeft: dir === 'right' ? calcRem(theme.metrics.md) : undefined,
  marginRight: dir === 'left' ? calcRem(theme.metrics.md) : undefined,
  objectFit: 'contain',
}))

function Profile({ name, children, image, dir = 'left' }: ProfileProps) {
  const profileImage = (
    <StyledProfileImage src={`/static/images/who-we-are/${image}`} loading="lazy" alt={`${name}'s photo`} dir={dir} />
  )

  return (
    <div>
      <h2>{name}</h2>
      <StyledProfileContainer>
        {dir === 'left' && profileImage}
        <div>{children}</div>
        {dir === 'right' && profileImage}
      </StyledProfileContainer>
    </div>
  )
}

const WhoWeArePage: NextPage<WithPageMetadataProps> = ({ pageMetadata }) => {
  const conference = pageMetadata.conference

  return (
    <Main metadata={pageMetadata} title="Who We Are" description={`About the ${conference.Name} organising team`}>
      <h1>Who we are</h1>
      <Profile name="Amy Kapernick" image="amy_kapernick.jpg">
        <StyledPara>
          Amy wears many hats as a freelance developer, business owner and conference addict. She regularly shares her
          knowledge with her peers and the next generation of developers by mentoring, coaching, teaching and feeding
          into the tech community in many ways.
        </StyledPara>

        <StyledPara>
          Amy can be found volunteering her time with DDD Perth, Fenders, Perth Azure User Group, ACS, SheCodes
          (formerly Perth Web Girls) and MusesJS (formerly NodeGirls). She also works as an evangelist for YOW!
          Conferences, is a Twilio Champion, Microsoft MVP and has been nominated for the WiTWA awards for the last 2
          years.
        </StyledPara>

        <StyledPara>
          In her spare time Amy shares her knowledge and experience on her blogs and speaking at conferences. She has
          previously given keynotes at multiple events as well as speaking at several international conferences in the
          US and Europe.
        </StyledPara>
      </Profile>

      <Profile name="Rebecca Waters" image="rebecca_waters.jpg" dir="right">
        <StyledPara>
          Rebecca Waters is a software engineer and project manager and a mentor to junior developers and other
          professionals. She’s Chair of DDD WA Inc., Vice Chair of ACS WA and Chair of the ACS WA Diversity & Inclusion
          committee.
        </StyledPara>

        <StyledPara>
          With a career spanning projects in transport, maritime and whole of government, Rebecca brings professional
          industry experience from design, development, right through to management of critical, complex projects to her
          various not for profit roles.
        </StyledPara>

        <StyledPara>
          Rebecca is passionate about improving the inclusiveness of DDD Perth to ensure its accessibility to as many
          people in the Perth technology community as possible.
        </StyledPara>
      </Profile>

      <Profile name="Anton Ball" image="anton_ball.jpg">
        <StyledPara>
          Anton is a Front-End Developer, speaker and community organiser. He is passionate about clean, structured
          code, web standards, accessibility and optimisation. Working at Seven West Media in Western Australia, he
          prides himself on delivering robust, high quality and beautiful solutions. Anton co-organises Fenders
          Front-End Developer meetup and DDD Perth. Anton has also volunteered as a mentor introducing others to the
          world of coding.
        </StyledPara>
      </Profile>

      <Profile name="Mo Zaatar" image="mo_zaatar.png" dir="right">
        <StyledPara>
          Mo (short for Mohamed) is an enthusiastic software engineer about designing and building software solutions
          that solve people' problems. He has 15+ years of experience in building software in many industries using
          technologies more than he can count. He is originally from Egypt and now an Australian citizen.
        </StyledPara>
        <StyledPara>
          He believes in continuous improvement and giving back the community thus why he committed his time to DDDPerth
          and mentoring people around him. He spoke at DDDPerth2019 and many meetups. He is a full-time Principal
          Engineer at Vix Technology, husband and dad, a passionate speaker, an occasional mechanic, a lucky fisher and
          an untalented cooker.
        </StyledPara>
      </Profile>
    </Main>
  )
}

export default withPageMetadata(WhoWeArePage)
