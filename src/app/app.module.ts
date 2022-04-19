import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { loginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    MainComponent,
    HeaderComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
