import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primerapp';


  HacerCambios()
  {
    this.title = "cambio a angular 2021";

  }

  sumaEdades()
  {
    


  }

}
