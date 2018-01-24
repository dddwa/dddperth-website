import * as React from 'react'
import Page from '../layouts/main';
import {withPageMetadata} from '../components/global/withPageMetadata';
import Link from 'next/link'

export default withPageMetadata(() =>
  <Page title="About" description="About DDD Perth...">
    <h1>Hello world!</h1>
    <p><Link href="/">
      <a>Home</a>
    </Link></p>
  </Page>
);

