import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakewalletComponent } from './fakewallet.component';

describe('FakewalletComponent', () => {
  let component: FakewalletComponent;
  let fixture: ComponentFixture<FakewalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakewalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakewalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
