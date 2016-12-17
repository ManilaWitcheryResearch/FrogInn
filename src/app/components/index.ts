import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    LoginFormComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    LoginFormComponent,
  ]
})
export class ComponentModule {};

export { LoginFormComponent } from './login-form/login-form.component';
