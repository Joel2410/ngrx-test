import { createActionGroup, props } from '@ngrx/store';

import { UserModel } from '../../interfaces/user.model';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'Add User': props<any>(),
    'Add User Success': props<{ user: UserModel }>(),
    'Remove User': props<{ uuid: string }>(),
    'Get User List': props<any>(),
    'Get User List Success': props<{ users: ReadonlyArray<UserModel> }>(),
    'Update User': props<{ user: UserModel }>(),
    'Update User Cancel': props<any>(),
    'Update User Success': props<{ user: UserModel }>()
  }
});
