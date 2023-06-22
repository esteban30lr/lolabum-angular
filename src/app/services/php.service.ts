import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhpService {

  url = 'http://localhost:83/php/';

  constructor(private http: HttpClient) { }

  /*cliente
  *********
  *********
  *********
  *********
  *********
  *********
  */
  mostrarTodo() {
    console.log('metodo ok')
    console.log(this.http.get(`${this.url}cliente/get.php`), { responseType: 'text' });
    return this.http.get(`${this.url}cliente/get.php`);
  }

  agregar(usuario: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}cliente/create.php`, JSON.stringify(usuario), { headers: headers });
  }

  eliminar(id: number) {
    return this.http.get(`${this.url}cliente/delete.php?id=${id}`);
  }

  seleccionar(id: number) {
    return this.http.get(`${this.url}cliente/seleccionar.php?id=${id}`);
  }

  crearAdmin(usuario:any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}sesion/login.php`, JSON.stringify(usuario), { headers: headers });
  }

  iniciarsesion(usuario:any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}sesion/iniciarsesion.php`, JSON.stringify(usuario), { headers: headers });
  }

  modificar(usuario: any) {
    return this.http.post(`${this.url}cliente/update.php`, JSON.stringify(usuario));
  }

  /*proveedor
  *********
  *********
  *********
  *********
  *********
  *********
  */
  mostrarTodoProveedor() {
    console.log('metodo ok')
    console.log(this.http.get(`${this.url}proveedor/getProveedor.php`), { responseType: 'text' });
    return this.http.get(`${this.url}proveedor/getProveedor.php`);
  }

  agregarProveedor(usuario: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}proveedor/createProveedor.php`, JSON.stringify(usuario), { headers: headers });
  }

  eliminarProveedor(id: number) {
    return this.http.get(`${this.url}proveedor/deleteProveedor.php?id=${id}`);
  }

  seleccionarProveedor(id: number) {
    return this.http.get(`${this.url}proveedor/seleccionarProveedor.php?id=${id}`);
  }

  iniciarsesionProveedor(id: any, contrasena: any) {
    return this.http.get(`${this.url}iniciarsesion.php?id=${id}&contrasena=${contrasena}`);
  }

  modificarProveedor(usuario: any) {
    return this.http.post(`${this.url}proveedor/updateProveedor.php`, JSON.stringify(usuario));
  }

  /*producto
  *********
  *********
  *********
  *********
  *********
  *********
  */
  mostrarTodoProducto() {
    console.log('metodo ok')
    console.log(this.http.get(`${this.url}producto/get.php`), { responseType: 'text' });
    return this.http.get(`${this.url}producto/get.php`);
  }

  agregarProducto(usuario: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}producto/create.php`, JSON.stringify(usuario), { headers: headers });
  }

  eliminarProducto(id: number) {
    return this.http.get(`${this.url}producto/delete.php?id=${id}`);
  }

  seleccionarProducto(id: number) {
    return this.http.get(`${this.url}producto/seleccionar.php?id=${id}`);
  }

  iniciarsesionProducto(id: any, contrasena: any) {
    return this.http.get(`${this.url}producto/iniciarsesion.php?id=${id}&contrasena=${contrasena}`);
  }

  modificarProducto(usuario: any) {
    return this.http.post(`${this.url}producto/update.php`, JSON.stringify(usuario));
  }

  /*producto
  *********
  *********
  *********
  *********
  *********
  *********
  */

  agregarCompra(usuario: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}recibo/create.php`, JSON.stringify(usuario), { headers: headers });
  }

  mostrarRecibo(id:any) {
    console.log('metodo ok')
    console.log(this.http.get(`${this.url}recibo/get.php?id=${id}`), { responseType: 'text' });
    return this.http.get(`${this.url}recibo/get.php?id=${id}`);
  }

  mostrarTotal(id:any) {
    console.log('metodo ok')
    console.log(this.http.get(`${this.url}recibo/total.php?id=${id}`), { responseType: 'text' });
    return this.http.get(`${this.url}recibo/total.php?id=${id}`);
  }
}
