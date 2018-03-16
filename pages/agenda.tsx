import Router from 'next/router'
import * as React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import Page from '../layouts/main'

class AgendaPage extends React.Component<WithPageMetadataProps> {
  static getInitialProps({ res }) {
    const dates = getConferenceDates(Conference, dateTimeProvider.now())
    if (!dates.AgendaPublished) {
      if (res) {
        res.writeHead(302, {
          Location: '/agenda/' + Conference.PreviousInstance,
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
    const conference = this.props.pageMetadata.conference
    const dates = this.props.pageMetadata.dates
    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Agenda"
        hideBanner={true}
        description={conference.Name + ' agenda.'}
      >
        <h1>{dates.IsComplete && conference.Instance} Agenda</h1>

        <p>The agenda has not yet been finalised.</p>
      </Page>
    )
  }
}

export default withPageMetadata(AgendaPage)
