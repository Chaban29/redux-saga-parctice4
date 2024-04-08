import { IPost } from '../../interfaces/posts';
import { PopularPostsAction, TypePopularPosts } from '../../types/posts-types';

const initialState: IPost[] = [];

export const postsReducer = (
  state = initialState,
  { type, payload }: TypePopularPosts
) => {
  switch (type) {
    case PopularPostsAction.SET_POPULAR_POSTS:
      return [...state, ...payload];
    default:
      return state;
  }
};
