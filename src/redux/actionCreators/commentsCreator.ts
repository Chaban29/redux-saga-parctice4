import { IComment } from '../../interfaces/comments';
import { CommentsActions } from '../../types/comments-types';

export const commentsCreator = (payload: IComment[]) => ({
  type: CommentsActions.SET_COMMENTS,
  payload,
});
