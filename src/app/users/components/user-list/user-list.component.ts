import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserModel } from 'src/app/shared/interfaces/user.model';
import { selectUserList } from 'src/app/shared/state/selectors/users.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users$: Observable<ReadonlyArray<UserModel>> = new Observable();

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.users$ = this.store.select(selectUserList);
  }
}
