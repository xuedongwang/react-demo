import * as Api from '@/api';

const model = {
  namespace: 'search',

  state: {
    tags: {
      list: []
    }
  },

  reducers: {
    setTags (state, payload) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.tags = payload.data;
      return newState;
    }
  },

  effects: {
    * fetchTags ({ payload }, { call, put }) {
      const data = yield call(Api.fetchTags);
      yield put({ type: 'setTags', data });
    }
  }

};

export default model;
