import { takeEvery, call } from 'redux-saga/effects';
import { getComments } from '../api/getComments';
import { CommentsActions } from '../types/comments-types';

export function* getCommentsWorker() {
  yield call(getComments, 'comments');
}

export function* getCommentsWatcher() {
  yield takeEvery(CommentsActions.SET_COMMENTS, getCommentsWorker);
}

export function* CommentsSaga() {
  yield getCommentsWatcher();
}
