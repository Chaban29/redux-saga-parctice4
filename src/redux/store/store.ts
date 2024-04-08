import { createStore, applyMiddleware, Reducer } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from '../rootReducer/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer as Reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
