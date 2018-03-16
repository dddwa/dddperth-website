import * as PropTypes from 'prop-types'
import { StatelessComponent } from 'react'
import EventDetailsSummary from '../components/eventDetailsSummary'
import ImportantDatesList from '../components/importantDatesList'
import { updateWithTime } from '../components/withCurrentDate'
import getConferenceActions from '../config/actions'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import Main, { MainArgs } from './main'

interface WithSidebarProps extends MainArgs {}

const WithSidebar: StatelessComponent<WithSidebarProps> = ({ children, ...props }, context) => (
  <Main {...props}>
    <section className="right-sidebar">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-7 col-md-7 col-sm-8 left-col">{children}</div>
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4 right-col">
            <div className="inner">
              <EventDetailsSummary
                conference={Conference}
                primaryAction={getConferenceActions(Conference, getConferenceDates(Conference))[0]}
                pagePath={context.pagePath}
              />
              <h3>Important Dates</h3>
              <div className="important-dates-right slick">
                <ImportantDatesList conference={Conference} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Main>
)

WithSidebar.contextTypes = {
  pagePath: PropTypes.string,
}

export default updateWithTime(WithSidebar)
