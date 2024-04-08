import { select, takeLatest, takeLeading } from 'redux-saga/effects';
import { CounterActions } from '../types/counter-types';

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms * 1000));

export function* incrementWorker(): Generator<any, void, any> {
  const count = yield select(({ counter }) => counter.count);
  yield delay(2);
  yield console.log(`request ${count}`);
}
export function* decrementWorker() {}

export function* counterWatcher() {
  yield takeLatest(CounterActions.COUNTER_INCREMENT, incrementWorker);
  yield takeLeading(CounterActions.COUNTER_INCREMENT, incrementWorker);
}

export function* counterSaga() {
  yield counterWatcher();
}
