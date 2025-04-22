import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryLocationComponent } from './delivery-location.component';

describe('DeliveryLocationComponent', () => {
  let component: DeliveryLocationComponent;
  let fixture: ComponentFixture<DeliveryLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryLocationComponent]
    });
    fixture = TestBed.createComponent(DeliveryLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
