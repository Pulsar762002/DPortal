import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarsusBell } from './darsus-bell';

describe('DarsusBell', () => {
  let component: DarsusBell;
  let fixture: ComponentFixture<DarsusBell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarsusBell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarsusBell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
