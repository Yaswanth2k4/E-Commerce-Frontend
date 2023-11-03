import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferitemComponent } from './offeritem.component';

describe('OfferitemComponent', () => {
  let component: OfferitemComponent;
  let fixture: ComponentFixture<OfferitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferitemComponent]
    });
    fixture = TestBed.createComponent(OfferitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
