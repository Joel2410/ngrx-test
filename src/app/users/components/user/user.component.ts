import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() public user: User | undefined;
  @Output() deleteUserEmit = new EventEmitter<User>();

  public deleteUser(): void {
    this.deleteUserEmit.emit(this.user);
  }
}
