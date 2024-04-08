import {
  AllNewsAction,
  IAllNews,
  TypeAllNewsAction,
} from '../../types/posts-comments';

const initialState: IAllNews = {
  posts: [],
  comments: [],
};

export const allNewsReducer = (
  state = initialState,
  { type, payload }: TypeAllNewsAction
) => {
  switch (type) {
    case AllNewsAction.SET_ALL_POSTS_COMMENTS:
      return {
        ...state,
        posts: [...state.posts, ...payload.posts],
        comments: [...state.comments, ...payload.comments],
      };
    default:
      return state;
  }
};
