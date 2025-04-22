import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominosUiComponent } from './dominos-ui.component';

describe('DominosUiComponent', () => {
  let component: DominosUiComponent;
  let fixture: ComponentFixture<DominosUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DominosUiComponent]
    });
    fixture = TestBed.createComponent(DominosUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
