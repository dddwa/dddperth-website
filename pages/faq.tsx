import * as React from 'react'
import Page from '../layouts/main';
import {withPageMetadata} from '../components/global/withPageMetadata';
import Link from 'next/link'
import Conference from '../config/conference';
import { PanelGroup, Panel } from 'react-bootstrap';

export default withPageMetadata(() =>
  <Page title="FAQs" description={"Frequently asked questions for the "+Conference.Name+" conference."}>
    <h1>FAQs</h1>
    <PanelGroup accordion className="accordion" id="faqs-accordion">
      <Panel eventKey="1">
        <Panel.Heading>
          <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
          dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
          moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
          butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
          aesthetic synth nesciunt you probably haven't heard of them accusamus
          labore sustainable VHS.</p>
        </Panel.Body>
      </Panel>
      <Panel eventKey="2">
        <Panel.Heading>
          <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
          dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
          moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
          butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
          aesthetic synth nesciunt you probably haven't heard of them accusamus
          labore sustainable VHS.</p>
        </Panel.Body>
      </Panel>
      <Panel eventKey="3">
        <Panel.Heading>
          <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
          dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
          moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
          butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
          aesthetic synth nesciunt you probably haven't heard of them accusamus
          labore sustainable VHS.</p>
        </Panel.Body>
      </Panel>
    </PanelGroup>
  </Page>
);
