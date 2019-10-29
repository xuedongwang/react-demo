import * as Api from '@/api';

const model = {
  namespace: 'home',
  state: {
    articles: {
      list: []
    },
    hotTags: {
      list: []
    }
  },
  reducers: {
    setArticles (state, payload) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.articles = payload.data;
      return newState;
    },
    setHotTags (state, payload) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.hotTags = payload.data;
      return newState;
    }
  },
  effects: {
    * fetchArticles ({ payload }, { call, put }) {
      const data = yield call(Api.fetchArticles);
      yield put({ type: 'setArticles', data });
    },
    * fetchHotTags ({ payload }, { call, put }) {
      const data = yield call(Api.fetchHotTags);
      yield put({ type: 'setHotTags', data });
    }
  }

};

export default model;
