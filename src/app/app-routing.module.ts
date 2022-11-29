import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { UsPublicComponent } from './us-public/us-public.component';

const routes: Routes = [
  {path:"",component:PassengerDataComponent},
  {path:"us",component:UsPublicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
