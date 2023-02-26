import { createReducer, on } from '@ngrx/store';

import { UsersActions } from '../actions/users.actions';
import { UsersStoreModel } from '../../interfaces/users-store.model';

export const initialState: UsersStoreModel = {
  loading: false,
  isEdit: false,
  userToEdit: undefined,
  users: []
};

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
  }),
  on(UsersActions.updateUser, (state, { user }) => {
    return { ...state, isEdit: true, userToEdit: user };
  }),
  on(UsersActions.updateUserSuccess, (state, { user }) => {
    const users = [...state.users];
    if (state.userToEdit) {
      const index = users.indexOf(state.userToEdit);
      users.splice(index, 1, user);
    }

    return { ...state, isEdit: false, userToEdit: undefined, users };
  }),
  on(UsersActions.updateUserCancel, (state) => {
    return { ...state, isEdit: false, userToEdit: undefined };
  })
);
