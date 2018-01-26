import * as React from 'react';
import { StatelessComponent } from 'react';
import Conference from '../../config/conference';

const s = Conference.Socials;

const Socials : StatelessComponent = () =>
  <ul className="social">
    {s.Twitter && <li><a rel="nofollow" className="fa fa-twitter" href={`https://twitter.com/${s.Twitter}`} title={'@' + s.Twitter} target="_blank"></a></li>}
    {s.Facebook && <li><a rel="nofollow" className="fa fa-facebook" href={`https://facebook.com/${s.Facebook}`} title="Facebook" target="_blank"></a></li>}
    {s.GitHub && <li><a rel="nofollow" className="fa fa-github" href={`https://github.com/${s.GitHub}`} title="GitHub" target="_blank"></a></li>}
    {s.Instagram && <li><a rel="nofollow" className="fa fa-instagram" href={`https://www.instagram.com/${s.Instagram}`} title="Instagram" target="_blank"></a></li>}
    {s.Flickr && <li><a rel="nofollow" className="fa fa-flickr" href={s.Flickr} title="Flickr" target="_blank"></a></li>}
    {s.Youtube && <li><a rel="nofollow" className="fa fa-youtube" href={s.Youtube} title="YouTube" target="_blank"></a></li>}
    {s.Blog && <li><a rel="nofollow" className="fa fa-pencil" href={s.Blog} title={s.Blog} target="_blank"></a></li>}
    {s.Email && <li><a rel="nofollow" className="fa fa-envelope" href={`mailto:${s.Email}`} title={s.Email}></a></li>}
    {s.MailingList && <li><a rel="nofollow" className="fa fa-envelope-o" href={s.MailingList} title="Mailing List" target="_blank"></a></li>}
  </ul>;

export default Socials;