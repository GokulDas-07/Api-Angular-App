import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { UsPublicComponent } from './us-public/us-public.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {path:"",component:PassengerDataComponent},
  {path:"us",component:UsPublicComponent},
  {path:"userinfo",component:UserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
