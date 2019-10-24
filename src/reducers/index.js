import { combineReducers } from 'redux';
import global from './global';
import articles from './articles';
import article from './article';
import hotTags from './hotTags';
import category from './category';
import tags from './tags';
import archives from './archives';
import comments from './comments';

const rootReducer = combineReducers({
  global,
  articles,
  article,
  hotTags,
  category,
  tags,
  archives,
  comments
});

export default rootReducer;
