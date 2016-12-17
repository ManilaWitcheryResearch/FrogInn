import { State } from '../../store';
import { User, userActions } from '../../store/user';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';

@Component({
  selector: 'login-page',
  template: `
  <login-form [(user)]="user$"></login-form>
  <button (click)="onSubmit()"></button>
`,
})
export class LoginComponent {
  user$ = { name: '', password: '' };
  user: Observable<User>;
  constructor(public store: Store<State>){
    this.user = store.select('user') as Observable<User>;
  }
  toString(obj) {
    return JSON.stringify(obj);
  }

  onSubmit(){
    this.store.dispatch({type: userActions.login, payload: this.user$});
  }
}
