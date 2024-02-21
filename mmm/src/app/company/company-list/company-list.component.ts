import { Component } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {

  company: any;

  constructor() { }
  ngOnInit() {
    this.company = [
      { name: 'HCL', country: 'India' },
      { name: 'TCS', country: 'USA' },
      { name: 'Sahosoft Technologies', country: 'India' },
      { name: 'Wipro', country: 'UK' },
      { name: 'infosis', country: 'India' },
    ]
  }

}
