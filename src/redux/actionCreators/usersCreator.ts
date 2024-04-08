import { IUser } from '../../interfaces/user';
import { UsersActions } from '../../types/users-types';

export const usersCreator = (payload: IUser[]) => ({
  type: UsersActions.GET_USERS,
  payload,
});
