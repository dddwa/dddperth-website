import * as React from 'react'
import Page from '../layouts/main';
import {withPageMetadata} from '../components/global/withPageMetadata';
import Link from 'next/link'

export default withPageMetadata(() =>
  <Page isHome={true} title="Home">
    <h1>Hello world!</h1>
    <p><Link href="/about">
      <a>About</a>
    </Link></p>
  </Page>
);
