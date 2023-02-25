import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserModel } from '../shared/interfaces/user.model';
import { UserService } from '../shared/services/user/user.service';
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

  constructor(private store: Store, private userService: UserService) {}

  public ngOnInit(): void {
    this.isEdit$ = this.store.select<boolean>(selectIsEdit);
    this.loadingUsers$ = this.store.select<boolean>(selectLoading);

    this.getUsers();
  }

  private getUsers(): void {
    this.store.dispatch(UsersActions.getUserList());
    this.userService.getUsers().subscribe((users) => {
      this.store.dispatch(UsersActions.getUserListSuccess({ users }));
    });
  }

  public deleteUser(user: UserModel): void {
    this.store.dispatch(UsersActions.removeUser({ uuid: user.uuid }));
  }
}
