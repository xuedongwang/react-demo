import * as Api from '@/api';

const model = {
  namespace: 'about',

  state: {
    article: {
      tags: []
    },
    comments: {
      list: []
    }
  },
  reducers: {
    setCommentList (state, payload) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.comments = payload.data;
      return newState;
    },
    setArticleInfo (state, payload) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.article = payload.data;
      return newState;
    }
  },

  effects: {
    * fetchArticleContent ({ payload }, { call, put }) {
      const data = yield call(Api.fetchArticle);
      yield put({ type: 'setArticleInfo', data });
    },
    * fetchArticleComments ({ payload }, { call, put }) {
      const data = yield call(Api.fetchComments);
      yield put({ type: 'setCommentList', data });
    }
  }

};

export default model;
