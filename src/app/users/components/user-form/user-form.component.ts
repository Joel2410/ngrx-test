import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/shared/services/user/user.service';
import { selectIsEdit, selectUserToEdit } from 'src/app/shared/state/selectors/users.selectors';
import { UserModel } from 'src/app/shared/interfaces/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public isEdit$: Observable<boolean> = new Observable();
  public user$: Observable<UserModel | undefined> = new Observable();

  constructor(private store: Store, private userService: UserService) {}

  public ngOnInit(): void {
    this.isEdit$ = this.store.select<boolean>(selectIsEdit);
    this.user$ = this.store.select<UserModel | undefined>(selectUserToEdit);
  }
}
