import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  name: string = "Ajeet Singh";
  constructor() {

  }

  add(a: number, b: number) {
    return a + b;
  }

  // ngAfterContentInit(){
  //   console.log("ChildComponent ngAfterContentInit called");
  // }
}
