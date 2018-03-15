import * as React from 'react'
import { StatelessComponent } from 'react'
import { Socials } from '../../config/types'

interface SocialLinksArgs {
  socials: Socials
}

const SocialLinks: StatelessComponent<SocialLinksArgs> = ({ socials }) => (
  <ul className="social">
    {socials.Twitter && (
      <li>
        <a
          rel="nofollow"
          className="fa fa-twitter"
          href={`https://twitter.com/${socials.Twitter}`}
          title={'@' + socials.Twitter}
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
          target="_blank"
        />
      </li>
    )}
    {socials.Flickr && (
      <li>
        <a rel="nofollow" className="fa fa-flickr" href={socials.Flickr} title="Flickr" target="_blank" />
      </li>
    )}
    {socials.Youtube && (
      <li>
        <a rel="nofollow" className="fa fa-youtube" href={socials.Youtube} title="YouTube" target="_blank" />
      </li>
    )}
    {socials.Blog && (
      <li>
        <a rel="nofollow" className="fa fa-pencil" href={socials.Blog} title={socials.Blog} target="_blank" />
      </li>
    )}
    {socials.Email && (
      <li>
        <a rel="nofollow" className="fa fa-envelope" href={`mailto:${socials.Email}`} title={socials.Email} />
      </li>
    )}
    {socials.MailingList && (
      <li>
        <a
          rel="nofollow"
          className="fa fa-envelope-o"
          href={socials.MailingList}
          title="Mailing List"
          target="_blank"
        />
      </li>
    )}
  </ul>
)

export default SocialLinks
