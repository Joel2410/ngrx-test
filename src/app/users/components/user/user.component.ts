import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserModel } from 'src/app/shared/interfaces/user.model';
import { UsersActions } from 'src/app/shared/state/actions/users.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() public user: UserModel | undefined;

  constructor(private store: Store) {}

  public deleteUser(): void {
    if (this.user?.uuid) this.store.dispatch(UsersActions.removeUser({ uuid: this.user.uuid }));
  }
}
