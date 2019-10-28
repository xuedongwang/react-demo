import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import dayjs from 'dayjs';

import rootReducer from './reducers';
import rootSaga from './actions/sagas';
import http from '@/utils/http';

import App from './App';

import '@/assets/scss/index.scss';
// import VConsole from 'vconsole';
// // eslint-disable-next-line
// new VConsole();

window.$date = dayjs;
window.$http = http;

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  collapsed: true,
  duration: true,
  level: 'warn',
  diff: true
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware, logger),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
