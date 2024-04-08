import { IComment } from '../interfaces/comments';

export type TypeComments = {
  comments: IComment[];
};

export const enum CommentsActions {
  SET_COMMENTS = 'comments/setComments',
}

export type TypeCommentsActions = {
  type: CommentsActions.SET_COMMENTS;
  payload: IComment[];
};
