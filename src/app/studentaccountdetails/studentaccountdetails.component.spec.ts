import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaccountdetailsComponent } from './studentaccountdetails.component';

describe('StudentaccountdetailsComponent', () => {
  let component: StudentaccountdetailsComponent;
  let fixture: ComponentFixture<StudentaccountdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentaccountdetailsComponent]
    });
    fixture = TestBed.createComponent(StudentaccountdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
