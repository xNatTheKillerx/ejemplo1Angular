import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo1Angular';

  pelicula={
    titulo: 'SeperMan',
    fechalanzamiento: new Date(),
    precio: 233.45
  };

  duplicarValor(x:number):number{
    return x*2;
  }
}
