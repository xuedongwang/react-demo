import * as Api from '@/api';

const model = {
  namespace: 'archives',

  state: {
    archives: {
      list: []
    }
  },
  reducers: {
    setArchives (state, payload) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.archives = payload.data;
      return newState;
    }
  },

  effects: {
    * fetchArchives ({ payload }, { call, put }) {
      const data = yield call(Api.fetchArchives);
      yield put({ type: 'setArchives', data });
    }
  }

};

export default model;
