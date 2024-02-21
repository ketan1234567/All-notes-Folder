import { Component } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  person: any;
  constructor() { }
  ngOnInit() {
    this.person = [
      { name: 'Chandan Kumar', country: 'India' },
      { name: 'Ajeet Kumar Singh', country: 'USA' },
      { name: 'Pawan Kumar', country: 'UK' },
      { name: 'Rohit Kumar', country: 'India' },
      { name: 'Soniya pandey', country: 'India' },
    ]
  }

}
