import { combineReducers } from 'redux';
import { counterReducer } from '../reducers/counterReducer';
import { usersReducer } from '../reducers/usersReducer';
import { commentsReducer } from '../reducers/commentsReducer';
import { postsReducer } from '../reducers/postsReducer';
import { allNewsReducer } from '../reducers/allNewsReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  comments: commentsReducer,
  posts: postsReducer,
  allNews: allNewsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
