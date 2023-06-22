import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
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
        web: null,
        direccion : null
    }

    constructor(private php: PhpService, private router: Router) {
        this.comentario = "Iniciar sesión"
        this.tituloLogin = "Inicie sesión"
        this.noCuenta = "No tienes cuenta?"
        console.log(this.comentario);
    }
    ngOnInit(): void {
        console.log(this.usuario);
    }

    Iniciar() {
        this.php.crearAdmin(this.usuario).subscribe((res: any) => {
            console.log(res);
            this.estado = "";
            if(res.resultado == "OK"){
                this.estado = "USUARIO REGISTRADO";
                alert(this.estado);
                this.router.navigate(['/iniciar']);
            }else{
                this.estado = "ERROR AL INICIAR SESION"
                alert(this.estado);
            }
        });
        console.log(this.usuario);
    }
}