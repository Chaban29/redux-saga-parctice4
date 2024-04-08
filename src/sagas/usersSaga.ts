import { takeEvery } from 'redux-saga/effects';
import { getUsers } from '../api/getUsers';
import { UsersActions } from '../types/users-types';

export function* getUsersWorker(): Generator {
  const data = yield getUsers();
  yield console.log(data);
}

export function* getUsersWatcher() {
  yield takeEvery(UsersActions.GET_USERS, getUsersWorker);
}

export function* usersSaga() {
  yield getUsersWatcher();
}
