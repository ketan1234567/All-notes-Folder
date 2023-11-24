import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  // isfinalsubmit(){
  //   return confirm("Are you sure to leave this page -- contact us");
  // }

  canDeactivate(){
    return confirm("Are you sure to leave this page -- contact us");
  }

  constructor( private _route:ActivatedRoute){

  }

  ngOnInit(){
    this._route.data.subscribe(obj=>{
      console.log(obj);
    })
  }

}
