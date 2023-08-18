import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhpService {

  url = 'https://localhost/phpangular/'; 
  constructor(private http: HttpClient) { }

  mostrarTodo(){
    console.log('metodo ok')
    console.log(this.http.get(`${this.url}mostrarTodo.php`),{responseType:'text'});
      return this.http.get(`${this.url}mostrarTodo.php`);
  }

  agregar(usuario:any){
    return this.http.post(`${this.url}agregar.php`,JSON.stringify(usuario));
  }

  eliminar(id:number){
    return this.http.get(`${this.url}eliminar.php?id=${id}`);
  }

  seleccionar(id:number){
    return this.http.get(`${this.url}seleccionar.php?id=${id}`);
  }

  iniciarsesion(id:any,contrasena:any){
    return this.http.get(`${this.url}iniciarsesion.php?id=${id}&contrasena=${contrasena}`);
  }

  modificar(usuario:any){
    return this.http.post(`${this.url}update.php`,JSON.stringify(usuario));
  }
}
