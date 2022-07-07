import { useConfig } from 'Context/Config'
import Script from 'next/script';

declare const SmFormSettings: any;

export const VolunteerForm = () => {
  const { conference } = useConfig();

  if (conference.VolunteerSubmissionFormId) {
    return (
      <div id="volunteer_form">
        <Script strategy='afterInteractive' type='text/javascript' id='loadFormScript' src='https://webforms.salesmate.io/webforms.js' onLoad={() => {
          const WEBFORM_DATA = {
            formId: `${conference.VolunteerSubmissionFormId}`,
            divId: '_sm_webform_',
            linkName: 'webforms.salesmate.io'
          };
          SmFormSettings.loadForm(WEBFORM_DATA);
        }} />
        <div id="_sm_webform_"></div>
      </div>
    );
  }

  return null;
}
