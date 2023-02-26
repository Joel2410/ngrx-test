import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserModel } from '../shared/interfaces/user.model';
import { UsersActions } from '../shared/state/actions/users.actions';
import { selectIsEdit, selectLoading } from '../shared/state/selectors/users.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public isEdit$: Observable<boolean> = new Observable();
  public loadingUsers$: Observable<boolean> = new Observable();

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.isEdit$ = this.store.select(selectIsEdit);
    this.loadingUsers$ = this.store.select(selectLoading);

    this.getUsers();
  }

  private getUsers(): void {
    this.store.dispatch(UsersActions.getUserList());
  }

  public deleteUser(user: UserModel): void {
    this.store.dispatch(UsersActions.removeUser({ uuid: user.uuid }));
  }
}
