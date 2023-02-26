import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { UserService } from '../../services/user/user.service';

@Injectable()
export class UsersEffects {
  public getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Users] Get User List'),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => ({ type: '[Users] Get User List Success', users })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  public getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Users] Add User'),
      mergeMap(() =>
        this.userService.getUsers(1).pipe(
          map((users) => ({ type: '[Users] Add User Success', user: users[0] })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
