import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
const loginRoute: Routes = [
  { path: 'login', component: LoginComponent},
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(loginRoute),
  ],
  declarations: [
    LoginComponent
  ],
})
export class LoginModule {}
