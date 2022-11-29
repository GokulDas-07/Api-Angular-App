import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { ProductListComponent } from './product-list/product-list.component';
import { QuotesComponent } from './quotes/quotes.component';
import { TodosComponent } from './todos/todos.component';
import { UsPublicComponent } from './us-public/us-public.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {path:"",component:PassengerDataComponent},
  {path:"us",component:UsPublicComponent},
  {path:"userinfo",component:UserInfoComponent},
  {path:"productlist",component:ProductListComponent},
  {path:"userdata",component:UserDataComponent},
  {path:"todos",component:TodosComponent},
  {path:"quotes",component:QuotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
