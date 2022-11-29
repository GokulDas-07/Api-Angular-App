import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  constructor(private api:ApiService){
    api.fetchQuotes().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

  data:any={}

}
