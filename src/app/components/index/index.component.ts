import { Component, OnInit } from '@angular/core';
import { PhpService } from 'src/app/services/php.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  tittle = 'VISTA DE USUARIOS'

  usuarios:any;

  usuario = {
    id : null,
    contraseña: null,
    nombre: null,
    telefono: null,
    correo: null
  }

  constructor(private phpservide: PhpService) { }

  ngOnInit(): void {

  }
  hayRegistros(){
    return true;
  }
  MostrarTodo(){
    this.phpservide.mostrarTodo().subscribe(result => this.usuarios = result);
  }
  Agregar(){

  }


}
