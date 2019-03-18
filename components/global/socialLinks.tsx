import React, { StatelessComponent } from 'react'
import { Socials } from '../../config/types'

interface SocialLinksArgs {
  socials: Socials
}

const SocialLinks: StatelessComponent<SocialLinksArgs> = ({ socials }) => (
  <ul className="social">
    {socials.Twitter.Name && (
      <li>
        <a
          className="fa fa-twitter"
          rel="nofollow"
          href={`https://twitter.com/${socials.Twitter.Name}`}
          title="Twitter, will open in a new window"
          aria-label="Twitter, will open in a new window"
          target="_blank"
        />
      </li>
    )}
    {socials.Facebook && (
      <li>
        <a
          rel="nofollow"
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
        <a
          rel="nofollow"
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
        <a
          rel="nofollow"
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
        <a
          rel="nofollow"
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
        <a
          rel="nofollow"
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
        <a
          rel="nofollow"
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
        <a
          rel="nofollow"
          className="fa fa-envelope"
          href={`mailto:${socials.Email}`}
          title="Email, will open in system default mail app"
          aria-label="Email, will open in system default mail app"
        />
      </li>
    )}
    {socials.MailingList && (
      <li>
        <a
          rel="nofollow"
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
