import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBestsellersComponent } from './top-bestsellers.component';

describe('TopBestsellersComponent', () => {
  let component: TopBestsellersComponent;
  let fixture: ComponentFixture<TopBestsellersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopBestsellersComponent]
    });
    fixture = TestBed.createComponent(TopBestsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
