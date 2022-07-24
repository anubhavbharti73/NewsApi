import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonpremiumComponent } from './nonpremium.component';

describe('NonpremiumComponent', () => {
  let component: NonpremiumComponent;
  let fixture: ComponentFixture<NonpremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonpremiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonpremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
