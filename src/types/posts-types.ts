import { IPost } from '../interfaces/posts';

export const enum PopularPostsAction {
  SET_POPULAR_POSTS = 'posts/setPopularPosts',
}

export type TypePopularPosts = {
  type: PopularPostsAction.SET_POPULAR_POSTS;
  payload: IPost[];
};
