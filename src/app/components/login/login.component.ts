import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { isEmpty } from "rxjs";
import { PhpService } from "src/app/services/php.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class loginComponent implements OnInit {
    public estado: string = "";
    public tituloLogin: string = "";
    public comentario: string = "";
    public noCuenta: String = "";


    usuario = {
        id: null,
        contrasena: null,
        nombre: null,
        telefono: null,
        correo: null
    }

    constructor(private php: PhpService) {
        this.comentario = "Iniciar sesión"
        this.tituloLogin = "Inicie sesión"
        this.noCuenta = "No tienes cuenta?"
        console.log(this.comentario);
    }
    ngOnInit(): void {
        console.log(this.usuario);
    }

    Iniciar() {
        this.php.iniciarsesion(this.usuario.id, this.usuario.contrasena).subscribe((res: any) => {
            console.log(res);
            this.estado = "error al iniciar sesion";
            if(res[0] == null || res[0] == undefined){
                console.log("NO HAY NADA");
            }else{
                this.usuario=res[0];
                this.estado = "BIENVENIDO: "+this.usuario.nombre;
            }
        });
        console.log(this.usuario);
    }

    ReiniciarUsuario() {
        this.usuario = {
            id: null,
            contrasena: null,
            nombre: null,
            telefono: null,
            correo: null
        }
        console.log(this.usuario);
        this.estado = "";
    }

    MostrarUsuario(){
        console.log(this.usuario);
    }
}