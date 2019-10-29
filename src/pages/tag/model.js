import * as Api from '@/api';

const model = {
  namespace: 'category',

  state: {
    category: {
      list: []
    }
  },
  reducers: {
    setCategory (state, payload) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.category = payload.data;
      return newState;
    }
  },

  effects: {
    * fetchCategory ({ payload }, { call, put }) {
      const data = yield call(Api.fetchCategory);
      yield put({ type: 'setCategory', data });
    }
  }

};

export default model;
