import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() public users: User[] | undefined;
  @Output() deleteUserEmit = new EventEmitter<User>();

  public deleteUser(user: User): void {
    this.deleteUserEmit.emit(user);
  }
}
