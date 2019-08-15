import {
  SET_ARCHIVES
} from '@/actions/actionTypes';
const initState = [];
function archives (state = initState, action) {
  switch (action.type) {
    case SET_ARCHIVES:
      return action.data;
    default:
      return state;
  }
}

export default archives;
