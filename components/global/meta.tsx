import * as React from'react';
import Head from 'next/head';
import { Fragment, StatelessComponent } from 'react';
const stylesheet = require('styles/screen.scss');
import Conference from '../../config/conference';
import Dates from '../../config/dates';

interface MetaArgs {
  pageUrl : string,
  pageTitle : string;
  pageDescription? : string;
  pageImage? : string;
}

const getTitle = (title : string) => `${title !== 'Home' ? title + ' - ' : ''}${Conference.Name}${!Conference.HideDate && !Dates.IsComplete ? ` | ${Conference.Date.format('d MMM YYYY')}` : ''}`;

const Meta : StatelessComponent<MetaArgs> = ({pageUrl, pageTitle, pageDescription, pageImage}) =>
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content={Conference.Name} />
      <title>{getTitle(pageTitle)}</title>
      <meta property="og:title" content={getTitle(pageTitle)} />
      <meta name="twitter:title" content={getTitle(pageTitle).substring(0, 70)} />
      <meta name="description" content={pageDescription || Conference.SiteDescription} />
      <meta property="og:description" content={pageDescription || Conference.SiteDescription} />
      <meta name="twitter:description" content={(pageDescription || Conference.SiteDescription).substring(0, 200)} />
      <meta name="author" content={Conference.Organiser} />
      <meta property="og:image" content={pageImage || '/static/images/default-social-sharing-image.jpg'} />
      <meta property="twitter:image" content={pageImage || '/static/images/default-social-sharing-image.jpg'} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={Conference.Name} />
      <meta name="twitter:creator" content={Conference.Organiser} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={Conference.Name} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:url" content={pageUrl} />
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"  />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Montserrat:700" />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Overpass+Mono:700" />
      <style type="text/css" dangerouslySetInnerHTML={{ __html: stylesheet }}></style>
    </Head>
    <style jsx global>{`
      body {
      }
    `}</style>
  </Fragment>;

export default Meta;
