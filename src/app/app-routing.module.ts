import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { loginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
    {
        path: '',
        component: loginComponent
    },
    {
        path:'main',
        component: MainComponent
    },
    {
        path:'index',
        component: IndexComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }