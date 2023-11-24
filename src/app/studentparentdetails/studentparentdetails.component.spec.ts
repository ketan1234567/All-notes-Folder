import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentparentdetailsComponent } from './studentparentdetails.component';

describe('StudentparentdetailsComponent', () => {
  let component: StudentparentdetailsComponent;
  let fixture: ComponentFixture<StudentparentdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentparentdetailsComponent]
    });
    fixture = TestBed.createComponent(StudentparentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
