import { call, put, takeEvery } from 'redux-saga/effects';
import { getPopularPosts } from '../api/getPosts';
import { getComments } from '../api/getComments';
import { AllNewsAction } from '../types/posts-comments';

export function* handleSetPosts(): Generator {
  try {
    const popularPosts = yield call(getPopularPosts);
    yield put({
      type: AllNewsAction.SET_POPULAR_POSTS_FAILURE,
      payload: popularPosts,
    });
  } catch (error) {
    yield put({
      type: AllNewsAction.SET_POPULAR_POSTS_FAILURE,
    });
  }
}

export function* handleSetComments(): Generator {
  try {
    const comments = yield call(getComments, 'comments');
    yield put({ type: AllNewsAction.SET_COMMENTS_SUCCESS, payload: comments });
  } catch (error) {
    yield put({
      type: AllNewsAction.SET_COMMENTS_FAILURE,
    });
  }
}

export function* allNewsWatcher() {
  yield takeEvery(AllNewsAction.SET_ALL_POSTS_COMMENTS, handleSetPosts);
  yield takeEvery(AllNewsAction.SET_ALL_POSTS_COMMENTS, handleSetComments);
}

export function* allNewsSaga() {
  yield allNewsWatcher();
}
