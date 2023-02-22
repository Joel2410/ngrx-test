import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  public loadingUsers = true;

  constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getUsers().subscribe((data: any) => {
      data.results.forEach((user: any) => {
        this.users.push({
          uuid: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          address: `${user.location.city}, ${user.location.state}, ${user.location.country}`,
          email: user.email,
          avatar: user.picture.large
        });
      });
    });
    this.loadingUsers = false;
  }

  public deleteUser(userToDele: User): void {
    //this.userService.deleteUser(userToDele);
    this.users = this.users.filter((user) => user.uuid !== userToDele.uuid);
  }
}
