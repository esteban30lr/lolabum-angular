import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { loginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './components/index/index.component';
import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './components/producto/producto.component';
import { CompraComponent } from './components/compra/compra.component';
import { IniciarComponent } from './components/iniciar/iniciar.component';


import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    MainComponent,
    HeaderComponent,
    IndexComponent,
    TestComponent,
    ProductoComponent,
    CompraComponent,
    IniciarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
