import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as bcrypt from 'bcrypt';
import { PhpService } from 'src/app/services/php.service';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.css']
})
export class IniciarComponent implements OnInit {
  public estado: string = "";
  public tituloLogin: string = "";
  public comentario: string = "";
  public noCuenta: String = "";


  usuario = {
      id: null,
      contrasena: null
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
      this.php.iniciarsesion(this.usuario).subscribe((res: any) => {
          console.log(res);
          this.estado = "";
          if(res.resultado == "MATCH"){
              this.estado = "USUARIO REGISTRADO...";
              this.router.navigate(['/index']);
              alert(this.estado);
          }else{
              this.estado = "ERROR AL INICIAR SESION"
              alert(this.estado);
          }
      });
      console.log(this.usuario);
  }

}
