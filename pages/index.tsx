import * as React from 'react'
import Page from '../layouts/main';
import {withPageMetadata} from '../components/global/withPageMetadata';
import Link from 'next/link'
import ImageStrip from '../components/imageStrip';
import arrayShuffle from '../components/utils/arrayShuffle';
import Conference from '../config/conference';

interface IndexProps {
  imageStrip : string[];
}

class Index extends React.Component<IndexProps> {

  static getInitialProps() {
    return {
      imageStrip: arrayShuffle(Conference.ImageStrip)
    };
  }

  render() {
    return <Page isHome={true} title="Home">
      <ImageStrip images={this.props.imageStrip} />
    </Page>;
  }
}

export default withPageMetadata(Index);
