import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';

const routes: Routes = [
  {path:"",component:PassengerDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
