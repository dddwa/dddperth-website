import * as React from'react';
import Head from 'next/head';
import { Fragment, StatelessComponent } from 'react';
import '../../styles/screen.scss';
import { Conference, Dates } from '../../config/types';

interface MetaArgs {
  pageUrl : string,
  pageTitle : string;
  pageDescription? : string;
  pageImage? : string;
  conference : Conference;
  dates : Dates;
}

const getTitle = (title : string, conference : Conference, dates : Dates) => `${title !== 'Home' ? title + ' - ' : ''}${conference.Name}${!conference.HideDate && !dates.IsComplete ? ` | ${conference.Date.format('d MMM YYYY')}` : ''}`;

const Meta : StatelessComponent<MetaArgs> = ({pageUrl, pageTitle, pageDescription, pageImage, conference, dates}) =>
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content={conference.Name} />
      <title>{getTitle(pageTitle, conference, dates)}</title>
      <meta property="og:title" content={getTitle(pageTitle, conference, dates)} />
      <meta name="twitter:title" content={getTitle(pageTitle, conference, dates).substring(0, 70)} />
      <meta name="description" content={pageDescription || conference.SiteDescription} />
      <meta property="og:description" content={pageDescription || conference.SiteDescription} />
      <meta name="twitter:description" content={(pageDescription || conference.SiteDescription).substring(0, 200)} />
      <meta name="author" content={conference.Organiser} />
      <meta property="og:image" content={pageImage || '/static/images/default-social-sharing-image.jpg'} />
      <meta property="twitter:image" content={pageImage || '/static/images/default-social-sharing-image.jpg'} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={conference.Name} />
      <meta name="twitter:creator" content={conference.Organiser} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={conference.Name} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:url" content={pageUrl} />
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"  />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Montserrat:700" />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Overpass+Mono:700" />
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
  </Fragment>;

export default Meta;
