import {
  CommentsActions,
  TypeComments,
  TypeCommentsActions,
} from '../../types/comments-types';

const initialState: TypeComments = {
  comments: [],
};

export const commentsReducer = (
  state = initialState,
  { type, payload }: TypeCommentsActions
) => {
  switch (type) {
    case CommentsActions.SET_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, ...payload],
      };
    default:
      return state;
  }
};
