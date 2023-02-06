import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  {path: "all" ,component:AllUsersComponent},
  {path:"add" , component:AdduserComponent},
  {path:"update/:id", component:UpdateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
