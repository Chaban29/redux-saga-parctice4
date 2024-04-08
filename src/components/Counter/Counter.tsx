import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  counterDecrementCreator,
  counterIncrementCreator,
} from '../../redux/actionCreators/counterCreator';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counter = useAppSelector((state) => state.counter.count);
  const handleIncreaseCounter = () => {
    dispatch(counterIncrementCreator(100));
  };
  const handleDecreaseCounter = () => {
    if (!counter) return;
    dispatch(counterDecrementCreator(50));
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncreaseCounter}>Increment count</button>
      <button onClick={handleDecreaseCounter}>Decrement count</button>
    </div>
  );
};
