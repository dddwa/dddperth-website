import * as React from 'react'
import Meta from '../components/global/meta';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import { Fragment, StatelessComponent } from 'react';

const Main : StatelessComponent<any> = ({ children }) => (
  <Fragment>
    <Meta />
    <Header />
    { children }
    <Footer />
  </Fragment>
);

export default Main;