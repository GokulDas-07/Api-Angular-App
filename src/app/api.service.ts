import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchPassenger=()=>
  {
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
  }

  fetchUs=()=>
  {
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }

  fetchUserInfo=()=>
  {
    return this.http.get("https://reqres.in/api/users?page=1")
  }

  fetchProduct=()=>
  {
    return this.http.get("https://dummyjson.com/products")
  }

  fetchUserData=()=>
  {
    return this.http.get("https://dummyjson.com/users")
  }

  fetchTodos=()=>
  {
    return this.http.get("https://dummyjson.com/todos")
  }

  fetchQuotes=()=>
  {
    return this.http.get("https://dummyjson.com/quotes")
  }
}
