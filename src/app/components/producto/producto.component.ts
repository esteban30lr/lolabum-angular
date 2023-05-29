import { Component, OnInit } from '@angular/core';
import { PhpService } from 'src/app/services/php.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  tittle = 'VISTA DE PRODUCTOS'

  //productos
  productos = null;

  producto = {
    id_producto: null,
    cantidad:null,
    nombre_producto: null,
    precio: null,
    nombre_proveedor:null,
    id_proveedor:null
  }

  //proveedores
  proveedores: any[] = [];

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
    this.MostrarTodoProducto();
  }
  
  MostrarTodoProveedor(){
    this.phpservide.mostrarTodoProveedor().subscribe((res:any)=>{
      console.log(res);
      this.proveedores = res;
    });
    console.log(this.proveedores);
  }

  MostrarTodoProducto(){
    this.phpservide.mostrarTodoProducto().subscribe((res:any)=>{
      console.log(res);
      this.productos = res;
    });
    console.log(this.productos);
  }

  Agregar(){
    console.log(this.producto)
    this.phpservide.agregarProducto(this.producto).subscribe((res:any)=>{
      console.log(res);
      this.MostrarTodoProducto();
      if(res['resultado'] === 'OK'){
        alert(res['mensaje']);
      }else{
        alert('Ocurrió un problema');
      }
    });
    console.log(this.producto);
  }


  Eliminar(id:number){
    this.phpservide.eliminarProveedor(id).subscribe(datos =>{
        this.MostrarTodoProveedor();
    });
  }

  Seleccionar(id:number){
    this.phpservide.seleccionarProducto(id).subscribe((res:any)=>{
      console.log(res);
      this.producto = res[0];
    });
    console.log(this.proveedores);
  }

  Modificar(){
    console.log(this.producto)
    this.phpservide.modificarProducto(this.producto).subscribe((res:any)=>{
      this.MostrarTodoProducto();
      console.log(res);
      if(res['resultado'] === 'OK'){
        alert(res['mensaje']);
      }else{
        alert('Ocurrió un problema');
      }
    });
    console.log(this.producto);
  }

  actualizarDatosProveedor(nombre: any) {
    //console.log(nombre)
    this.producto.id_proveedor = null;
    this.proveedores.forEach((proveedor) => {
      if(proveedor.nombre_proveedor === nombre){
        console.log(proveedor.nombre);
        console.log(nombre);
        this.producto.id_proveedor = proveedor.id_proveedor;
      }
    })
    console.log(this.producto.id_proveedor);
  }
}
