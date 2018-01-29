import * as React from 'react';
import { StatelessComponent } from 'react';
import { Row, Grid, Col } from 'react-bootstrap';
import {MenuItem, Socials, Conference} from '../../config/types';
import FooterNav from './footerNav';
import SocialLinks from './socialLinks';

interface FooterArgs {
  menu : MenuItem[];
  socials : Socials;
  conference : Conference;
}

const Footer : StatelessComponent<FooterArgs> = ({menu, socials, conference}) =>
<footer>
  <Grid>
    <Row>
      <Col xs={12}>
        <FooterNav menu={menu} />
      </Col>
      <Col xs={12}>
        <SocialLinks socials={socials} />
      </Col>
      <Col xs={12} className="copyright">
        Copyright &copy; {(new Date()).getFullYear()} {conference.Organiser}
      </Col>
    </Row>
  </Grid>
</footer>;

export default Footer;
