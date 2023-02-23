import { createSelector, createFeatureSelector } from '@ngrx/store';

import { UsersStoreModel } from '../../interfaces/users-store.model';

export const selectUsersStore = createFeatureSelector<UsersStoreModel>('usersStore');

export const selectUserList = createSelector(selectUsersStore, (usersStore) => usersStore.users);

export const selectLoading = createSelector(selectUsersStore, (usersStore) => usersStore.loading);
