import { ICounter } from '../../interfaces/counter';
import { CounterActions, TypeCounterActions } from '../../types/counter-types';

const initialState: ICounter = { count: 0 };

export const counterReducer = (
  state = initialState,
  { type, payload }: TypeCounterActions
) => {
  switch (type) {
    case CounterActions.COUNTER_INCREMENT:
      return { ...state, count: state.count + payload };
    case CounterActions.COUNTER_DECREMENT:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};
