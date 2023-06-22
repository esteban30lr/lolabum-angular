import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhpService } from 'src/app/services/php.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tittle = 'VISTA DE USUARIOS'

  usuarios=null;

  usuario = {
    id_cliente: null,
    nombre_cliente: null,
    apellido_cliente: null,
    telefono_cliente: null,
    direccion_cliente:null,
    correo_cliente:null
  }

  constructor(private phpservide: PhpService, private router: Router) { }

  ngOnInit() {
    this.MostrarTodo();
  }
  
  MostrarTodo(){
    this.phpservide.mostrarTodo().subscribe((res:any)=>{
      console.log(res);
      this.usuarios = res;
    });
    console.log(this.usuarios);
  }

  Agregar(){
    console.log(this.usuario)
    this.phpservide.agregar(this.usuario).subscribe((res:any)=>{
      console.log(res);
      this.MostrarTodo();
      if(res['resultado'] === 'OK'){
        alert(res['mensaje']);
      }else{
        alert('Ocurrió un problema');
      }
    });
    console.log(this.usuarios);
  }


  Eliminar(id:number){
    this.phpservide.eliminar(id).subscribe(datos =>{
        this.MostrarTodo();
    });
  }

  Seleccionar(id:number){
    this.phpservide.seleccionar(id).subscribe((res:any)=>{
      console.log(res);
      this.usuario = res[0];
    });
    console.log(this.usuarios);
    const element = document.getElementById("login");
    if (element) {
      element.scrollIntoView();
    }
  }

  Modificar(){
    console.log(this.usuario)
    this.phpservide.modificar(this.usuario).subscribe((res:any)=>{
      console.log(res);
      if(res['resultado'] === 'OK'){
        alert(res['mensaje']);
      }else{
        alert('Ocurrió un problema');
      }
    });
    this.MostrarTodo();
    console.log(this.usuarios);
  }
}
