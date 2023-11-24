import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  constructor(private _router:Router, private _location:Location){

    // console.log(this._router.getCurrentNavigation().extras.state);
  }

  ngOnInit(){
    //console.log(this._router.getCurrentNavigation().extras.state);
    //console.log(this._location.getState());
    console.log(history.state);
  }



}
