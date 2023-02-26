import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserModel } from 'src/app/shared/interfaces/user.model';
import { UsersActions } from 'src/app/shared/state/actions/users.actions';
import { selectIsEdit } from 'src/app/shared/state/selectors/users.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() public user: UserModel | undefined;

  public isEdit$: Observable<boolean> = new Observable();

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.isEdit$ = this.store.select(selectIsEdit);
  }

  public editUser(): void {
    if (this.user?.uuid) this.store.dispatch(UsersActions.updateUser({ user: this.user }));
  }

  public deleteUser(): void {
    if (this.user?.uuid) this.store.dispatch(UsersActions.removeUser({ uuid: this.user.uuid }));
  }
}
