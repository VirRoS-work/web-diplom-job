import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegApplicantComponent } from './reg-applicant.component';

describe('RegApplicantComponent', () => {
  let component: RegApplicantComponent;
  let fixture: ComponentFixture<RegApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
