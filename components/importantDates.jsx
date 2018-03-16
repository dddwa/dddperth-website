import * as React from 'react';
import ActionButton from './actionButton';
import ImportantDatesList from './importantDatesList';
export default ({ conference, actions, currentDate }) => (<section className="important-dates">
    <div className="container">
      <h2>Important Dates:</h2>

      <ImportantDatesList conference={conference} currentDate={currentDate}/>

      <div className="clear"/>

      <div className="what-now">
        <h2>What now?</h2>
        {actions.map(a => <ActionButton action={a} key={a.Title}/>)}
      </div>
    </div>
  </section>);
//# sourceMappingURL=importantDates.jsx.map