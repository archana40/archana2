import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillablePackageDetailsComponent } from './billable-package-details.component';

describe('BillablePackageDetailsComponent', () => {
  let component: BillablePackageDetailsComponent;
  let fixture: ComponentFixture<BillablePackageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillablePackageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillablePackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
