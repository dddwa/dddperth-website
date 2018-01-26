import * as React from 'react';
import { Row, Grid, Col } from 'react-bootstrap';
import FooterNav from './footerNav';
import Socials from './socials';
import Conference from '../../config/conference';

export default () =>
<footer>
  <Grid>
    <Row>
      <Col xs={12}>
        <FooterNav />
      </Col>
      <Col xs={12}>
        <Socials />
      </Col>
      <Col xs={12} className="copyright">
        Copyright &copy; {(new Date()).getFullYear()} {Conference.Organiser}
      </Col>
    </Row>
  </Grid>
</footer>