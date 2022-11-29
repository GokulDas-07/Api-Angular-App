import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private api:ApiService){
    api.fetchProduct().subscribe(
      (response)=>{
        this.list=response;
      }
    )
  }

  list:any={}

}
