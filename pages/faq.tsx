import * as React from 'react'
import {Fragment} from 'react';
import Page from '../layouts/main';
import {withPageMetadata} from '../components/global/withPageMetadata';
import Link from 'next/link'
import Conference from '../config/conference';
import { PanelGroup, Panel } from 'react-bootstrap';
import Faqs from '../config/faqs';

export default withPageMetadata(() =>
  <Page title="FAQs" description={"Frequently asked questions for the "+Conference.Name+" conference."}>
    <h1>FAQs</h1>
    <PanelGroup accordion className="accordion" id="faqs-accordion">
      {Faqs.map((faq, i) => <Panel eventKey={i} key={i}>
        <Panel.Heading>
          <Panel.Title toggle>{faq.Question}</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          {faq.Answer
            ? <p>{faq.Answer}</p>
            : <Fragment>{faq.AnswerWithoutParagraph}</Fragment>
          }
        </Panel.Body>
      </Panel>)}
    </PanelGroup>
  </Page>
);
