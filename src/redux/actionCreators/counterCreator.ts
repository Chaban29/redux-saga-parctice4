import { CounterActions } from '../../types/counter-types';

export const counterIncrementCreator = (payload: number) => ({
  type: CounterActions.COUNTER_INCREMENT,
  payload,
});

export const counterDecrementCreator = (payload: number) => ({
  type: CounterActions.COUNTER_DECREMENT,
  payload,
});
