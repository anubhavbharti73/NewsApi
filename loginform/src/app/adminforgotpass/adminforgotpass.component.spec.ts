import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminforgotpassComponent } from './adminforgotpass.component';

describe('AdminforgotpassComponent', () => {
  let component: AdminforgotpassComponent;
  let fixture: ComponentFixture<AdminforgotpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminforgotpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminforgotpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
