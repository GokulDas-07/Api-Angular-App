import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {
  constructor(private api:ApiService){
    api.fetchUserData().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

  data:any={}

}
