import { Component } from "@angular/core";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class loginComponent{
    public tituloLogin: string = "";
    public comentario: string = "";
    public noCuenta: String = "";
    constructor(){
        this.comentario = "Iniciar sesión"
        this.tituloLogin = "Inicie sesión"
        this.noCuenta = "No tienes cuenta?"
        console.log(this.comentario);
    }
}