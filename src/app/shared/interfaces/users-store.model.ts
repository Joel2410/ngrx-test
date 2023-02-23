import { UserModel } from './user.model';

export interface UsersStoreModel {
  loading: boolean;
  users: ReadonlyArray<UserModel>;
}
