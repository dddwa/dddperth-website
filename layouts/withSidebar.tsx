import { StatelessComponent } from 'react'
import EventDetailsSummary from '../components/eventDetailsSummary'
import ImportantDatesList from '../components/importantDatesList'
import getConferenceActions from '../config/actions'
import Main, { MainProps } from './main'

interface WithSidebarProps extends MainProps {}

const WithSidebar: StatelessComponent<WithSidebarProps> = ({ children, pageMetadata, ...props }, context) => (
  <Main pageMetadata={pageMetadata} {...props}>
    <section className="right-sidebar">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8 left-col">{children}</div>
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4 right-col">
            <div className="inner">
              <EventDetailsSummary
                conference={pageMetadata.conference}
                dates={pageMetadata.dates}
                primaryAction={
                  getConferenceActions(pageMetadata.conference, pageMetadata.dates).filter(
                    a => a.Url !== pageMetadata.pagePath,
                  )[0]
                }
                pagePath={context.pagePath}
              />
              <h3>Important Dates</h3>
              <div className="important-dates-right slick">
                <ImportantDatesList conference={pageMetadata.conference} currentDate={pageMetadata.currentDate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Main>
)

export default WithSidebar
