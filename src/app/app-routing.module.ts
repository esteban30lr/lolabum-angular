import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { loginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { TestComponent } from './components/test/test.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CompraComponent } from './components/compra/compra.component';

const routes: Routes = [
    {
        path: '',
        component: loginComponent
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'index',
        component: TestComponent
    },
    {
        path: 'productos',
        component: ProductoComponent
    },
    {
        path: 'compra',
        component: CompraComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }