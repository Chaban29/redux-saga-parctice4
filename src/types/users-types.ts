import { IUser } from '../interfaces/user';

export const enum UsersActions {
  GET_USERS = 'users/getUsers',
}

export type TypeUsersActions = {
  type: UsersActions.GET_USERS;
  payload: IUser[];
};
