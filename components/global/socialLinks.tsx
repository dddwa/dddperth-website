import * as React from 'react'
import { StatelessComponent } from 'react'
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
          title="Twitter"
          aria-label="Twitter"
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
          title="Facebook"
          aria-label="Facebook"
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
          title="GitHub"
          aria-label="GitHub"
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
          title="Instagram"
          aria-label="Instagram"
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
          title="Flickr"
          aria-label="Flickr"
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
          title="YouTube"
          aria-label="YouTube"
          target="_blank"
        />
      </li>
    )}
    {socials.Blog && (
      <li>
        <a rel="nofollow" className="fa fa-pencil" href={socials.Blog} title="Blog" aria-label="Blog" target="_blank" />
      </li>
    )}
    {socials.Email && (
      <li>
        <a
          rel="nofollow"
          className="fa fa-envelope"
          href={`mailto:${socials.Email}`}
          title="Email"
          aria-label="Email"
        />
      </li>
    )}
    {socials.MailingList && (
      <li>
        <a
          rel="nofollow"
          className="fa fa-envelope-o"
          href={socials.MailingList}
          title="Mailing List"
          aria-label="Mailing List"
          target="_blank"
        />
      </li>
    )}
  </ul>
)

export default SocialLinks
