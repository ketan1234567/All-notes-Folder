import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {
  title = 'Welcome to Sahosoft Technologies';

  // country = 'UK';
linkcss="active home";
  newabout = 'aboutus';

  getcolor(){
    return "active home";
  }

  constructor(private _router: Router) {
    // if (this.country == 'india') {
    //   this.newabout = "aboutus"
    // }
    // if (this.country == 'USA') {
    //   this.newabout = "aboutus2"
    // }
    // if (this.country == 'UK') {
    //   this.newabout = "aboutus3"
    // }
  }


  gotocontactus() {
    // this._router.navigate(['contactus']);
    this._router.navigate(['contactus', 501]);
  }

  gotoaboutus() {
    this._router.navigateByUrl("aboutus", { state: { empid: 201, empname: 'Ajeet Kumar' } });
  }
}
