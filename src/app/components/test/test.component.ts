import { Component, OnInit } from '@angular/core';
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
    id : null,
    contrasena: null,
    nombre: null,
    telefono: null,
    correo: null
  }

  constructor(private phpservide: PhpService) { }

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
      if(res['resultado'] === 'OK'){
        alert(res['mensaje']);
      }else{
        alert('Ocurrió un problema');
      }
    });
    this.MostrarTodo();
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
