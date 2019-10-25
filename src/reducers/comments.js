import {
  SET_COMMENTS
} from '@/actions/actionTypes';
const initState = {};
function archives (state = initState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return action.data;
    default:
      return state;
  }
}

export default archives;
