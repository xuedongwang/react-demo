import {
  SET_ARTICLE
} from '@/actions/actionTypes';
const initState = {
  tags: []
};
function article (state = initState, action) {
  switch (action.type) {
    case SET_ARTICLE:
      return action.data;
    default:
      return state;
  }
}

export default article;
