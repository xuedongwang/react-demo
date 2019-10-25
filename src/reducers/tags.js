import {
  SET_TAGS
} from '@/actions/actionTypes';
const initState = {
  list: []
};
function tags (state = initState, action) {
  switch (action.type) {
    case SET_TAGS:
      return action.data;
    default:
      return state;
  }
}

export default tags;
