import { ChangeDetectorRef, Component, ContentChild, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  //@ContentChild(ChildComponent) childComponent: ChildComponent;
  //@ContentChild(ChildComponent,{static : true}) childComponent : ChildComponent;


  @ViewChild(ChildComponent) childComponent: ChildComponent;
  //@ViewChild(ChildComponent, { static: true }) childComponent: ChildComponent;

  constructor(private cd : ChangeDetectorRef) {

  }

  ngOnInit() {
    //debugger;
    // this.childComponent.name = "Chandan Kumar";
    // console.log(this.childComponent.name);
    // console.log(this.childComponent.add(10,20));
  }

  // ngAfterContentInit() {
  //   console.log("ParentComponent ngAfterContentInit called");
  //    this.childComponent.name = "Chandan Kumar";
  //   // console.log(this.childComponent.name);
  //   // console.log(this.childComponent.add(10, 20));
  // }
  // ngAfterContentChecked() {
  //   console.log("ParentComponent ngAfterContentChecked called");
  //   //this.childComponent.name = "Pawan Kumar";
  // }

  ngAfterViewInit() {
    console.log("ParentComponent ngAfterViewInit called");

    // this.childComponent.name = "Chandan Kumar";
    // console.log(this.childComponent.name);
    // console.log(this.childComponent.add(10, 20));
    // this.cd.detectChanges();
  }
  ngAfterViewChecked(){
    // console.log("ParentComponent ngAfterViewChecked called");
    // this.childComponent.name = "Chandan Kumar";
    // console.log(this.childComponent.name);
    // console.log(this.childComponent.add(10, 20));
    // this.cd.detectChanges();
  }
  getData() {
    console.log(this.childComponent.name);
  }
  changeData() {
    this.childComponent.name = "Samir Kumar";
  }
}

