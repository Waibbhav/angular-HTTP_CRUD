import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { HttpClientModule } from '@angular/common/http'
import { UserserviseService } from './userservise.service';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    SingleUserComponent,
    AdduserComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserserviseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
