import React from 'react'
import { Socials } from 'config/types'
import { StyledSocialList, StyledSafeLink } from './HeaderSocials.styled'
import { FacebookIcon } from 'components/global/Icons/Facebook'
import { InstagramIcon } from 'components/global/Icons/Instagram'
import { TwitterIcon } from 'components/global/Icons/Twitter'
import { LinkedinIcon } from 'components/global/Icons/Linkedin'

interface HeaderSocialsProps {
  socials: Socials
}

export const HeaderSocials: React.FC<HeaderSocialsProps> = ({ socials }) => (
  <StyledSocialList>
    {socials.Facebook && (
      <li>
        <StyledSafeLink href={`https://facebook.com/${socials.Facebook}`} target="_blank" rel="noopener nofollow">
          <FacebookIcon />
          <span>Facebook, opens in new window</span>
        </StyledSafeLink>
      </li>
    )}
    {socials.Instagram && (
      <li>
        <StyledSafeLink href={`https://www.instagram.com/${socials.Instagram}`} target="_blank" rel="noopener nofollow">
          <InstagramIcon />
          <span>Instagram, opens in new window</span>
        </StyledSafeLink>
      </li>
    )}
    {socials.Twitter && (
      <li>
        <StyledSafeLink href={`https://twitter.com/${socials.Twitter.Name}`} target="_blank" rel="noopener nofollow">
          <TwitterIcon />
          <span>Twitter, opens in new window</span>
        </StyledSafeLink>
      </li>
    )}
    {socials.Linkedin && (
      <li>
        <StyledSafeLink
          href={`https://www.linkedin.com/company/${socials.Linkedin}`}
          target="_blank"
          rel="noopener nofollow"
        >
          <LinkedinIcon />
          <span>LinkedIn, opens in new window</span>
        </StyledSafeLink>
      </li>
    )}
  </StyledSocialList>
)
