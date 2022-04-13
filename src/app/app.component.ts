import { Component } from '@angular/core';

//decorador funcionaidad que se le aplica a una clase para modificar su comportamiento
@Component({
  //etiqueta para identificar componente
  selector: 'app-root',
  //referencia para cargar el html del componente (vista)
  templateUrl: './app.component.html',
  //referencia para cargar el archivo de estilos
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'titulo de componente';
}
