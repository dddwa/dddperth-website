import Main, {MainArgs} from "./main";
import { StatelessComponent } from "react";
import EventDetailsSummary from "../components/eventDetailsSummary";
import Conference from "../config/conference";
import ImportantDates from "../components/importantDates";

interface WithSidebarProps extends MainArgs {}

const WithSidebar : StatelessComponent<WithSidebarProps> = ({children, ...props}) =>
  <Main {...props}>
    <section className="right-sidebar">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-7 col-md-7 col-sm-8 left-col">
            {children}
          </div>
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4 right-col">
            <div className="inner">
              <EventDetailsSummary conference={Conference} />
              <h3>Important Dates</h3>
              <div className="important-dates-right slick">
                {/*todo: Add dates - pre-req is importantDates.tsx*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Main>;

export default WithSidebar;
