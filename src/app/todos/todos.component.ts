import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  constructor(private api:ApiService){
    api.fetchTodos().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

  data:any={}

}
