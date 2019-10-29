import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  app.use(require('/Users/well/Desktop/blog/react-demo/node_modules/dva-immer/dist/index.js')());
  app.model({ namespace: 'global', ...(require('/Users/well/Desktop/blog/react-demo/src/models/global.js').default) });
app.model({ namespace: 'model', ...(require('/Users/well/Desktop/blog/react-demo/src/pages/a/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/well/Desktop/blog/react-demo/src/pages/about/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/well/Desktop/blog/react-demo/src/pages/archives/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/well/Desktop/blog/react-demo/src/pages/index/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/well/Desktop/blog/react-demo/src/pages/search/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/well/Desktop/blog/react-demo/src/pages/tag/model.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
