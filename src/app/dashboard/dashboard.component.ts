import { Component } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private _router:Router){}

  canDeactivate(){
    return confirm("Are you sure to leave this page -- home us");
  }

  gotoabout(){
    // let navigationextas:NavigationExtras={
    //   queryParams:{
    //     firstname:'Chandan',
    //     lastname:'singh',
    //     //gender:'male'
    //   }
    // }
    // this._router.navigate(['aboutus'],navigationextas);

    this._router.navigate(['aboutus'],
    {
        queryParams:{
        firstname:'Chandan',
        lastname:'singh',
        //gender:'male'
      }
    }
    )
  }

}
