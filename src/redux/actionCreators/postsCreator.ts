import { IPost } from '../../interfaces/posts';
import { PopularPostsAction } from '../../types/posts-types';

export const setPopularPostsCreator = (payload: IPost[]) => ({
  type: PopularPostsAction.SET_POPULAR_POSTS,
  payload,
});
