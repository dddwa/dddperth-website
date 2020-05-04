import React from 'react'
import { Socials } from '../../../config/types'
import { SafeLink } from '../safeLink'
import { StyledSocialLinks, StyledSocialLink } from './Footer.styled'
import { FacebookIcon } from '../Icons/Facebook'
import { InstagramIcon } from '../Icons/Instagram'
import { TwitterIcon } from '../Icons/Twitter'

interface SocialLinksArgs {
  socials: Socials
}

export const SocialLinks: React.FC<SocialLinksArgs> = ({ socials }) => (
  <StyledSocialLinks>
    {socials.Twitter.Name && (
      <li>
        <StyledSocialLink href={`https://twitter.com/${socials.Twitter.Name}`} target="_blank" rel="noopener nofollow">
          <TwitterIcon />
          <span>Twitter, opens in new window</span>
        </StyledSocialLink>
      </li>
    )}
    {socials.Facebook && (
      <li>
        <StyledSocialLink href={`https://facebook.com/${socials.Facebook}`} target="_blank" rel="noopener nofollow">
          <FacebookIcon />
          <span>Facebook, will open in a new window</span>
        </StyledSocialLink>
      </li>
    )}
    {socials.GitHub && (
      <li>
        <SafeLink
          rel="noopener nofollow"
          className="fa fa-github"
          href={`https://github.com/${socials.GitHub}`}
          title="GitHub, will open in a new window"
          aria-label="GitHub, will open in a new window"
          target="_blank"
        />
      </li>
    )}
    {socials.Instagram && (
      <li>
        <StyledSocialLink
          href={`https://www.instagram.com/${socials.Instagram}`}
          target="_blank"
          rel="noopener nofollow"
        >
          <InstagramIcon />
          <span>Instagram, opens in new window</span>
        </StyledSocialLink>
      </li>
    )}
    {socials.Flickr && (
      <li>
        <SafeLink
          rel="noopener nofollow"
          className="fa fa-flickr"
          href={socials.Flickr}
          title="Flickr, will open in a new window"
          aria-label="Flickr, will open in a new window"
          target="_blank"
        />
      </li>
    )}
    {socials.Youtube && (
      <li>
        <SafeLink
          rel="noopener nofollow"
          className="fa fa-youtube"
          href={socials.Youtube}
          title="YouTube, will open in a new window"
          aria-label="YouTube, will open in a new window"
          target="_blank"
        />
      </li>
    )}
    {socials.Blog && (
      <li>
        <SafeLink
          rel="noopener nofollow"
          className="fa fa-pencil"
          href={socials.Blog}
          title="Blog, will open in a new window"
          aria-label="Blog, will open in a new window"
          target="_blank"
        />
      </li>
    )}
    {socials.Email && (
      <li>
        <SafeLink
          rel="noopener nofollow"
          className="fa fa-envelope"
          href={`mailto:${socials.Email}`}
          title="Email, will open in system default mail app"
          aria-label="Email, will open in system default mail app"
        />
      </li>
    )}
    {socials.MailingList && (
      <li>
        <SafeLink
          rel="noopener nofollow"
          className="fa fa-envelope-o"
          href={socials.MailingList}
          title="Mailing List, will open in a new window"
          aria-label="Mailing List, will open in a new window"
          target="_blank"
        />
      </li>
    )}
  </StyledSocialLinks>
)
