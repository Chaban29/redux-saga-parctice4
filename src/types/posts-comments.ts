import { IComment } from '../interfaces/comments';
import { IPost } from '../interfaces/posts';

export interface IAllNews {
  posts: IPost[];
  comments: IComment[];
}

export const enum AllNewsAction {
  SET_ALL_POSTS_COMMENTS = 'allNews/setAllNews',
  SET_COMMENTS_FAILURE = 'SET_COMMENTS_FAILURE',
  SET_COMMENTS_SUCCESS = 'SET_COMMENTS_SUCCESS',
  SET_POPULAR_POSTS_FAILURE = 'SET_POPULAR_POSTS_FAILURE',
}

export type TypeAllNewsAction = {
  type: AllNewsAction.SET_ALL_POSTS_COMMENTS;
  payload: IAllNews;
};
