import * as React from 'react'
import Page from '../layouts/main';
import {withPageMetadata} from '../components/global/withPageMetadata';
import Router from 'next/router'
import Conference from '../config/conference';
import getConferenceDates from '../config/dates';


class AgendaPage extends React.Component {
  static getInitialProps({ res }) {

    const dates = getConferenceDates(Conference);
    if (!dates.AgendaPublished){
      if (res) {
        res.writeHead(302, {
          Location: '/agenda/' + Conference.PreviousInstance
        })
        res.end()
        res.finished = true
      } else {
        Router.replace('/agenda/' + Conference.PreviousInstance)
      }
    }
    return {}
  }
  render() {
    const dates = getConferenceDates(Conference);
    return <Page title="Agenda" hideBanner={true} description={Conference.Name + " agenda."}>
      <h1>{dates.IsComplete && Conference.Instance} Agenda</h1>

      <p>The agenda has not yet been finalised.</p>
    </Page>;
  }
}

export default withPageMetadata(AgendaPage);

