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
import { StudentaccountdetailsComponent } from './studentaccountdetails/studentaccountdetails.component';
import { StudentparentdetailsComponent } from './studentparentdetails/studentparentdetails.component';
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './book/bookdetails/bookdetails.component';
import { LoginComponent } from './login/login.component';


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
    StudentaccountdetailsComponent,
    StudentparentdetailsComponent,
    BookComponent,
    BookdetailsComponent,
    LoginComponent,



    
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
