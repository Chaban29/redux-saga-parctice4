export const enum CounterActions {
  COUNTER_INCREMENT = 'counter/increment',
  COUNTER_DECREMENT = 'counter/decrement',
}

export type TypeCounterActions =
  | { type: CounterActions.COUNTER_INCREMENT; payload: number }
  | { type: CounterActions.COUNTER_DECREMENT; payload: number };
