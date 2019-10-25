import {
  SET_CATEGORY
} from '@/actions/actionTypes';
const initState = {
  list: []
};
function category (state = initState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return action.data;
    default:
      return state;
  }
}

export default category;
