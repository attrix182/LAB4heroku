import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primerapp';
  edadUno = '';
  edadDos = '';
  resultadoSuma = 0;
  resultadoPromedio = 0;


  HacerCambios() {
    this.title = "cambio a angular 2021";

  }

  SumaEdades() {

    this.resultadoSuma = parseInt(this.edadUno) + parseInt(this.edadDos);

  }

  PromedioEdades() {

    this.resultadoPromedio = this.resultadoSuma / 2;

  }

  Limpiar() {
    this.edadUno = '';
    this.edadDos = '';
    this.resultadoSuma = 0;
    this.resultadoPromedio = 0;

  }

}

export class Usuario {

  public nombre: string;
  public clave: string;

  public constructor() {
    this.nombre = '';
    this.clave = '';

  }



}

