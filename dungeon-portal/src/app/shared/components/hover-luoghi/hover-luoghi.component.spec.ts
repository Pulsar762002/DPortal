import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverLuoghiComponent } from './hover-luoghi.component';

describe('HoverLuoghi', () => {
  let component: HoverLuoghiComponent;
  let fixture: ComponentFixture<HoverLuoghiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverLuoghiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverLuoghiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
