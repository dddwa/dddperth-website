import * as React from 'react'
import Meta from '../components/global/meta';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import { Fragment, StatelessComponent } from 'react';

interface MainArgs {
  isHome? : boolean;
}

const Main : StatelessComponent<MainArgs> = ({ children, isHome }) => (
  <Fragment>
    <Meta />
    <Header isHome={isHome} />
    { children }
    <Footer />
  </Fragment>
);

export default Main;