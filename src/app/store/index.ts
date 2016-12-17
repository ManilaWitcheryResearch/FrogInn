// eg https://github.com/ngrx/example-app/blob/0bd88242cadf243bdbec581417a833b5add6d14a/src/app/reducers/index.ts

import * as user from './user';
import { EffectsModule } from '@ngrx/effects';

export const reducers = {
  user: user.reducer,
}

export const effects = [
  () => EffectsModule.run(user.UserEffects),
  // () => EffectsModule.runAfterBootstrap(user.UserEffects),
]

export const actions = {
  user: user.userActions,
};

export interface State {
  user: user.User;
}
