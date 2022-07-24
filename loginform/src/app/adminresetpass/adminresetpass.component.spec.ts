import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresetpassComponent } from './adminresetpass.component';

describe('AdminresetpassComponent', () => {
  let component: AdminresetpassComponent;
  let fixture: ComponentFixture<AdminresetpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminresetpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminresetpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
