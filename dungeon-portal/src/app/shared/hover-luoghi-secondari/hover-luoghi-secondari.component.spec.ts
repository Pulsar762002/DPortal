import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverLuoghiSecondariComponent } from './hover-luoghi-secondari.component';

describe('HoverLuoghiSecondari', () => {
  let component: HoverLuoghiSecondariComponent;
  let fixture: ComponentFixture<HoverLuoghiSecondariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverLuoghiSecondariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverLuoghiSecondariComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
