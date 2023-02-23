import { createReducer, on } from '@ngrx/store';

import { UsersActions } from '../actions/users.actions';
import { UsersStoreModel } from '../../interfaces/users-store.model';

export const initialState: UsersStoreModel = { loading: false, users: [] };

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.getUserList, (state) => {
    return { ...state, loading: true };
  }),
  on(UsersActions.getUserListSuccess, (state, { users }) => {
    return { ...state, loading: false, users: [...users] };
  }),
  on(UsersActions.removeUser, (state, { uuid }) => {
    return { ...state, users: state.users.filter((user) => user.uuid !== uuid) };
  }),
  on(UsersActions.addUserSuccess, (state, { user }) => {
    if (state.users.find((findUser) => findUser.uuid === user.uuid)) return state;
    return { ...state, users: [...state.users, user] };
  })
);
