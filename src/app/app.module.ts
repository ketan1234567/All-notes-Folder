import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,
    StudentComponent,
    StudentregistrationComponent,
    StudentdetailsComponent,



    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // constructor(){
  //   console.log("module constructor called");
  // }
}
