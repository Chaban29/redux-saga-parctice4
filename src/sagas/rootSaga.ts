import { all } from 'redux-saga/effects';
import { counterSaga } from './counterSaga';
import { usersSaga } from './usersSaga';
import { CommentsSaga } from './commentsSaga';
import { popularPostsSaga } from './popularPostsSaga';
import { allNewsSaga } from './allNewsSaga';

export function* rootSaga() {
  yield all([
    counterSaga(),
    usersSaga(),
    CommentsSaga(),
    popularPostsSaga(),
    allNewsSaga(),
  ]);
}
