import {
  SET_HOT_TAGS
} from '@/actions/actionTypes';
const initState = [];
function articles (state = initState, action) {
  switch (action.type) {
    case SET_HOT_TAGS:
      return action.data;
    default:
      return state;
  }
}

export default articles;
