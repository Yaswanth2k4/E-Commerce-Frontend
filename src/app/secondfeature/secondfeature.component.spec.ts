import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondfeatureComponent } from './secondfeature.component';

describe('SecondfeatureComponent', () => {
  let component: SecondfeatureComponent;
  let fixture: ComponentFixture<SecondfeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondfeatureComponent]
    });
    fixture = TestBed.createComponent(SecondfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
