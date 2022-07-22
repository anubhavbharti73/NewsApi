import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupforComponent } from './signupfor.component';

describe('SignupforComponent', () => {
  let component: SignupforComponent;
  let fixture: ComponentFixture<SignupforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
