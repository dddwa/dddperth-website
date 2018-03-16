import dateTimeProvider from 'components/utils/dateTimeProvider'
import { withCurrentDate, WithCurrentDateProps } from 'components/withCurrentDate'
import Router from 'next/router'
import * as React from 'react'
import { withPageMetadata } from '../components/global/withPageMetadata'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import Page from '../layouts/main'

class AgendaPage extends React.Component<WithCurrentDateProps> {
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
    const dates = getConferenceDates(Conference, this.props.currentDate)
    return (
      <Page title="Agenda" hideBanner={true} description={Conference.Name + ' agenda.'}>
        <h1>{dates.IsComplete && Conference.Instance} Agenda</h1>

        <p>The agenda has not yet been finalised.</p>
      </Page>
    )
  }
}

export default withPageMetadata(withCurrentDate(AgendaPage))
