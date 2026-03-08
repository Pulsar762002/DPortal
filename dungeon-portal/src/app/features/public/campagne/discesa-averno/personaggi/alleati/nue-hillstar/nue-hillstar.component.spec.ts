import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NueHillstar } from './nue-hillstar';

describe('NueHillstar', () => {
  let component: NueHillstar;
  let fixture: ComponentFixture<NueHillstar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NueHillstar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NueHillstar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
