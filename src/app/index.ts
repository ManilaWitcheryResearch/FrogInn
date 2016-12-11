import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing, RootComponent} from './routes';
import { HttpModule }    from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import {AppComponent} from './containers/app';
import { LoginModule } from './containers/login/login.module';

import { AppConfigProvider } from './constants/app-config';
import { reducers, effects } from './store';
const imports = [
    BrowserModule,
    HttpModule,
    FormsModule,
    LoginModule,
    routing,
];

if(process.env.NODE_ENV !== 'production')
  imports.push(StoreDevtoolsModule.instrumentOnlyWithExtension())

@NgModule({
  imports:[
    ...imports,
    ...effects.map(fn => fn()),
    StoreModule.provideStore(reducers),
  ],
  declarations: [
    RootComponent,
    AppComponent
  ],
  providers: [
    AppConfigProvider
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
