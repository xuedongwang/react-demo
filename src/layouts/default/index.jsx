import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './style';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackTop from '@/components/BackTop';

class DefaultLayout extends Component {
  render () {
    return (
      <Fragment>
        <Header></Header>
        <div className={ style.defaultLayoutView }>
          { this.props.children }
          <Footer></Footer>
        </div>
        <BackTop></BackTop>
      </Fragment>
    );
  }
};

DefaultLayout.propTypes = {
  children: PropTypes.node
};

export default DefaultLayout;
