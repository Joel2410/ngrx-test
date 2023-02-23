import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';

import { UserService } from 'src/app/shared/services/user/user.service';
import { UsersActions } from 'src/app/shared/state/actions/users.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor(private store: Store, private userService: UserService) {}

  public ngOnInit(): void {
    this.items = [
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
            command: () => {
              this.addUser();
            }
          }
        ]
      }
    ];
  }

  public addUser(): void {
    this.userService.getUsers(1).subscribe((users) => {
      this.store.dispatch(UsersActions.addUserSuccess({ user: users[0] }));
    });
  }
}
