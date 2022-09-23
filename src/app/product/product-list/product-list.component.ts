import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  muestraImg:boolean=false;
  muestraImagen():void{
    this.muestraImg=!this.muestraImg;
  }

  products:IProducto[]=[
    {
      "product1":1,
      "productName":'Sentra',
      "description": 'auto familiar 4 puertas',
      "listFilter":'',
      "createDate": "Mayo 21, 2011",
      "price": 130000,
      "rating": 3.6,
      "imageUrl": "https://th.bing.com/th/id/OIP.OD9ruSdembEoAbSzjixraQHaEI?pid=ImgDet&rs=1"
    },
    {
      "product1":2,
      "productName":'Thomas',
      "description": 'Thomas el tren',
      "listFilter":'',
      "createDate": "Mayo 10, 2006",
      "price": 10,
      "rating": 0.1,
      "imageUrl": "https://th.bing.com/th/id/R.fa5aafc8d8e6d58a6ba2fc625291c1d7?rik=1lqY6cWKa6CXmg&pid=ImgRaw&r=0"
    },
    {
      "product1":3,
      "productName":'McQueen',
      "description": 'McQUeen Car',
      "listFilter":'',
      "createDate": "Junio 15, 2010",
      "price": 100000,
      "rating": 4.5,
      "imageUrl": "https://th.bing.com/th/id/R.277b6ae7ccb65e90326aa26029f48762?rik=M%2b0Ie0pfWvs%2b4w&pid=ImgRaw&r=0"
    },
  ]

  ngOnInit(): void {
  }

}
