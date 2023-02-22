import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';

import { UsersComponent } from './users.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [UsersComponent, HeaderComponent, UserListComponent, UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    SharedModule
  ],
  providers: [HttpClient]
})
export class UsersModule {}