import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverWrapperComponent } from './hover-wrapper.component';

describe('HoverWrapper', () => {
  let component: HoverWrapperComponent;
  let fixture: ComponentFixture<HoverWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverWrapperComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
