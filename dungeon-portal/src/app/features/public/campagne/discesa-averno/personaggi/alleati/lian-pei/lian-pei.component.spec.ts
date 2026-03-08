import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LianPei } from './lian-pei';

describe('LianPei', () => {
  let component: LianPei;
  let fixture: ComponentFixture<LianPei>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LianPei]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LianPei);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
