import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elturel } from './elturel';

describe('Elturel', () => {
  let component: Elturel;
  let fixture: ComponentFixture<Elturel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elturel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elturel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
