import { ActionReducerMap } from '@ngrx/store';

import { AppStateModel } from '../interfaces/app-state.model';
import { usersReducer } from './reducers/users.reducer';

export const ROOT_REDUCERS: ActionReducerMap<AppStateModel> = {
  usersStore: usersReducer
};
