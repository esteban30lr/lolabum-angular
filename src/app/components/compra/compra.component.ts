import { Component, OnInit } from '@angular/core';
import { PhpService } from 'src/app/services/php.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {


  tittle = 'VISTA DE PRODUCTOS'

  //productos
  productos: any[] = [];

  producto = {
    id_producto: null,
    cantidad: null,
    nombre_producto: null,
    precio: null,
    nombre_proveedor: null,
    id_proveedor: null
  }

  //proveedores
  proveedores: any[] = [];

  proveedor = {
    id_proveedor: null,
    nombre_proveedor: null,
    direccion_proveedor: null,
    correo_proveedor: null,
    telefono_proveedor: null,
    web_proveedor: null
  }

  //clientes
  clientes: any[] = [];

  cliente = {
    id_cliente: null,
    nombre_cliente: null,
    apellido_cliente: null,
    telefono_cliente: null,
    direccion_cliente: null,
    correo_cliente: null
  }

  //compra 
  compra = {
    id_producto: null,
    id_cliente: null,
    fecha: null as string | null,
    cantidad: null
  }

  //recibo
  recibos: any[] = [];
  recibo = {
    fecha:null,
    cantidad:null,
    nombre_producto:null,
    nombre_cliente:null,
    total:null
  }

  total={
    total:null
  };

  constructor(private phpservide: PhpService) { }

  ngOnInit() {
    this.MostrarTodoProveedor();
    this.MostrarTodoProducto();
    this.MostrarTodoClientes();
  }

  MostrarTodoClientes() {
    this.phpservide.mostrarTodo().subscribe((res: any) => {
      console.log(res);
      this.clientes = res;
    })
  }

  MostrarTodoProveedor() {
    this.phpservide.mostrarTodoProveedor().subscribe((res: any) => {
      console.log(res);
      this.proveedores = res;
    });
    console.log(this.proveedores);
  }

  MostrarTodoProducto() {
    this.phpservide.mostrarTodoProducto().subscribe((res: any) => {
      console.log(res);
      this.productos = res;
    });
    console.log(this.productos);
  }

  MostrarRecibo(nombre:any) {
    this.phpservide.mostrarRecibo(nombre).subscribe((res: any) => {
      console.log(res);
      this.recibos = res;
      let f;
      this.recibos.forEach(element => {
        f = element.fecha.date.split(" ");
        element.fecha.date = f[0];
      });
    });
    console.log(this.recibos);
  };

  MostrarTotal(id:any){
    this.phpservide.mostrarTotal(id).subscribe((res:any)=>{
      let response = {
        data:"total",
        res:res[0]
      }
      console.log(response);
      this.total.total = res[0].suma_total;
    });
  }

  Agregar() {
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
    const dia = fechaActual.getDate();
    
    // Formatear la fecha
    let fechaFormateada = `${anio}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
    this.compra.fecha = fechaFormateada;
    console.log(this.compra.fecha)
    console.log(this.compra)
    //peticion
    this.phpservide.agregarCompra(this.compra).subscribe((res: any) => {
      console.log(res);
      if (res['resultado'] === 'OK') {
        alert(res['mensaje']);
      } else {
        alert('Ocurrió un problema');
      }
      this.actualizarCliente(this.cliente.nombre_cliente);
    });
  }


  Eliminar(id: number) {
    this.phpservide.eliminarProveedor(id).subscribe(datos => {
      this.MostrarTodoProveedor();
    });
  }

  Seleccionar(id: number) {
    this.phpservide.seleccionarProducto(id).subscribe((res: any) => {
      console.log(res);
      this.producto = res[0];
    });
    console.log(this.proveedores);
  }

  Modificar() {
    console.log(this.producto)
    this.phpservide.modificarProducto(this.producto).subscribe((res: any) => {
      this.MostrarTodoProducto();
      console.log(res);
      if (res['resultado'] === 'OK') {
        alert(res['mensaje']);
      } else {
        alert('Ocurrió un problema');
      }
    });
    console.log(this.producto);
  }

  actualizarCliente(nombre: any) {
    this.compra.id_cliente = null;
    this.clientes.forEach((cliente) => {
      if (cliente.nombre_cliente === nombre) {
        console.log(cliente.nombre_cliente);
        console.log(nombre);
        this.compra.id_cliente = cliente.id_cliente;
      }
    })
    this.MostrarRecibo(nombre);
    this.MostrarTotal(this.compra.id_cliente);
    console.log(this.compra.id_cliente);
  }
  actualizarProducto(nombre: any) {
    this.compra.id_producto = null;
    this.productos.forEach((producto) => {
      if (producto.nombre_producto === nombre) {
        console.log(producto.nombre_producto);
        console.log(nombre);
        this.compra.id_producto = producto.id_producto;
      }
    })
    console.log(this.compra.id_producto);
  }
}
