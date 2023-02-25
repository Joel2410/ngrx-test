import { UserModel } from './user.model';

export interface UsersStoreModel {
  loading: boolean;
  isEdit: boolean;
  userToEdit: UserModel | undefined;
  users: ReadonlyArray<UserModel>;
}
