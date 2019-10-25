import { takeEvery, all, call, put } from 'redux-saga/effects';
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

import * as Api from '@/api';

function * fetchArticlesAsync () {
  try {
    const data = yield call(Api.fetchArticles);
    yield put({ type: SET_ARTICLES, data });
  } catch (error) {
    throw error;
  }
}
function * watchFetchArticlesAsync () {
  yield takeEvery(FETCH_ARTICLES_ASYNC, fetchArticlesAsync);
};

function * fetchHotTagsAsync () {
  try {
    const data = yield call(Api.fetchHotTags);
    yield put({ type: SET_HOT_TAGS, data });
  } catch (error) {
    throw error;
  }
}
function * watchFetchHotTagsAsync () {
  yield takeEvery(FETCH_HOT_TAGS_ASYNC, fetchHotTagsAsync);
};

function * fetchCategoryAsync () {
  try {
    const data = yield call(Api.fetchCategory);
    yield put({ type: SET_CATEGORY, data });
  } catch (error) {
    throw error;
  }
}
function * watchFetchCategoryAsync () {
  yield takeEvery(FETCH_CATEGORY_ASYNC, fetchCategoryAsync);
};

function * fetchTagsAsync () {
  try {
    const data = yield call(Api.fetchTags);
    yield put({ type: SET_TAGS, data });
  } catch (error) {
    throw error;
  }
}
function * watchFetchTagsAsync () {
  yield takeEvery(FETCH_TAGS_ASYNC, fetchTagsAsync);
};

function * fetchArchivesAsync () {
  try {
    const data = yield call(Api.fetchArchives);
    yield put({ type: SET_ARCHIVES, data });
  } catch (error) {
    throw error;
  }
}
function * watchFetchArchivesAsync () {
  yield takeEvery(FETCH_ARCHIVES_ASYN, fetchArchivesAsync);
};

function * fetchArticleAsync () {
  try {
    const data = yield call(Api.fetchArticle);
    yield put({ type: SET_ARTICLE, data });
  } catch (error) {
    throw error;
  }
}
function * watchFetchArticleAsync () {
  yield takeEvery(FETCH_ARTICLE_ASYN, fetchArticleAsync);
};

function * fetchArticleCommentsAsync () {
  try {
    const data = yield call(Api.fetchComments);
    yield put({ type: SET_COMMENTS, data });
  } catch (error) {
    throw error;
  }
}
function * watchFetchArticleCommentsAsync () {
  yield takeEvery(FETCH_ARTICLE_COMMENTS_ASYN, fetchArticleCommentsAsync);
};

export default function * rootSaga () {
  yield all([
    watchFetchArticlesAsync(),
    watchFetchHotTagsAsync(),
    watchFetchCategoryAsync(),
    watchFetchTagsAsync(),
    watchFetchArchivesAsync(),
    watchFetchArticleAsync(),
    watchFetchArticleCommentsAsync()
  ]);
}
