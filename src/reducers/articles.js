import {
  SET_ARTICLES
} from '@/actions/actionTypes';
const initState = {
  list: []
};
function articles (state = initState, action) {
  switch (action.type) {
    case SET_ARTICLES:
      return action.data;
    default:
      return state;
  }
}

export default articles;
