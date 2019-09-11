import { Fragment } from 'react';
import Headers from './Headers';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = props => {
  return (
    <Fragment>
      <Headers />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
