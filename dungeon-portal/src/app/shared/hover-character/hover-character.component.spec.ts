import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverCharacter } from './hover-character';

describe('HoverCharacter', () => {
  let component: HoverCharacter;
  let fixture: ComponentFixture<HoverCharacter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverCharacter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverCharacter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
