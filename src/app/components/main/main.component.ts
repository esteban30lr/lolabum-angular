import { Component, OnInit } from '@angular/core';
import { PhpService } from 'src/app/services/php.service';

@Component({
  selector: 'app-main',
  templateUrl:'./main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tittle = 'VISTA DE PROVEEDORES'

  proveedores=null;

  proveedor = {
    id_proveedor: null,
    nombre_proveedor: null,
    direccion_proveedor:null,
    correo_proveedor:null,
    telefono_proveedor:null,
    web_proveedor:null
  }

  constructor(private phpservide: PhpService) { }

  ngOnInit() {
    this.MostrarTodoProveedor();
  }
  
  MostrarTodoProveedor(){
    this.phpservide.mostrarTodoProveedor().subscribe((res:any)=>{
      console.log(res);
      this.proveedores = res;
    });
    console.log(this.proveedores);
  }

  Agregar(){
    console.log(this.proveedor)
    this.phpservide.agregarProveedor(this.proveedor).subscribe((res:any)=>{
      console.log(res);
      this.MostrarTodoProveedor();
      if(res['resultado'] === 'OK'){
        alert(res['mensaje']);
      }else{
        alert('Ocurrió un problema');
      }
    });
    console.log(this.proveedores);
  }


  Eliminar(id:number){
    this.phpservide.eliminarProveedor(id).subscribe(datos =>{
        this.MostrarTodoProveedor();
    });
  }

  Seleccionar(id:number){
    this.phpservide.seleccionarProveedor(id).subscribe((res:any)=>{
      console.log(res);
      this.proveedor = res[0];
    });
    console.log(this.proveedores);
  }

  Modificar(){
    console.log(this.proveedor)
    this.phpservide.modificarProveedor(this.proveedor).subscribe((res:any)=>{
      this.MostrarTodoProveedor();
      console.log(res);
      if(res['resultado'] === 'OK'){
        alert(res['mensaje']);
      }else{
        alert('Ocurrió un problema');
      }
    });
    console.log(this.proveedores);
  }
}
