import dva from 'dva';
import dayjs from 'dayjs';
import { createBrowserHistory } from 'history';

import http from '@/utils/http';

import '@/assets/scss/index.scss';

window.$date = dayjs;
window.$http = http;

// create app
const app = dva({
  history: createBrowserHistory()
});

// Model
app.model(require('@/pages/home/model.js').default);
app.model(require('@/pages/search/model.js').default);
app.model(require('@/pages/archives/model.js').default);
app.model(require('@/pages/category/model.js').default);
app.model(require('@/pages/article/model.js').default);

// register router
app.router(require('./App.jsx').default);

// // 3. Model
// app.model(require('./models/example').default);

app.start('#app');
