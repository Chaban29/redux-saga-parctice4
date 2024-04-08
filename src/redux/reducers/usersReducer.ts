import { IUser } from '../../interfaces/user';
import { TypeUsersActions, UsersActions } from '../../types/users-types';

const initialState: IUser[] = [];

export const usersReducer = (
  state = initialState,
  { type, payload }: TypeUsersActions
) => {
  switch (type) {
    case UsersActions.GET_USERS:
      return [...state, ...payload];
    default:
      return state;
  }
};
