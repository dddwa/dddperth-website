import React, { StatelessComponent } from 'react'
import { Socials } from '../../config/types'
import { SafeLink } from './safeLink'

interface SocialLinksArgs {
  socials: Socials
}

const SocialLinks: StatelessComponent<SocialLinksArgs> = ({ socials }) => (
  <ul className="social">
    {socials.Twitter.Name && (
      <li>
        <SafeLink
          className="fa fa-twitter"
          rel="noopener nofollow"
          href={`https://twitter.com/${socials.Twitter.Name}`}
          title="Twitter, will open in a new window"
          aria-label="Twitter, will open in a new window"
          target="_blank"
        />
      </li>
    )}
    {socials.Facebook && (
      <li>
        <SafeLink
          rel="noopener nofollow"
          className="fa fa-facebook"
          href={`https://facebook.com/${socials.Facebook}`}
          title="Facebook, will open in a new window"
          aria-label="Facebook, will open in a new window"
          target="_blank"
        />
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
        <SafeLink
          rel="noopener nofollow"
          className="fa fa-instagram"
          href={`https://www.instagram.com/${socials.Instagram}`}
          title="Instagram, will open in a new window"
          aria-label="Instagram, will open in a new window"
          target="_blank"
        />
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
  </ul>
)

export default SocialLinks
