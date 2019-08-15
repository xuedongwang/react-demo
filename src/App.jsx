import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DefaultLayout from '@/layouts/default';
import routes from '@/router';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <DefaultLayout>
          <Switch>
            {
              routes.map(route => (
                <Route
                  path={route.path}
                  exact={route.exact}
                  key={route.name}
                  component={route.component}
                />
              ))
            }
          </Switch>
        </DefaultLayout>
      </BrowserRouter>
    );
  }
}

export default App;
