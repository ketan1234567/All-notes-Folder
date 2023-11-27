import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { Testdata } from './testdata';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(Testdata)
  
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // constructor(){
  //   console.log("module constructor called");
  // }
}
