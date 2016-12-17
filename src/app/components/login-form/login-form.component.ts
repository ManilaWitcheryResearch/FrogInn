import { NgForm } from '@angular/forms/src/directives';
import { ViewChild } from '@angular/core/src/metadata/di';
import { Observable } from 'rxjs/Rx';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'login-form',
  template: require('./login-form.template.html'),
})
export class LoginFormComponent {
  @Input() @Output() user: { name: String, password: String };
  @ViewChild('loginForm') currentForm: NgForm;
  loginFrom: NgForm;
}
