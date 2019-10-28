import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'dva/router';

import style from './style';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackTop from '@/components/BackTop';

class DefaultLayout extends Component {
  render () {
    const { Component, ...rest } = this.props;
    console.log('rest', rest);
    return (
      <Route
        { ...rest }
        render={routeProps => (
          <Fragment>
            <Header></Header>
            <div className={ style.defaultLayoutView }>
              <Component {...routeProps} />
              <Footer></Footer>
            </div>
            <BackTop></BackTop>
          </Fragment>
        )}
      />
    );
  }
}

DefaultLayout.propTypes = {
  Component: PropTypes.any
};

export default DefaultLayout;
