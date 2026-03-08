import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nathan } from './nathan';

describe('Nathan', () => {
  let component: Nathan;
  let fixture: ComponentFixture<Nathan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nathan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nathan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
