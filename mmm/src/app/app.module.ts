import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import { Student2Module } from './student2/student2.module';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { HomeComponent } from './home/home.component';
// import { PersonModule } from './person/person.module';
// import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentdetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Student2Module,  
    // PersonModule,
    // CompanyModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    console.log("app module loaded..");
  }
}
