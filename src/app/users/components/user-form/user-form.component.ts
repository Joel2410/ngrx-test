import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectIsEdit, selectUserToEdit } from 'src/app/shared/state/selectors/users.selectors';
import { UserModel } from 'src/app/shared/interfaces/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersActions } from 'src/app/shared/state/actions/users.actions';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public isEdit$: Observable<boolean> = new Observable();
  public user$: Observable<UserModel | undefined> = new Observable();
  public isEdit: boolean | undefined;
  public user: UserModel | undefined;

  public userForm: FormGroup;

  get actionForm(): string {
    return this.isEdit ? 'Update' : 'Save';
  }

  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.userForm = this.buildForm();
  }

  public ngOnInit(): void {
    this.isEdit$ = this.store.select(selectIsEdit);
    this.user$ = this.store.select(selectUserToEdit);

    this.isEdit$.subscribe((isEdit) => {
      this.isEdit = isEdit;

      if (isEdit) {
        this.user$.subscribe((user) => {
          this.user = user;
          if (user) {
            this.userForm.patchValue(user);
          }
        });
      }
    });
  }

  public onSubmit(): void {
    if (this.user) {
      const uuid = this.user.uuid;
      const { name, address, email, avatar } = this.userForm.value;
      this.store.dispatch(
        UsersActions.updateUserSuccess({
          user: {
            uuid,
            name,
            address,
            email,
            avatar
          }
        })
      );
    }
  }

  public onCancel(): void {
    this.store.dispatch(UsersActions.updateUserCancel());
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      avatar: ['', [Validators.required]]
    });
  }
}
