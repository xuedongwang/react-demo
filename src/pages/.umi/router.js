import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/404',
        exact: true,
        component: require('../404.jsx').default,
      },
      {
        path: '/a/model',
        exact: true,
        component: require('../a/model.js').default,
      },
      {
        path: '/a/:id',
        exact: true,
        component: require('../a/$id.jsx').default,
      },
      {
        path: '/about',
        exact: true,
        component: require('../about/index.jsx').default,
      },
      {
        path: '/about/model',
        exact: true,
        component: require('../about/model.js').default,
      },
      {
        path: '/archives',
        exact: true,
        component: require('../archives/index.jsx').default,
      },
      {
        path: '/archives/model',
        exact: true,
        component: require('../archives/model.js').default,
      },
      {
        path: '/',
        exact: true,
        component: require('../index/index.jsx').default,
      },
      {
        path: '/index/model',
        exact: true,
        component: require('../index/model.js').default,
      },
      {
        path: '/search',
        exact: true,
        component: require('../search/index.jsx').default,
      },
      {
        path: '/search/model',
        exact: true,
        component: require('../search/model.js').default,
      },
      {
        path: '/tag/model',
        exact: true,
        component: require('../tag/model.js').default,
      },
      {
        path: '/tag/:id',
        exact: true,
        component: require('../tag/$id.jsx').default,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/well/Desktop/blog/react-demo/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/well/Desktop/blog/react-demo/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
