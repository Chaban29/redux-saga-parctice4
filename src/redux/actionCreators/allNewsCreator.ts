import { IPost } from '../../interfaces/posts';
import { IComment } from '../../interfaces/comments';
import { AllNewsAction } from '../../types/posts-comments';

export interface IAllNewsPayload {
  posts: IPost[];
  comments: IComment[];
}

export const allNewsCreator = (payload: IAllNewsPayload) => ({
  type: AllNewsAction.SET_ALL_POSTS_COMMENTS,
  payload,
});
