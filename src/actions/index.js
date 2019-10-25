import {
  FETCH_ARTICLES_ASYNC,
  SET_ARTICLES,
  FETCH_HOT_TAGS_ASYNC,
  SET_HOT_TAGS,
  FETCH_CATEGORY_ASYNC,
  SET_CATEGORY,
  FETCH_TAGS_ASYNC,
  SET_TAGS,
  FETCH_ARCHIVES_ASYN,
  SET_ARCHIVES,
  FETCH_ARTICLE_ASYN,
  SET_ARTICLE,
  FETCH_ARTICLE_COMMENTS_ASYN,
  SET_COMMENTS
} from '@/actions/actionTypes';

export const fetchArticlesAsync = () => {
  return {
    type: FETCH_ARTICLES_ASYNC
  };
};
export const setArticles = (payload) => {
  return {
    type: SET_ARTICLES,
    payload
  };
};

export const fetchHotTagsAsync = () => {
  return {
    type: FETCH_HOT_TAGS_ASYNC
  };
};
export const setHotTags = (payload) => {
  return {
    type: SET_HOT_TAGS,
    payload
  };
};

export const fetchCategoryAsync = () => {
  return {
    type: FETCH_CATEGORY_ASYNC
  };
};
export const setCategory = (payload) => {
  return {
    type: SET_CATEGORY,
    payload
  };
};

export const fetchTagsAsync = () => {
  return {
    type: FETCH_TAGS_ASYNC
  };
};
export const setTags = (payload) => {
  return {
    type: SET_TAGS,
    payload
  };
};

export const fetchArchivesAsync = () => {
  return {
    type: FETCH_ARCHIVES_ASYN
  };
};
export const setArchives = (payload) => {
  return {
    type: SET_ARCHIVES,
    payload
  };
};

export const fetchArticleContentAsync = () => {
  return {
    type: FETCH_ARTICLE_ASYN
  };
};
export const setArticle = (payload) => {
  return {
    type: SET_ARTICLE,
    payload
  };
};

export const fetchArticleCommentsAsync = () => {
  return {
    type: FETCH_ARTICLE_COMMENTS_ASYN
  };
};
export const setComments = (payload) => {
  return {
    type: SET_COMMENTS,
    payload
  };
};
