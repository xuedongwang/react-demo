import React from 'react';
import PropTypes from 'prop-types';
import { Router, Switch } from 'dva/router';
import DefaultLayout from '@/layouts/DefaultLayout';
import routes from '@/router/routes';

const App = (props) => (
  <Router { ...props }>
    <Switch>
      {
        routes.map(route => (
          <DefaultLayout
            key={route.key}
            exact={route.exact}
            path={route.path}
            Component={ route.component }
          />
        ))
      }
    </Switch>
  </Router>
);

App.propTypes = {
  props: PropTypes.obj
};

export default App;
