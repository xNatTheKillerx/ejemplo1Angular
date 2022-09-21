import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

  total:number=0;
  numero1;
  numero2;
  numero3;

  constructor() { }

    

    sumar(){
      switch(this.numero3){
        case 'sumar':
          this.total= parseInt(this.numero1)+parseInt(this.numero2);
          break;

          case 'restar':
          this.total= parseInt(this.numero1)-parseInt(this.numero2);
          break;

          case 'multiplicar':
          this.total= parseInt(this.numero1)*parseInt(this.numero2);
          break;

          case 'dividir':
          this.total= parseInt(this.numero1)/parseInt(this.numero2);
          break;
      }

      if(this.numero3==1){
        this.total= parseInt(this.numero1)+parseInt(this.numero2);
      }
      else if(this.numero3==2){
        this.total= parseInt(this.numero1)-parseInt(this.numero2);
      }
      else if(this.numero3==3){
        this.total= parseInt(this.numero1)*parseInt(this.numero2);
      }
      else if(this.numero3==4){
        this.total= parseInt(this.numero1)/parseInt(this.numero2);
      }

    }

}
